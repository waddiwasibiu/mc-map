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
    : 'images/structures/default-structure.png';
    
    return `
        <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover border border-gray-100 mb-6" 
            data-structure="${structure.id}" data-server="${server}">
            <!-- 结构图片展示区 -->
            <div class="relative">
                <div class="structure-image w-full h-48 bg-cover bg-center transition-transform duration-500 hover:scale-105" 
                    style="background-image: url('${imageUrl}')">
                    <!-- 图片加载失败处理 -->
                    <img src="${imageUrl}" class="hidden" onError="this.parentElement.style.backgroundImage='url(images/structures/default-structure.png)'">
                </div>
                <div class="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                    <i class="fa fa-map-marker mr-1 text-${serverClass}"></i> 
                    ${totalCoordinates}个坐标
                </div>
            </div>
            
            <!-- 结构信息区 -->
            <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="text-xl font-bold text-dark">${structure.name}</h3>
                        <span class="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm mt-2">${structure.type}</span>
                    </div>
                    <div class="text-${serverClass} text-2xl">
                        <i class="fa ${structure.icon || 'fa-question-circle'}"></i>
                    </div>
                </div>
                
                <div class="mb-6 text-gray-600">
                    <p>${structure.description || '暂无描述信息'}</p>
                </div>
                
                <!-- 坐标分布图 -->
                <div class="mt-6 mb-6 cursor-pointer chart-container border border-gray-200 rounded-lg p-1" 
                    data-structure="${structure.id}" data-server="${server}">
                    <h4 class="font-medium text-gray-700 mb-3">坐标分布 (X-Z 平面)</h4>
                    <div class="relative h-48 w-full bg-white rounded-lg overflow-hidden shadow-sm">
                        ${coordinates.length > 0 ? `
                            <canvas id="${server}-${structure.id}-chart" class="w-full h-full"></canvas>
                        ` : `
                            <div class="absolute inset-0 flex items-center justify-center text-gray-500">
                                <p>暂无坐标数据</p>
                            </div>
                        `}
                    </div>
                </div>
                
                <!-- 坐标列表 -->
                <div id="${server}-${structure.id}-coordinates" 
                    class="space-y-3 mb-6 max-h-60 overflow-y-auto border border-gray-100 rounded-lg" 
                    data-expanded="false">
                    ${coordinates.length > 0 ? coordinates.map(coord => `
                        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-${serverClass}/50 transition-colors">
                            <div class="flex justify-between items-start mb-2">
                                <div class="font-medium">
                                    #${coord.id} ${coord.description || '无描述'}
                                </div>
                            </div>
                            <div class="flex flex-wrap gap-2 text-sm">
                                <div class="bg-gray-100 px-3 py-1 rounded flex items-center">
                                    <i class="fa fa-arrow-right text-gray-500 mr-2"></i>
                                    <span class="font-mono">X: ${coord.x}</span>
                                </div>
                                <div class="bg-gray-100 px-3 py-1 rounded flex items-center">
                                    <i class="fa fa-arrow-up text-gray-500 mr-2"></i>
                                    <span class="font-mono">Y: ${coord.y}</span>
                                </div>
                                <div class="bg-gray-100 px-3 py-1 rounded flex items-center">
                                    <i class="fa fa-arrow-left text-gray-500 mr-2"></i>
                                    <span class="font-mono">Z: ${coord.z}</span>
                                </div>
                            </div>
                        </div>
                    `).join('') : '<p class="text-center text-gray-500 py-4">暂无坐标数据</p>'}
                </div>
                
                <!-- 操作按钮区 -->
                <div class="flex flex-wrap justify-between items-center gap-3">
                    <button class="px-4 py-2 border border-${serverClass} text-${serverClass} rounded-md hover:bg-${serverClass}/10 transition-colors flex items-center toggle-coordinates-btn" 
                            data-structure="${structure.id}" data-server="${server}">
                        <span>展开全部</span>
                        <i class="fa fa-chevron-down ml-2"></i>
                    </button>
                </div>
            </div>
            
            <!-- 底部信息栏 -->
            <div class="bg-gray-50 p-4 flex justify-between items-center border-t border-gray-100">
                <span class="text-xs text-gray-500">
                    <i class="fa fa-clock-o mr-1"></i> ${new Date().toLocaleDateString('zh-CN')}
                </span>
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
                    btn.innerHTML = '<span>收起</span><i class="fa fa-chevron-up ml-2"></i>';
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
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
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
                        label: function(context) {
                            const point = context.raw;
                            const coord = coordinates.find(c => c.id === point.id);
                            return [
                                `ID: ${point.id}`,
                                `X: ${coord.x}`,
                                `Y: ${coord.y}`,
                                `Z: ${coord.z}`,
                                `描述: ${point.description}`
                            ];
                        }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'xy',
                intersect: false
            },
            animation: {
                duration: 500,
                easing: 'easeOutQuart'
            },
            maintainAspectRatio: true // 保持宽高比以确保比例尺一致
        }
    });

    // 显示模态框
    document.getElementById('chartModal').classList.remove('hidden');
    document.getElementById('chartModal').classList.add('flex');
    document.body.style.overflow = 'hidden'; // 防止背景滚动
}

// 隐藏放大的坐标分布图
function hideLargeChart() {
    document.getElementById('chartModal').classList.add('hidden');
    document.getElementById('chartModal').classList.remove('flex');
    document.body.style.overflow = ''; // 恢复背景滚动
}

// 添加坐标
function addCoordinate(server, structureId) {
    const form = document.getElementById(`${server}-${structureId}-add-form`);
    if (!form) return;
    
    const inputs = form.querySelectorAll('input');
    const xInput = inputs[0];
    const yInput = inputs[1];
    const zInput = inputs[2];
    const descInput = inputs[3];
    
    // 验证输入
    if (!xInput.value || !yInput.value || !zInput.value) {
        showNotification('请填写完整的坐标信息', 'error');
        return;
    }
    
    const structures = loadStructures();
    const structure = structures.find(s => s.id === structureId);
    
    if (!structure) {
        showNotification('结构不存在', 'error');
        return;
    }
    
    // 创建新坐标对象
    const newId = structure.coordinates[server].length > 0 ? Math.max(...structure.coordinates[server].map(coord => coord.id)) + 1 : 1;
    const newCoordinate = {
        id: newId,
        x: parseInt(xInput.value),
        y: parseInt(yInput.value),
        z: parseInt(zInput.value),
        description: descInput.value || '无描述'
    };
    
    // 添加到坐标列表
    structure.coordinates[server].push(newCoordinate);
    
    // 保存结构数据
    saveStructures(structures);
    
    // 重新渲染结构
    renderAllStructures();
    
    // 隐藏表单
    hideAddForm(server, structureId);
    
    // 显示成功消息
    showNotification('坐标已添加！', 'success');
}

// 删除坐标
function deleteCoordinate(server, structureId, coordId) {
    const structures = loadStructures();
    const structure = structures.find(s => s.id === structureId);
    
    if (!structure) {
        showNotification('结构不存在', 'error');
        return;
    }
    
    // 过滤掉要删除的坐标
    structure.coordinates[server] = structure.coordinates[server].filter(coord => coord.id !== coordId);
    
    // 保存结构数据
    saveStructures(structures);
    
    // 重新渲染结构
    renderAllStructures();
    
    // 显示成功消息
    showNotification('坐标已删除！', 'success');
}

// 切换服务器内容
function switchServer(server) {
    const server1Content = document.getElementById('server1Content');
    const server2Content = document.getElementById('server2Content');

    if (server === 'server1') {
        server1Content.classList.remove('hidden');
        server2Content.classList.add('hidden');
    } else {
        server1Content.classList.add('hidden');
        server2Content.classList.remove('hidden');
    }
    
    // 更新服务器选择器状态
    const serverSelector = document.getElementById('serverSelector');
    serverSelector.value = server;
}

// 切换坐标列表展开/收起状态
function toggleCoordinates(server, structureId) {
    const container = document.getElementById(`${server}-${structureId}-coordinates`);
    const btn = document.querySelector(`.toggle-coordinates-btn[data-server="${server}"][data-structure="${structureId}"]`);
    
    if (!container || !btn) return;
    
    const isExpanded = container.getAttribute('data-expanded') === 'true';
    
    if (isExpanded) {
        container.setAttribute('data-expanded', 'false');
        container.classList.add('max-h-60', 'overflow-y-hidden');
        btn.innerHTML = '<span>展开全部</span><i class="fa fa-chevron-down ml-2"></i>';
        expandedStates[`${server}-${structureId}`] = false;
    } else {
        container.setAttribute('data-expanded', 'true');
        container.classList.remove('max-h-60', 'overflow-y-hidden');
        btn.innerHTML = '<span>收起</span><i class="fa fa-chevron-up ml-2"></i>';
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
    scene.background = new THREE.Color(0xf8fafc);

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
        // 应用筛选条件：如果不是"所有结构"，只添加匹配的结构
        if (currentFilter !== 'all' && structure.name !== currentFilter) {
            return;
        }
        
        (structure.coordinates.server1 || []).forEach(coord => {
            allPoints.push({
                ...coord,
                structureName: structure.name,
                server: 'server1',
                serverName: '一区'
            });
        });
        
        (structure.coordinates.server2 || []).forEach(coord => {
            allPoints.push({
                ...coord,
                structureName: structure.name,
                server: 'server2',
                serverName: '二区'
            });
        });
    });

    // 创建点列表UI
    const pointsListEl = document.getElementById('points-list');
    pointsListEl.innerHTML = '';
    
    // 如果没有匹配的点，显示提示信息
    if (allPoints.length === 0) {
        pointsListEl.innerHTML = `
            <div class="text-center py-6 text-gray-500">
                <i class="fa fa-search fa-2x mb-2"></i>
                <p>没有找到匹配的坐标点</p>
                <button id="reset-filter" class="mt-2 text-sm text-primary hover:underline">
                    重置筛选条件
                </button>
            </div>
        `;
        
        // 添加重置筛选条件的事件
        document.getElementById('reset-filter').addEventListener('click', function() {
            currentFilter = 'all';
            document.getElementById('structure-filter').value = 'all';
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
        pointEl.className = `p-3 border border-slate-200 rounded-lg hover:border-${point.server} transition-colors`;
        pointEl.innerHTML = `
            <div class="font-medium flex justify-between items-center">
                <span>${point.structureName} (${point.serverName})</span>
                <span class="text-xs px-2 py-1 bg-${point.server}/10 text-${point.server} rounded-full">ID: ${pointId}</span>
            </div>
            <div class="text-xs text-gray-500 mt-1">${point.description || '无描述'}</div>
            <div class="grid grid-cols-3 gap-1 mt-2 text-sm text-slate-600">
                <div class="flex items-center"><span class="text-red-500 mr-1">X:</span> ${point.x}</div>
                <div class="flex items-center"><span class="text-green-500 mr-1">Y:</span> ${point.y}</div>
                <div class="flex items-center"><span class="text-blue-500 mr-1">Z:</span> ${point.z}</div>
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
