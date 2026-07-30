// 洞穴矿车 3D 场景
var caveScene, caveCamera, caveRenderer, caveControls, caveCurrentCenter;
var caveShowAxes = true, caveShowLabels = true, cavePoints = [], caveLabels = [], caveAxesLines = [];

function initCaves3DScene() {
    var container = document.getElementById('caves-canvas-container');
    if (!container) return;

    caveScene = new THREE.Scene();
    caveScene.background = new THREE.Color(0xf1f5f9);

    caveCamera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 50000);
    caveCamera.position.set(500, 300, 500);
    caveCamera.lookAt(0, 0, 0);

    caveRenderer = new THREE.WebGLRenderer({ antialias: true });
    caveRenderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(caveRenderer.domElement);

    caveControls = new THREE.OrbitControls(caveCamera, caveRenderer.domElement);
    caveControls.enableDamping = true;
    caveControls.dampingFactor = 0.1;
    caveControls.minDistance = 20;
    caveControls.maxDistance = 20000;

    window.addEventListener('resize', onCavesWindowResize);
    animateCaves3D();
}

function onCavesWindowResize() {
    var container = document.getElementById('caves-canvas-container');
    if (!container || !caveCamera || !caveRenderer) return;
    var rect = container.getBoundingClientRect();
    caveCamera.aspect = rect.width / rect.height;
    caveCamera.updateProjectionMatrix();
    caveRenderer.setSize(rect.width, rect.height);
    updateCaveLabels();
}

function clearCaves3D() {
    cavePoints.forEach(function(p) { caveScene.remove(p); });
    cavePoints = [];
    caveLabels.forEach(function(l) {
        if (l.element && l.element.parentNode) l.element.parentNode.removeChild(l.element);
    });
    caveLabels = [];
    caveAxesLines.forEach(function(line) { caveScene.remove(line); });
    caveAxesLines = [];
}

function drawCustomAxes(cx, cy, cz, minX, maxX, minY, maxY, minZ, maxZ) {
    clearAxesLines();

    // 稍微扩展范围
    var pad = Math.max(maxX - minX, maxY - minY, maxZ - minZ, 1) * 0.1;

    function makeLine(x1, y1, z1, x2, y2, z2, color) {
        var geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute([x1, y1, z1, x2, y2, z2], 3));
        var mat = new THREE.LineBasicMaterial({ color: color, linewidth: 1 });
        var line = new THREE.Line(geo, mat);
        caveScene.add(line);
        caveAxesLines.push(line);

        // 箭头锥体
        var dir = new THREE.Vector3(x2 - x1, y2 - y1, z2 - z1).normalize();
        var length = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) + (z2-z1)*(z2-z1));
        var arrowSize = Math.max(length * 0.06, 2);
        var coneGeo = new THREE.ConeGeometry(arrowSize * 0.6, arrowSize, 6, 1);
        var coneMat = new THREE.MeshBasicMaterial({ color: color });
        var cone = new THREE.Mesh(coneGeo, coneMat);
        cone.position.set(x2, y2, z2);
        cone.lookAt(x1, y1, z1);
        cone.rotateX(Math.PI / 2);
        caveScene.add(cone);
        caveAxesLines.push(cone);
    }

    makeLine(minX - pad, cy, cz, maxX + pad, cy, cz, 0xff4444); // X 红
    makeLine(cx, minY - pad, cz, cx, maxY + pad, cz, 0x44ff44); // Y 绿
    makeLine(cx, cy, minZ - pad, cx, cy, maxZ + pad, 0x4488ff); // Z 蓝
}

function clearAxesLines() {
    caveAxesLines.forEach(function(obj) { caveScene.remove(obj); });
    caveAxesLines = [];
}

function updateCaves3D(caveId) {
    clearCaves3D();
    clearAxesLines();

    var container = document.getElementById('caves-canvas-container');
    if (!container) return;
    container.style.position = 'relative';
    container.style.overflow = 'hidden';

    var targetCave = null;
    var targetTerrain = null;
    caveData.forEach(function(terrain) {
        terrain.caves.forEach(function(cave) {
            if (cave.id === caveId) {
                targetCave = cave;
                targetTerrain = terrain;
            }
        });
    });

    var pointsListEl = document.getElementById('caves-points-list');
    if (!targetCave) {
        if (pointsListEl) pointsListEl.innerHTML = '<p class="text-center text-gray-400 text-sm py-8">请选择一个洞穴</p>';
        return;
    }

    var allCoords = targetCave.coordinates || [];
    if (allCoords.length === 0) {
        if (pointsListEl) pointsListEl.innerHTML = '<p class="text-center text-gray-400 text-sm py-8">该洞穴暂无矿车数据</p>';
        return;
    }

    // 更新洞穴信息
    var infoEl = document.getElementById('cave-info');
    if (infoEl && targetTerrain) {
        infoEl.innerHTML = '<span class="text-xs text-gray-400">' + targetTerrain.terrain + '</span>' +
            '<span class="mx-2 text-gray-300">|</span>' +
            '<span class="font-medium text-dark">' + targetCave.name + '</span>' +
            '<span class="mx-2 text-gray-300">|</span>' +
            '<span class="text-xs text-gray-500">' + allCoords.length + ' 个矿车</span>';
    }

    // 计算平均值和范围
    var sumX = 0, sumY = 0, sumZ = 0;
    var minX = Infinity, maxX = -Infinity;
    var minY = Infinity, maxY = -Infinity;
    var minZ = Infinity, maxZ = -Infinity;

    allCoords.forEach(function(c) {
        sumX += c.x; sumY += c.y; sumZ += c.z;
        if (c.x < minX) minX = c.x; if (c.x > maxX) maxX = c.x;
        if (c.y < minY) minY = c.y; if (c.y > maxY) maxY = c.y;
        if (c.z < minZ) minZ = c.z; if (c.z > maxZ) maxZ = c.z;
    });
    var cx = sumX / allCoords.length, cy = sumY / allCoords.length, cz = sumZ / allCoords.length;

    // 视距
    var spanX = maxX - minX, spanZ = maxZ - minZ;
    var maxSpan = Math.max(spanX, spanZ, 1);
    var cameraDist = Math.max(maxSpan * 2.0, 150);

    // 自定义坐标轴（均值中心，覆盖到最远点）
    if (caveShowAxes) {
        drawCustomAxes(cx, cy, cz, minX, maxX, minY, maxY, minZ, maxZ);
    }

    // 固定小球半径
    var dotRadius = Math.max(maxSpan * 0.015, 2);

    // 创建3D点
    allCoords.forEach(function(coord, i) {
        var geometry = new THREE.SphereGeometry(dotRadius, 8, 8);
        var colorHex = 0xF59E0B;
        var material = new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity: 0.9 });
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(coord.x, coord.y, coord.z);
        mesh.userData = {
            id: i + 1,
            description: coord.description,
            x: coord.x, y: coord.y, z: coord.z
        };
        caveScene.add(mesh);
        cavePoints.push(mesh);

        // 标签
        var div = document.createElement('div');
        div.className = 'absolute bg-slate-800/90 text-white text-xs px-2 py-1 rounded-md z-10 whitespace-nowrap cursor-pointer transition-all';
        div.textContent = '#' + (i + 1) + ' ' + coord.description;

        div.addEventListener('mouseenter', function() {
            this.innerHTML = '<div class="font-bold">' + coord.description + '</div>' +
                '<div class="grid grid-cols-3 gap-1 text-[10px] mt-1">' +
                '<div class="flex items-center"><span class="text-red-400 mr-1">X:</span>' + coord.x + '</div>' +
                '<div class="flex items-center"><span class="text-green-400 mr-1">Y:</span>' + coord.y + '</div>' +
                '<div class="flex items-center"><span class="text-blue-400 mr-1">Z:</span>' + coord.z + '</div></div>';
            this.classList.add('p-2', 'z-20');
            this.classList.remove('px-2', 'py-1', 'z-10');
        });
        div.addEventListener('mouseleave', function() {
            this.textContent = '#' + (i + 1) + ' ' + coord.description;
            this.classList.remove('p-2', 'z-20');
            this.classList.add('px-2', 'py-1', 'z-10');
        });
        container.appendChild(div);
        caveLabels.push({ element: div, mesh: mesh });
    });

    // 调整相机
    caveCamera.position.set(cx + cameraDist * 0.7, cy + cameraDist * 0.8, cz + cameraDist * 0.7);
    caveCamera.lookAt(cx, cy, cz);
    if (caveControls) {
        caveControls.target.set(cx, cy, cz);
        caveControls.update();
    }
    caveCurrentCenter = { x: cx, y: cy, z: cz, dist: cameraDist };

    // 点列表
    if (pointsListEl) {
        pointsListEl.innerHTML = '';
        allCoords.forEach(function(coord, i) {
            var el = document.createElement('div');
            el.className = 'p-2.5 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all text-sm';
            el.innerHTML = '<div class="flex items-center justify-between">' +
                '<span class="font-medium text-dark">#' + (i + 1) + ' ' + coord.description + '</span></div>' +
                '<div class="grid grid-cols-3 gap-1 mt-1 text-xs text-gray-500">' +
                '<span><span class="text-red-400 font-semibold">X</span> ' + coord.x + '</span>' +
                '<span><span class="text-green-400 font-semibold">Y</span> ' + coord.y + '</span>' +
                '<span><span class="text-blue-400 font-semibold">Z</span> ' + coord.z + '</span></div>';
            pointsListEl.appendChild(el);
        });
    }

    updateCaveLabels();
}

function updateCaveLabels() {
    var container = document.getElementById('caves-canvas-container');
    if (!container || !caveCamera) return;
    var rect = container.getBoundingClientRect();
    var cw = rect.width, ch = rect.height;

    caveLabels.forEach(function(label) {
        var el = label.element;
        var mesh = label.mesh;
        var pos = new THREE.Vector3();
        pos.setFromMatrixPosition(mesh.matrixWorld);
        pos.project(caveCamera);
        var x = (pos.x * 0.5 + 0.5) * cw;
        var y = (-pos.y * 0.5 + 0.5) * ch;
        el.style.left = '0';
        el.style.top = '0';
        el.style.transform = 'translate(calc(' + x + 'px - 50%), calc(' + y + 'px - 100%))';
    });
}

function animateCaves3D() {
    requestAnimationFrame(animateCaves3D);
    if (caveControls) caveControls.update();
    updateCaveLabels();
    if (caveRenderer && caveScene && caveCamera) caveRenderer.render(caveScene, caveCamera);
}

// ---- 侧边栏填充 ----

function populateSidebar() {
    var structSidebar = document.getElementById('sidebar-structures');
    if (structSidebar) {
        var structures = loadStructures();
        structSidebar.innerHTML = '';
        structures.forEach(function(s) {
            var a = document.createElement('a');
            a.href = '#structure-' + s.id;
            a.className = 'block px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:text-primary hover:bg-primary/5 transition-all truncate';
            a.textContent = s.name;
            a.setAttribute('data-structure-id', s.id);
            a.title = s.name;
            a.addEventListener('click', function(e) {
                e.preventDefault();
                switchToPage('structures');
                setTimeout(function() {
                    var el = document.querySelector('[data-structure="' + s.id + '"]');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 150);
            });
            structSidebar.appendChild(a);
        });
    }

    var caveSidebar = document.getElementById('sidebar-caves');
    if (caveSidebar) {
        caveSidebar.innerHTML = '';
        caveData.forEach(function(terrain) {
            var terrainTitle = document.createElement('div');
            terrainTitle.className = 'px-3 py-1 text-xs font-semibold text-gray-400 uppercase mt-1';
            terrainTitle.textContent = terrain.terrain;
            caveSidebar.appendChild(terrainTitle);

            terrain.caves.forEach(function(cave) {
                var a = document.createElement('a');
                a.href = '#';
                a.className = 'block px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-all truncate pl-5';
                a.textContent = cave.name;
                a.title = cave.name;
                a.addEventListener('click', function(e) {
                    e.preventDefault();
                    switchToPage('caves');
                    document.getElementById('cave-select').value = cave.id;
                    updateCaves3D(cave.id);
                    caveSidebar.querySelectorAll('a').forEach(function(el) { el.classList.remove('text-amber-600', 'bg-amber-50'); });
                    a.classList.add('text-amber-600', 'bg-amber-50');
                });
                caveSidebar.appendChild(a);
            });
        });
    }
}

// ---- 页面切换 ----

function switchToPage(page) {
    var structPage = document.getElementById('page-structures');
    var cavePage = document.getElementById('page-caves');
    var structCat = document.querySelector('.sidebar-category[data-page="structures"]');
    var caveCat = document.querySelector('.sidebar-category[data-page="caves"]');

    if (page === 'caves') {
        if (structPage) structPage.classList.add('hidden');
        if (cavePage) cavePage.classList.remove('hidden');
        if (structCat) structCat.classList.remove('active');
        if (caveCat) caveCat.classList.add('active');
        if (!caveScene && document.getElementById('caves-canvas-container')) {
            initCaves3DScene();
        }
    } else {
        if (structPage) structPage.classList.remove('hidden');
        if (cavePage) cavePage.classList.add('hidden');
        if (structCat) structCat.classList.add('active');
        if (caveCat) caveCat.classList.remove('active');
    }
}
