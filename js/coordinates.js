// 渲染结构卡片
function renderStructureCard(structure, server) {
    const serverClass = server === 'server1' ? 'server1' : 'server2';
    const server1Coordinates = structure.coordinates.server1 || [];
    const server2Coordinates = structure.coordinates.server2 || [];
    const totalCoordinates = server1Coordinates.length + server2Coordinates.length;
    const coordinates = structure.coordinates[server] || [];
    
    // 确保图片路径安全处理
    const imageUrl = structure.image 
    ? `images/structures/${structure.image}.png` 
    : 'images/structures/1.png';
    
    return `
        <div class="bg-white rounded-2xl shadow-soft overflow-hidden card-hover border border-gray-100 mb-6" 
            data-structure="${structure.id}" data-server="${server}">
            <!-- 结构图片展示区 -->
            <div class="relative">
                <div class="structure-image w-full h-48 bg-cover bg-center transition-transform duration-500 hover:scale-105" 
                    style="background-image: url('${imageUrl}')">
                    <img src="${imageUrl}" class="hidden" onError="this.parentElement.style.backgroundImage='url(images/structures/1.png)'">
                </div>
                <div class="absolute top-4 left-4">
                    <span class="inline-block px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-dark shadow-sm">${structure.type}</span>
                </div>
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold shadow-sm">
                    <i class="fa fa-map-marker mr-1 text-${serverClass}"></i> 
                    ${totalCoordinates}个坐标
                </div>
                <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <!-- 结构信息区 -->
            <div class="p-6">
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <h3 class="text-xl font-bold text-dark">${structure.name}</h3>
                    </div>
                    <div class="text-${serverClass} text-2xl opacity-60">
                        <i class="fa ${structure.icon || 'fa-question-circle'}"></i>
                    </div>
                </div>
                
                <div class="mb-6 text-gray-500 text-sm leading-relaxed">
                    <p>${structure.description || '暂无描述信息'}</p>
                </div>
                
                <!-- 路径标注说明 -->
                ${coordinates.length > 1 ? `
                <div class="mb-4 flex items-center gap-4 text-xs text-gray-400">
                    <span class="flex items-center gap-1"><span class="path-badge path-badge-start">1</span> 起点最近</span>
                    <span class="flex items-center gap-1"><span class="path-badge path-badge-node">N</span> 路径顺序</span>
                    <span class="flex items-center gap-1"><span class="path-badge path-badge-end">${coordinates.length}</span> 终点</span>
                    <span class="text-gray-300">|</span>
                    <span><i class="fa fa-asterisk text-primary/40 mr-1"></i>从(0,0)出发最短路径排序</span>
                </div>
                ` : ''}
                
                <!-- 坐标分布图 -->
                <div class="mt-4 mb-6 cursor-pointer chart-container" 
                    data-structure="${structure.id}" data-server="${server}">
                    <h4 class="font-medium text-sm text-gray-600 mb-2 flex items-center">
                        <i class="fa fa-line-chart mr-1.5 text-primary/50"></i>坐标分布 (X-Z 平面)
                        <span class="text-xs text-gray-400 ml-auto">点击放大</span>
                    </h4>
                    <div class="relative mx-auto bg-white rounded-lg overflow-hidden border border-gray-100" style="width:60%;aspect-ratio:1;">
                        ${coordinates.length > 0 ? `
                            <canvas id="${server}-${structure.id}-chart"></canvas>
                        ` : `
                            <div class="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                                <p>暂无坐标数据</p>
                            </div>
                        `}
                    </div>
                </div>
                
                <!-- 坐标列表 -->
                <div id="${server}-${structure.id}-coordinates" 
                    class="space-y-2 mb-6 max-h-60 overflow-y-auto border border-gray-100 rounded-xl p-1" 
                    data-expanded="false">
                    ${coordinates.length > 0 ? coordinates.map(function(coord, idx) {
                        var badgeClass = idx === 0 ? 'path-badge-start' : (idx === coordinates.length - 1 ? 'path-badge-end' : 'path-badge-node');
                        return `
                        <div class="bg-gray-50 hover:bg-white p-3.5 rounded-lg border border-gray-100 hover:border-${serverClass}/30 hover:shadow-sm transition-all">
                            <div class="flex items-start gap-3">
                                <span class="path-badge ${badgeClass} mt-0.5">${coord.id}</span>
                                <div class="flex-1 min-w-0">
                                    <div class="font-medium text-sm text-dark truncate">${coord.description || '无描述'}</div>
                                    <div class="flex flex-wrap gap-1.5 mt-1.5">
                                        <span class="inline-flex items-center px-1.5 py-0.5 bg-white rounded text-xs font-mono text-gray-600 border border-gray-200">
                                            <span class="text-red-400 font-semibold mr-0.5">X</span>${coord.x}
                                        </span>
                                        <span class="inline-flex items-center px-1.5 py-0.5 bg-white rounded text-xs font-mono text-gray-600 border border-gray-200">
                                            <span class="text-green-400 font-semibold mr-0.5">Y</span>${coord.y}
                                        </span>
                                        <span class="inline-flex items-center px-1.5 py-0.5 bg-white rounded text-xs font-mono text-gray-600 border border-gray-200">
                                            <span class="text-blue-400 font-semibold mr-0.5">Z</span>${coord.z}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
                    }).join('') : '<p class="text-center text-gray-400 text-sm py-6">暂无坐标数据</p>'}
                </div>
                
                <!-- 操作按钮区 -->
                <div class="flex flex-wrap justify-between items-center gap-3">
                    <button class="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 hover:border-${serverClass} hover:text-${serverClass} transition-all flex items-center text-sm toggle-coordinates-btn" 
                            data-structure="${structure.id}" data-server="${server}">
                        <span>展开全部</span>
                        <i class="fa fa-chevron-down ml-2 text-xs"></i>
                    </button>
                    <span class="text-xs text-gray-400">
                        <i class="fa fa-clock-o mr-1"></i> ${new Date().toLocaleDateString('zh-CN')}
                    </span>
                </div>
            </div>
        </div>
    `;
}

// 渲染所有结构
function renderAllStructures() {
    try {
        const structures = loadStructures();
        const server1Content = document.getElementById('server1Content');
        const server2Content = document.getElementById('server2Content');

        // 检查容器是否存在
        if (!server1Content || !server2Content) {
            console.error('结构展示容器不存在，请检查HTML中是否有id为server1Content和server2Content的元素');
            return;
        }

        server1Content.innerHTML = '';
        server2Content.innerHTML = '';

        // 如果没有结构数据，显示提示信息
        if (structures.length === 0) {
            const emptyMessage = `
                <div class="text-center py-10 text-gray-500">
                    <i class="fa fa-folder-open-o text-4xl mb-3"></i>
                    <p>暂无结构数据，请添加新结构</p>
                </div>
            `;
            server1Content.innerHTML = emptyMessage;
            server2Content.innerHTML = emptyMessage;
            return;
        }

        // 渲染每个结构卡片
        structures.forEach(structure => {
            server1Content.innerHTML += renderStructureCard(structure, 'server1');
            server2Content.innerHTML += renderStructureCard(structure, 'server2');
        });

        // 恢复展开状态
        Object.keys(expandedStates).forEach(key => {
            const [server, structureId] = key.split('-');
            const container = document.getElementById(`${server}-${structureId}-coordinates`);
            const btn = document.querySelector(`.toggle-coordinates-btn[data-server="${server}"][data-structure="${structureId}"]`);
            if (container && btn) {
                if (expandedStates[key]) {
                    container.setAttribute('data-expanded', 'true');
                    container.classList.remove('max-h-60');
                    btn.innerHTML = '<span>收起</span><i class="fa fa-chevron-up ml-2 text-xs"></i>';
                    expandedStates[`${server}-${structureId}`] = false;
                }
            }
        });

        // 绘制图表和更新3D坐标
        drawAllCharts();
        update3DCoordinates();

        // 重新绑定事件
        bindEvents();
        
    } catch (error) {
        console.error('渲染结构列表时发生错误:', error);
        // 显示错误提示
        const errorMessage = `
            <div class="text-center py-10 text-red-500">
                <i class="fa fa-exclamation-triangle text-4xl mb-3"></i>
                <p>加载结构数据失败，请刷新页面重试</p>
            </div>
        `;
        if (server1Content) server1Content.innerHTML = errorMessage;
        if (server2Content) server2Content.innerHTML = errorMessage;
    }
}

// 绘制所有坐标分布图
function drawAllCharts() {
    const structures = loadStructures();
    
    // 清除现有图表
    if (window.allCharts) {
        window.allCharts.forEach(chart => chart.destroy());
    }
    window.allCharts = [];
    
    structures.forEach(structure => {
        ['server1', 'server2'].forEach(server => {
            const coordinates = structure.coordinates[server] || [];
            if (coordinates.length === 0) return;
            
            const ctx = document.getElementById(`${server}-${structure.id}-chart`);
            if (!ctx) return;
            
            // 计算所有坐标点的X和Z值的最大绝对值
            const allX = coordinates.map(coord => coord.x);
            const allZ = coordinates.map(coord => coord.z);
            const maxAbsX = Math.max(...allX.map(x => Math.abs(x)));
            const maxAbsZ = Math.max(...allZ.map(z => Math.abs(z)));
            
            // 确定一个合适的范围，确保X轴和Y轴范围相同，原点在中心
            const maxRange = Math.max(maxAbsX, maxAbsZ);
            // 添加10%的边距
            const rangeWithMargin = maxRange > 0 ? maxRange * 1.1 : 100; // 处理没有坐标的情况
            
            // 准备图表数据
            const data = coordinates.map(coord => ({
                x: coord.x,
                y: coord.z,
                id: coord.id,
                description: coord.description
            }));
            
            // 路径连线数据（按顺序连接各点）
            var lineData = data.map(function(d) { return { x: d.x, y: d.y }; });
            // 添加(0,0)起点
            lineData.unshift({ x: 0, y: 0 });
            
            // 创建小图表
            const chart = new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: `${server === 'server1' ? '一区' : '二区'}坐标点`,
                        data: data,
                        backgroundColor: server === 'server1' ? '#3B82F6' : '#10B981',
                        borderColor: server === 'server1' ? '#3B82F6' : '#10B981',
                        borderWidth: 1,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }, {
                        label: '最优路径',
                        data: lineData,
                        type: 'line',
                        borderColor: server === 'server1' ? 'rgba(59,130,246,0.35)' : 'rgba(16,185,129,0.35)',
                        borderWidth: 1.5,
                        borderDash: [4, 4],
                        pointRadius: 0,
                        fill: false,
                        tension: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    aspectRatio: 1,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const point = context.raw;
                                    return [
                                        `位置: (${point.x}, ${point.y})`,
                                        `描述: ${point.description}`
                                    ];
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: false
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            },
                            // 设置X轴范围，原点在中心
                            min: -rangeWithMargin,
                            max: rangeWithMargin,
                            ticks: {
                                // 添加回调函数确保只显示整数
                                callback: function(value) {
                                    return Math.round(value);
                                },
                                stepSize: Math.ceil(rangeWithMargin / 5)
                            }
                        },
                        y: {
                            title: {
                                display: false
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            },
                            // 设置Y轴范围，原点在中心
                            min: -rangeWithMargin,
                            max: rangeWithMargin,
                            ticks: {
                                // 添加回调函数确保只显示整数
                                callback: function(value) {
                                    return Math.round(value);
                                },
                                stepSize: Math.ceil(rangeWithMargin / 5)
                            },
                            // 反转Y轴（Z坐标）方向
                            reverse: true
                        }
                    },
                    animation: {
                        duration: 300
                    }
                }
            });
            
            // 保存图表引用
            window.allCharts.push(chart);
        });
    });
}

// 显示放大的坐标分布图
function showLargeChart(server, structureId) {
    const structures = loadStructures();
    const structure = structures.find(s => s.id === structureId);
    if (!structure) return;

    const coordinates = structure.coordinates[server] || [];
    if (coordinates.length === 0) return;

    // 更新模态框标题
    document.getElementById('modalChartTitle').textContent = 
        `${structure.name} (${server === 'server1' ? '一区' : '二区'}) 坐标分布`;

    // 清除现有模态框图表
    if (window.modalChartInstance) {
        window.modalChartInstance.destroy();
    }

    // 计算所有坐标点的X和Z值的最大绝对值
    const allX = coordinates.map(coord => coord.x);
    const allZ = coordinates.map(coord => coord.z);
    const maxAbsX = Math.max(...allX.map(x => Math.abs(x)));
    const maxAbsZ = Math.max(...allZ.map(z => Math.abs(z)));
    
    // 确定一个合适的范围，确保X轴和Y轴范围相同，原点在中心
    const maxRange = Math.max(maxAbsX, maxAbsZ);
    // 添加10%的边距
    const rangeWithMargin = maxRange * 1.1;

    // 准备图表数据
    const data = coordinates.map(coord => ({
        x: coord.x,
        y: coord.z,
        id: coord.id,
        description: coord.description
    }));

    // 路径连线数据
    var lineData = data.map(function(d) { return { x: d.x, y: d.y }; });
    lineData.unshift({ x: 0, y: 0 });

    // 创建放大的图表
    const ctx = document.getElementById('modalChart').getContext('2d');
    window.modalChartInstance = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: `${server === 'server1' ? '一区' : '二区'}坐标点`,
                data: data,
                backgroundColor: server === 'server1' ? '#3B82F6' : '#10B981',
                borderColor: server === 'server1' ? '#3B82F6' : '#10B981',
                borderWidth: 1,
                pointRadius: 6,
                pointHoverRadius: 9,
                pointHoverBackgroundColor: '#ffffff',
                pointHoverBorderWidth: 2
            }, {
                label: '最优路径',
                data: lineData,
                type: 'line',
                borderColor: server === 'server1' ? 'rgba(59,130,246,0.4)' : 'rgba(16,185,129,0.4)',
                borderWidth: 2,
                borderDash: [6, 4],
                pointRadius: 0,
                pointHitRadius: 0,
                fill: false,
                tension: 0
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'X 坐标',
                        font: {
                            size: 14
                        }
                    },
                    // 设置X轴范围，原点在中心
                    min: -rangeWithMargin,
                    max: rangeWithMargin,
                    ticks: {
                        font: {
                            size: 12
                        },
                        stepSize: Math.ceil(rangeWithMargin / 5)
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                        zeroLineColor: 'rgba(0, 0, 0, 0.2)',
                        zeroLineWidth: 1.5
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Z 坐标',
                        font: {
                            size: 14
                        }
                    },
                    // 设置Y轴范围，原点在中心
                    min: -rangeWithMargin,
                    max: rangeWithMargin,
                    ticks: {
                        font: {
                            size: 12
                        },
                        stepSize: Math.ceil(rangeWithMargin / 5)
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                        zeroLineColor: 'rgba(0, 0, 0, 0.2)',
                        zeroLineWidth: 1.5
                    },
                    // 反转Y轴（Z坐标）方向
                    reverse: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        title: function(contexts) {
                            var ctx = contexts[0];
                            if (!ctx.raw || ctx.raw.id === undefined) return '';
                            var desc = ctx.raw.description || '';
                            return '#' + ctx.raw.id + (desc ? ' ' + desc : '');
                        },
                        label: function(context) {
                            if (!context.raw || context.raw.id === undefined) return '';
                            return [
                                'X: ' + context.raw.x,
                                'Z: ' + context.raw.y,
                            ];
                        }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'xy',
                intersect: true
            },
            animation: {
                duration: 500,
                easing: 'easeOutQuart'
            },
            maintainAspectRatio: true,
            aspectRatio: 1 // 保持XY轴1:1比例
        }
    });

    // 显示模态框
    document.getElementById('chartModal').classList.remove('hidden');
    document.getElementById('chartModal').classList.add('flex');
    document.body.style.overflow = 'hidden'; // 防止背景滚动
}

// 隐藏放大的坐标分布图
function hideLargeChart() {
    waitForElement('#chartModal', (modal) => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    });
}


// 切换服务器内容
function switchServer(server) {
    waitForElement('#server1Content', (server1Content) => {
        waitForElement('#server2Content', (server2Content) => {
            if (server === 'server1') {
                server1Content.classList.remove('hidden');
                server2Content.classList.add('hidden');
            } else {
                server1Content.classList.add('hidden');
                server2Content.classList.remove('hidden');
            }

            waitForElement('#serverSelector', (serverSelector) => {
                serverSelector.value = server;
            });
        });
    });
}

// 切换坐标列表展开/收起状态
function toggleCoordinates(server, structureId) {
    const container = document.getElementById(`${server}-${structureId}-coordinates`);
    const btn = document.querySelector(`.toggle-coordinates-btn[data-server="${server}"][data-structure="${structureId}"]`);
    
    if (!container || !btn) return;
    
    const isExpanded = container.getAttribute('data-expanded') === 'true';
    
    if (isExpanded) {
        container.setAttribute('data-expanded', 'false');
        container.classList.add('max-h-60');
        btn.innerHTML = '<span>展开全部</span><i class="fa fa-chevron-down ml-2 text-xs"></i>';
        expandedStates[`${server}-${structureId}`] = false;
    } else {
        container.setAttribute('data-expanded', 'true');
        container.classList.remove('max-h-60');
        btn.innerHTML = '<span>收起</span><i class="fa fa-chevron-up ml-2 text-xs"></i>';
        expandedStates[`${server}-${structureId}`] = true;
    }
}

// 显示添加坐标表单
function showAddForm(server, structureId) {
    const form = document.getElementById(`${server}-${structureId}-add-form`);
    if (!form) return;
    
    // 隐藏其他表单
    document.querySelectorAll('[id$="-add-form"]').forEach(el => {
        if (el.id !== `${server}-${structureId}-add-form`) {
            el.classList.add('hidden');
        }
    });
    
    // 显示当前表单
    form.classList.remove('hidden');
    
    // 聚焦第一个输入框
    form.querySelector('input').focus();
}

// 隐藏添加坐标表单
function hideAddForm(server, structureId) {
    const form = document.getElementById(`${server}-${structureId}-add-form`);
    if (form) {
        form.classList.add('hidden');
    }
}

// 3D坐标可视化相关变量和函数
let scene, camera, renderer, controls;
let points = [];
let labels = [];
let axesHelper;
let showAxes = true;
let showLabels = true;
let pointIdCounter = 1;

// 初始化3D场景
function init3DScene() {
    // 创建场景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1f5f9);

    // 创建相机
    const container = document.getElementById('canvas-container');
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 50000);
    camera.position.z = 20000;
    camera.position.y = 10000;
    camera.lookAt(0, 0, 0);

    // 创建渲染器
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // 创建控制器
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    // 创建坐标轴辅助线
    axesHelper = new THREE.AxesHelper(10000);
    scene.add(axesHelper);

    // 处理窗口大小变化
    window.addEventListener('resize', onWindowResize);

    // 启动动画循环
    animate3D();
}

// 全局变量存储当前筛选条件
let currentFilter = 'all';

// 3D 视图筛选变量
let current3DFilter = 'all';
let current3DServerFilter = 'all';

// 初始化结构筛选器
function initStructureFilter() {
    const filterSelect = document.getElementById('structure-filter');
    if (!filterSelect) return;
    
    // 获取所有结构并添加到筛选器
    const structures = loadStructures();
    const structureNames = [...new Set(structures.map(s => s.name))]; // 去重
    
    // 清空现有选项（保留"所有结构"）
    while (filterSelect.options.length > 1) {
        filterSelect.remove(1);
    }
    
    // 添加结构选项
    structureNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        filterSelect.appendChild(option);
    });
    
    // 设置当前筛选条件
    filterSelect.value = currentFilter;
    
    // 添加筛选事件监听
    filterSelect.addEventListener('change', function() {
        currentFilter = this.value;
        update3DCoordinates(); // 筛选变化时重新渲染3D坐标
    });
}

// 初始化3D视图专属筛选器
function init3DFilters() {
    var structureFilter3D = document.getElementById('structure-filter-3d');
    var serverFilter3D = document.getElementById('server-filter-3d');
    
    if (!structureFilter3D || !serverFilter3D) return;
    
    var structures = loadStructures();
    var structureNames = [];
    var seen = {};
    structures.forEach(function(s) {
        if (!seen[s.name]) { seen[s.name] = true; structureNames.push(s.name); }
    });
    
    while (structureFilter3D.options.length > 1) {
        structureFilter3D.remove(1);
    }
    structureNames.sort();
    structureNames.forEach(function(name) {
        var option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        structureFilter3D.appendChild(option);
    });
    
    structureFilter3D.addEventListener('change', function() {
        current3DFilter = this.value;
        update3DCoordinates();
    });
    
    serverFilter3D.addEventListener('change', function() {
        current3DServerFilter = this.value;
        update3DCoordinates();
    });
}

// 修改update3DCoordinates函数以支持筛选
function update3DCoordinates() {
    // 清除现有点和标签
    points.forEach(point => scene.remove(point));
    points = [];
    
    labels.forEach(label => {
        if (label.element && label.element.parentNode) {
            label.element.parentNode.removeChild(label.element);
        }
    });
    labels = [];

    // 获取3D画布容器
    const canvasContainer = document.getElementById('canvas-container');
    if (canvasContainer) {
        canvasContainer.style.position = 'relative';
        canvasContainer.style.overflow = 'hidden';
    } else {
        console.error('canvas-container元素未找到，无法正确定位标签');
        return;
    }
    
    // 获取所有坐标点并应用筛选
    const structures = loadStructures();
    const allPoints = [];
    
    structures.forEach(structure => {
        // 应用筛选条件：卡片筛选 或 3D专属筛选（3D优先）
        var structureFilter = current3DFilter !== 'all' ? current3DFilter : currentFilter;
        if (structureFilter !== 'all' && structure.name !== structureFilter) {
            return;
        }
        
        if (current3DServerFilter === 'all' || current3DServerFilter === 'server1') {
            (structure.coordinates.server1 || []).forEach(coord => {
                allPoints.push({
                    ...coord,
                    structureName: structure.name,
                    server: 'server1',
                    serverName: '一区'
                });
            });
        }
        
        if (current3DServerFilter === 'all' || current3DServerFilter === 'server2') {
            (structure.coordinates.server2 || []).forEach(coord => {
                allPoints.push({
                    ...coord,
                    structureName: structure.name,
                    server: 'server2',
                    serverName: '二区'
                });
            });
        }
    });

    // 更新筛选计数显示
    var countEl = document.getElementById('filter-count-3d');
    if (countEl) {
        countEl.textContent = '共 ' + allPoints.length + ' 个坐标点';
    }

    // 创建点列表UI
    const pointsListEl = document.getElementById('points-list');
    pointsListEl.innerHTML = '';
    
    // 如果没有匹配的点，显示提示信息
    if (allPoints.length === 0) {
        pointsListEl.innerHTML = `
            <div class="text-center py-8 text-gray-400">
                <i class="fa fa-search fa-2x mb-3 opacity-40"></i>
                <p class="text-sm">没有找到匹配的坐标点</p>
                <button id="reset-filter" class="mt-3 px-4 py-1.5 text-xs text-primary bg-primary/5 rounded-full hover:bg-primary/10 transition-colors">
                    重置筛选条件
                </button>
            </div>
        `;
        
        // 添加重置筛选条件的事件
        document.getElementById('reset-filter').addEventListener('click', function() {
            currentFilter = 'all';
            current3DFilter = 'all';
            current3DServerFilter = 'all';
            var f1 = document.getElementById('structure-filter');
            var f2 = document.getElementById('structure-filter-3d');
            var f3 = document.getElementById('server-filter-3d');
            if (f1) f1.value = 'all';
            if (f2) f2.value = 'all';
            if (f3) f3.value = 'all';
            update3DCoordinates();
        });
        
        // 强制更新一次标签位置
        updateLabels();
        return;
    }
    
    // 创建3D点和列表项
    allPoints.forEach((point, index) => {
        // 使用索引+1作为ID
        const pointId = index + 1;
        
        // 创建3D点
        const geometry = new THREE.SphereGeometry(300, 16, 16);
        const material = new THREE.MeshBasicMaterial({ 
            color: point.server === 'server1' ? 0x3B82F6 : 0x10B981,
            transparent: true,
            opacity: 0.8
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(point.x, point.y, point.z);
        mesh.userData = {
            id: pointId,
            structureName: point.structureName,
            serverName: point.serverName,
            description: point.description,
            x: point.x,
            y: point.y,
            z: point.z
        };
        
        scene.add(mesh);
        points.push(mesh);

        // 创建标签 - 只显示服务器和结构名
        const div = document.createElement('div');
        // 基础样式中设置默认z-index为10
        div.className = 'absolute bg-dark/90 text-white text-xs px-2 py-1 rounded-md transition-all duration-200 z-10 whitespace-nowrap cursor-pointer';
        div.textContent = `${point.serverName}: ${point.structureName}`;
        div.style.opacity = showLabels ? '1' : '0';
        
        // 鼠标悬停效果 - 提高z-index到20，确保显示在其他标签上方
        div.addEventListener('mouseenter', function() {
            this.innerHTML = `
                <div class="font-bold">${point.structureName}</div>
                <div>${point.serverName}</div>
                <div class="grid grid-cols-3 gap-1 text-[10px] mt-1">
                    <div class="flex items-center"><span class="text-red-400 mr-1">X:</span> ${point.x}</div>
                    <div class="flex items-center"><span class="text-green-400 mr-1">Y:</span> ${point.y}</div>
                    <div class="flex items-center"><span class="text-blue-400 mr-1">Z:</span> ${point.z}</div>
                </div>
            `;
            this.classList.add('p-2', 'bg-dark', 'z-20'); // 添加更高的z-index
            this.classList.remove('px-2', 'py-1', 'z-10'); // 移除默认z-index
        });
        
        div.addEventListener('mouseleave', function() {
            this.textContent = `${point.serverName}: ${point.structureName}`;
            this.classList.remove('p-2', 'bg-dark', 'z-20'); // 移除高z-index
            this.classList.add('px-2', 'py-1', 'z-10'); // 恢复默认z-index
        });
        
        canvasContainer.appendChild(div);
        labels.push({
            element: div,
            mesh: mesh
        });

        // 创建列表项
        const pointEl = document.createElement('div');
        pointEl.className = `p-3 border border-gray-100 rounded-xl hover:border-${point.server} hover:bg-gray-50 transition-all cursor-pointer`;
        pointEl.innerHTML = `
            <div class="font-medium text-sm flex justify-between items-center">
                <span class="truncate mr-2">${point.structureName}</span>
                <span class="text-xs px-2 py-0.5 bg-${point.server}/10 text-${point.server} rounded-full font-bold whitespace-nowrap">#${pointId}</span>
            </div>
            <div class="text-xs text-gray-400 mt-1 truncate">${point.description || point.serverName}</div>
            <div class="grid grid-cols-3 gap-1 mt-1.5 text-xs text-gray-500">
                <span class="flex items-center"><span class="text-red-400 font-semibold mr-0.5">X</span>${point.x}</span>
                <span class="flex items-center"><span class="text-green-400 font-semibold mr-0.5">Y</span>${point.y}</span>
                <span class="flex items-center"><span class="text-blue-400 font-semibold mr-0.5">Z</span>${point.z}</span>
            </div>
        `;
        pointsListEl.appendChild(pointEl);
    });
    
    // 强制更新一次标签位置
    updateLabels();
}

// 更新标签位置 - 精确计算坐标
function updateLabels() {
    const container = document.getElementById('canvas-container');
    if (!container) return;
    
    // 获取容器的位置和尺寸信息
    const rect = container.getBoundingClientRect();
    const containerLeft = rect.left;
    const containerTop = rect.top;
    const containerWidth = rect.width;
    const containerHeight = rect.height;
    
    labels.forEach(label => {
        const element = label.element;
        const mesh = label.mesh;
        
        // 计算3D点在屏幕上的位置
        const position = new THREE.Vector3();
        position.setFromMatrixPosition(mesh.matrixWorld);
        position.project(camera);
        
        // 转换为容器内的相对坐标
        // 计算基于容器的X坐标
        const x = (position.x * 0.5 + 0.5) * containerWidth;
        // 计算基于容器的Y坐标
        const y = (-position.y * 0.5 + 0.5) * containerHeight;
        
        // 应用定位，使用transform进行精确控制
        element.style.left = '0';
        element.style.top = '0';
        element.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 100%))`;
        
        // 限制标签在容器可视范围内
        if (x < 0) {
            element.style.transform = `translate(0, calc(${y}px - 100%))`;
        } else if (x > containerWidth) {
            element.style.transform = `translate(${containerWidth}px, calc(${y}px - 100%))`;
        }
        
        if (y < 0) {
            element.style.transform = `translate(calc(${x}px - 50%), 0)`;
        } else if (y > containerHeight) {
            element.style.transform = `translate(calc(${x}px - 50%), ${containerHeight}px)`;
        }
    });
}

// 同时更新窗口大小变化处理函数
function onWindowResize() {
    const container = document.getElementById('canvas-container');
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
    renderer.setSize(rect.width, rect.height);
    
    // 窗口大小变化时重新计算标签位置
    updateLabels();
}

// 3D动画循环
function animate3D() {
    requestAnimationFrame(animate3D);
    controls.update();
    updateLabels();
    renderer.render(scene, camera);
}
