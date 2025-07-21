// 存储展开状态
const expandedStates = {};

const defaultStructures = [
{
    id: 1,
    name: "孤独堡垒",
    type: "遗迹",
    description: "试炼刷怪笼与那跃动的灵魂火，也许就是这堡垒里最后的活动之物了。如果感兴趣，你可以在那主塔楼的顶端见到巨大的旋风人。",
    image: 2,
    icon: "fa-fort-awesome",
    coordinates: {
        server1: [
            { id: 1, x: -1067, y: 128, z: 1099, description: "近" },
            { id: 2, x: -543, y: 128, z: 3401, description: "近" },
            { id: 3, x: 57, y: 128, z: 3629, description: "近" },
            { id: 4, x: 2867, y: 128, z: 6279, description: "远" },
            { id: 5, x: 719, y: 128, z: 6734, description: "远" },
            { id: 6, x: -5163, y: 128, z: 5224, description: "远 "},
            { id: 7, x: -1652, y: 128, z: -727, description: "近" },
            { id: 8, x: -3721, y: 128, z: -959, description: "近" },
            { id: 9, x: -6939, y: 128, z: -5902, description: "远" },
            { id: 10, x: 429, y: 128, z: -1713, description: "近" },
            { id: 11, x: 3619, y: 128, z: -2394, description: "近" },
        ],
        server2: [
            { id: 1, x: -1378, y: 128, z: 1731, description: "近" },
            { id: 2, x: -2765, y: 128, z: 2639, description: "近" },
            { id: 3, x: -2956, y: 128, z: 2607, description: "近" },
            { id: 4, x: -3655, y: 128, z: 3243, description: "近" },
            { id: 5, x: -885, y: 128, z: 7161, description: "远" },
            { id: 6, x: -4967, y: 128, z: 9043, description: "远" },
            { id: 7, x: -5922, y: 128, z: 7831, description: "远" },
            { id: 8, x: -9674, y: 128, z: 2237, description: "远" },
            { id: 9, x: -5774, y: 128, z: -258, description: "远" },
            { id: 10, x: -6797, y: 128, z: -4304, description: "远" },
            { id: 11, x: 2263, y: 128, z: 1206, description: "近" },
            { id: 12, x: 2051, y: 128, z: 2520, description: "近" },
            { id: 13, x: 2904, y: 128, z: 4057, description: "近" },
            { id: 14, x: 5922, y: 128, z: 3955, description: "近" },
            { id: 15, x: 6641, y: 128, z: 821, description: "远" },
            { id: 16, x: 7569, y: 128, z: -395, description: "远" },
            { id: 17, x: 6211, y: 128, z: -1847, description: "远" },
            { id: 18, x: 7877, y: 128, z: -2927, description: "远" },
            { id: 19, x: 9268, y: 128, z: -7196, description: "远" },
            { id: 20, x: 6423, y: 128, z: -4465, description: "远" },
            { id: 21, x: 2905, y: 128, z: -5595, description: "近" },
            { id: 22, x: 1623, y: 128, z: -4975, description: "近" },
            { id: 23, x: 77, y: 128, z: -3950, description: "近" },
            { id: 24, x: 215, y: 128, z: -9506, description: "远" },

        ]
    }
},
{
    id: 2,
    name: "丛林神殿",
    type: "遗迹",
    description: "隐藏在茂密丛林中的古老神殿，周围缠绕着藤蔓和树木。神殿内部布满陷阱，特别是在宝箱周围，需要小心触发。",
    image: 3,
    icon: "fa-tree",
    coordinates: {
        server1: [
            { id: 1, x: -37, y: 128, z: 535, description: "近" },
            { id: 2, x: -1033, y: 128, z: -295, description: "近" },
            { id: 3, x: -4033, y: 128, z: -3240, description: "远" },
            { id: 4, x: -5642, y: 128, z: -4848, description: "远" },
            { id: 5, x: -2750, y: 128, z: -7152, description: "远" },
            { id: 6, x: 323, y: 128, z: -7137, description: "远" },
            { id: 7, x: 3886, y: 128, z: -6200, description: "远" },
            { id: 8, x: 3915, y: 128, z: -6070, description: "远" },
            { id: 9, x: 3802, y: 128, z: -3248, description: "远" },
            { id: 10, x: 7306, y: 128, z: -2752, description: "远" },
            { id: 11, x: 7491, y: 128, z: -2723, description: "远" },
            { id: 12, x: 4653, y: 128, z: 3381, description: "远" },

        ],
        server2: [
            { id: 1, x: -600, y: 65, z: 400, description: "哦" }
        ]
    }
},
{
    id: 3,
    name: "沙漠神殿",
    type: "遗迹",
    description: "隐藏在沙漠中的古老神殿，被沙子覆盖。内部困有许多亡灵，还设有一些陷阱。",
    image: 4,
    icon: "fa-sun-o",
    coordinates: {
        server1: [
            { id: 1, x: 1500, y: 63, z: -700, description: "嗷" }
        ],
        server2: [
            { id: 1, x: 1200, y: 63, z: -400, description: "嗷" }
        ]
    }
},
{
    id: 4,
    name: "旋风云",
    type: "自然奇观",
    description: "天空中旋转的巨大云团，风呼啸，刷怪笼中的旋风人被靠近的玩家唤醒......特殊战利品：无冷却风弹、脆风棒、“风爆弹射”附魔书、“动能缓冲”附魔书",
    image: 5,
    icon: "fa-tornado",
    coordinates: {
        server1: [
            { id: 1, x: -10316, y: 128, z: 381, description: "喵" },
            { id: 2, x: -10407, y: 128, z: 367, description: "喵" },
            { id: 3, x: -10874, y: 128, z: 1089, description: "喵" },
            { id: 4, x: -11476, y: 128, z: 7079, description: "喵" },
            { id: 5, x: -11601, y: 128, z: 10357, description: "小旋风云" },
            { id: 6, x: -7181, y: 128, z: 11312, description: "喵" },
            { id: 7, x: -7194, y: 128, z: 11443, description: "喵" },
            { id: 8, x: -7068, y: 128, z: 11277, description: "喵" },
            { id: 9, x: -6699, y: 128, z: 11434, description: "喵" },
            { id: 10, x: -6800, y: 128, z: 10938, description: "喵" },
            { id: 11, x: -6715, y: 128, z: 10960, description: "喵" },
            { id: 12, x: -6095, y: 128, z: 11566, description: "喵" },
            { id: 13, x: -3329, y: 128, z: 11693, description: "喵" },
            { id: 14, x: -1786, y: 128, z: 11803, description: "喵" },
            { id: 15, x: -1652, y: 128, z: 11903, description: "喵" },
            { id: 16, x: 3268, y: 128, z: 11656, description: "喵" },
            { id: 17, x: 3244, y: 128, z: 11526, description: "喵" },
            { id: 18, x: 7240, y: 128, z: 12360, description: "喵" },
            { id: 19, x: 7337, y: 128, z: 12337, description: "喵" },
            { id: 20, x: 9001, y: 128, z: 12245, description: "喵" },
            { id: 21, x: 10342, y: 128, z: 12119, description: "喵" },
            { id: 22, x: 11559, y: 128, z: 12373, description: "小旋风云" },
            { id: 23, x: 8528, y: 128, z: 8424, description: "喵" },
            { id: 24, x: 12408, y: 128, z: -4413, description: "喵" },
            { id: 25, x: 12504, y: 128, z: -4419, description: "10w边界外" },
            { id: 26, x: 11766, y: 128, z: -6441, description: "喵" },
            { id: 27, x: 10206, y: 128, z: -8973, description: "喵" },
            { id: 28, x: 9250, y: 128, z: -8252, description: "喵" },
            { id: 29, x: 992, y: 128, z: -11270, description: "喵" },
            { id: 30, x: -3362, y: 128, z: -10754, description: "喵" },
            { id: 31, x: -6102, y: 128, z: -10320, description: "喵" },
            { id: 32, x: -6219, y: 128, z: -10322, description: "小旋风云" },
            { id: 33, x: -6314, y: 128, z: -10294, description: "喵" },
        ],
        server2: [
            { id: 1, x: -100, y: 90, z: -800, description: "喵" }
        ]
    }
},
{
    id: 5,
    name: "善魂云",
    type: "自然奇观",
    description: "刷新在雪原、积雪高山、冰刺之地和冰封山峰群系空中的快乐云朵，云上雪屋的地下室里貌似关押着一只永远不会长大的小可爱，去解放它让它自由地追逐天空吧！特殊战利品：颜色各异的挽具、失水恶魂、“悠魂”附魔书、“纯真守护”附魔书”附魔书、“动能缓冲”附魔书",
    image: 6,
    icon: "fa-tornado",
    coordinates: {
        server1: [
            { id: 1, x: -10502, y: 128, z: 784, description: "喵" },
            { id: 2, x: -11208, y: 128, z: 1843, description: "小善魂云 战利品不刷新" },
            { id: 3, x: -11430, y: 128, z: 4195, description: "喵" },
            { id: 4, x: -11392, y: 128, z: 4247, description: "小善魂云 战利品不刷新" },
            { id: 5, x: -11688, y: 128, z: 10169, description: "喵" },
            { id: 6, x: -11137, y: 128, z: 11200, description: "喵" },
            { id: 7, x: -8434, y: 128, z: 11097, description: "喵" },
            { id: 8, x: -7012, y: 128, z: 11464, description: "喵" },
            { id: 9, x: -6982, y: 128, z: 11336, description: "喵" },
            { id: 10, x: -6854, y: 128, z: 11312, description: "喵" },
            { id: 11, x: -6076, y: 128, z: 11611, description: "喵" },
            { id: 12, x: -5972, y: 128, z: 11604, description: "喵" },
            { id: 13, x: 2418, y: 128, z: 12325, description: "喵" },
            { id: 14, x: 10291, y: 128, z: 12242, description: "小善魂云 战利品不刷新" },
            { id: 15, x: 11477, y: 128, z: 12220, description: "喵" },
            { id: 16, x: 10346, y: 128, z: 7527, description: "喵" },
            { id: 17, x: 12371, y: 128, z: 7200, description: "小善魂云 战利品不刷新" },
            { id: 18, x: 12495, y: 128, z: 4433, description: "喵" },
            { id: 19, x: 8324, y: 128, z: 6134, description: "喵" },
            { id: 20, x: 8205, y: 128, z: 6132, description: "喵" },
            { id: 21, x: 11974, y: 128, z: -6370, description: "小善魂云 战利品不刷新" },
            { id: 22, x: 10546, y: 128, z: -8966, description: "小善魂云 战利品不刷新" },
            { id: 23, x: 10011, y: 128, z: -8829, description: "喵" },
            { id: 24, x: 8743, y: 128, z: -8166, description: "小善魂云 战利品不刷新" },
            { id: 25, x: -3606, y: 128, z: -11286, description: "小善魂云 战利品不刷新" },
            { id: 26, x: -3644, y: 128, z: -11146, description: "喵" },
            { id: 27, x: -3336, y: 128, z: -10771, description: "喵" },
            { id: 28, x: -6088, y: 128, z: -10491, description: "小善魂云 战利品不刷新" },
            { id: 29, x: -6082, y: 128, z: -9980, description: "喵" },
            { id: 30, x: -6077, y: 128, z: -10105, description: "小善魂云 战利品不刷新" },
            { id: 31, x: -6367, y: 128, z: -10257, description: "小善魂云 战利品不刷新" },
            ],
        server2: [
            { id: 1, x: -100, y: 90, z: -800, description: "喵" },
        ]
    }
},
{
    id: 6,
    name: "嘎吱村",
    type: "自然奇观",
    description: "新在苍白森林的灾厄营地，炼金房、图书馆、教堂、靶场......特殊战利品：音乐唱片-《Infinite Spooky Amethyst》、嘎吱佳酿、附有快速填装IV的弩",
    image: 7,
    icon: "fa-tornado",
    coordinates: {
        server1: [
            { id: 1, x: -11239, y: 128, z: 447, description: "4靶场1女巫" },
            { id: 2, x: -12184, y: 128, z: 8198, description: "2靶场0女巫" },
            { id: 3, x: 8222, y: 128, z: 12052, description: "3靶场1女巫" },
            { id: 4, x: 11632, y: 128, z: 12342, description: "2靶场1女巫" },
            { id: 5, x: 11625, y: 128, z: -9693, description: "2靶场0女巫" },

        ],
        server2: [
            { id: 1, x: -100, y: 90, z: -800, description: "喵" }
        ]
    }
},

];


// 保存结构数据到本地存储
function saveStructures(structures) {
    localStorage.setItem('mcStructures', JSON.stringify(structures));
}

// 加载结构数据
function loadStructures() {
    const storedStructures = localStorage.getItem('mcStructures');
    return storedStructures ? JSON.parse(storedStructures) : defaultStructures;
}

// 添加新结构
function addStructure(structure) {
    const structures = loadStructures();
    
    // 为新结构生成唯一ID
    const newId = structures.length > 0 ? Math.max(...structures.map(s => s.id)) + 1 : 1;
    
    // 创建新结构对象
    const newStructure = {
        id: newId,
        name: structure.name,
        type: structure.type,
        description: structure.description,
        image: parseInt(structure.image),
        icon: structure.icon,
        coordinates: {
            server1: [],
            server2: []
        }
    };
    
    // 添加到结构列表
    structures.push(newStructure);
    
    // 保存到本地存储
    saveStructures(structures);
    
    return newStructure;
}

// 渲染结构卡片
function renderStructureCard(structure, server) {
    const serverClass = server === 'server1' ? 'server1' : 'server2';
    const coordinates = structure.coordinates[server] || [];
    
    return `
        <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover" data-structure="${structure.id}" data-server="${server}">
            <div class="relative">
                <div class="structure-image w-full h-48" style="background-image: url('${structure.image}.png')"></div>
                <div class="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                    <i class="fa fa-map-marker mr-1 text-${serverClass}"></i> ${coordinates.length}个坐标
                </div>
            </div>
            
            <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="text-xl font-bold text-dark">${structure.name}</h3>
                        <span class="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm mt-2">${structure.type}</span>
                    </div>
                    <div class="text-${serverClass} text-2xl">
                        <i class="fa ${structure.icon}"></i>
                    </div>
                </div>
                
                <div class="mb-6 text-gray-600">
                    <p>${structure.description}</p>
                </div>
                
                <!-- 坐标分布图 -->
                <div class="mt-6 mb-6 cursor-pointer chart-container" data-structure="${structure.id}" data-server="${server}">
                    <h4 class="font-medium text-gray-700 mb-3">坐标分布 (X-Z 平面)</h4>
                    <div class="relative mx-auto h-48 w-[90%] bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
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
                <div id="${server}-${structure.id}-coordinates" class="space-y-3 mb-6 max-h-60 overflow-y-hidden" data-expanded="false">
                    ${coordinates.length > 0 ? coordinates.map(coord => `
                        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <div class="flex justify-between items-start mb-2">
                                <div class="font-medium">
                                    #${coord.id} ${coord.description}
                                </div>
                                <div class="text-xs text-gray-500">
                                    <i class="fa fa-user mr-1"></i> 匿名
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="grid grid-cols-3 gap-2 text-sm">
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
                                <button class="text-red-500 hover:text-red-700 transition-colors delete-coordinate-btn" data-server="${server}" data-structure="${structure.id}" data-id="${coord.id}">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    `).join('') : '<p class="text-center text-gray-500 py-4">暂无坐标数据</p>'}
                </div>
                
                <!-- 添加坐标表单 - 默认隐藏 -->
                <div id="${server}-${structure.id}-add-form" class="hidden bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                    <h4 class="font-medium mb-3">添加新坐标</h4>
                    <div class="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">X 坐标</label>
                            <input type="number" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-${serverClass}/50 focus:border-${serverClass}" placeholder="X">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Y 坐标</label>
                            <input type="number" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-${serverClass}/50 focus:border-${serverClass}" placeholder="Y">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Z 坐标</label>
                            <input type="number" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-${serverClass}/50 focus:border-${serverClass}" placeholder="Z">
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-${serverClass}/50 focus:border-${serverClass}" placeholder="描述 (可选)">
                        <div class="flex gap-2">
                            <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors cancel-add-coordinate-btn">取消</button>
                            <button class="px-4 py-2 bg-${serverClass} text-white rounded-md hover:bg-${serverClass}/90 transition-colors add-coordinate-btn" data-structure="${structure.id}" data-server="${server}">添加坐标</button>
                        </div>
                    </div>
                </div>
                
                <!-- 操作按钮 -->
                <div class="flex justify-between items-center">
                    <button class="px-4 py-2 border border-${serverClass} text-${serverClass} rounded-md hover:bg-${serverClass}/10 transition-colors flex items-center toggle-coordinates-btn" data-structure="${structure.id}" data-server="${server}">
                        <span>展开全部</span>
                        <i class="fa fa-chevron-down ml-2"></i>
                    </button>
                    <button class="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors flex items-center show-add-form-btn" data-structure="${structure.id}" data-server="${server}">
                        <i class="fa fa-plus mr-2"></i> 添加坐标
                    </button>
                </div>
            </div>
            
            <div class="bg-gray-50 p-4 flex justify-between items-center">
                <span class="text-xs text-gray-500">
                    <i class="fa fa-clock-o mr-1"></i> ${new Date().toLocaleDateString('zh-CN')}
                </span>
                <button class="text-red-500 hover:text-red-700 text-sm delete-structure-btn" data-id="${structure.id}">
                    <i class="fa fa-trash mr-1"></i> 删除结构
                </button>
            </div>
        </div>
    `;
}

// 渲染所有结构
function renderAllStructures() {
    const structures = loadStructures();
    const server1Content = document.getElementById('server1Content');
    const server2Content = document.getElementById('server2Content');

    server1Content.innerHTML = '';
    server2Content.innerHTML = '';

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
                container.classList.remove('max-h-60', 'overflow-y-hidden');
                btn.innerHTML = '<span>收起</span><i class="fa fa-chevron-up ml-2"></i>';
            } else {
                container.setAttribute('data-expanded', 'false');
                container.classList.add('max-h-60', 'overflow-y-hidden');
                btn.innerHTML = '<span>展开全部</span><i class="fa fa-chevron-down ml-2"></i>';
            }
        }
    });

    // 绘制所有图表
    drawAllCharts();

    // 重新绑定事件
    bindEvents();
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
            
            // 计算坐标轴范围
            const allX = coordinates.map(coord => coord.x);
            const allZ = coordinates.map(coord => coord.z);
            const minX = Math.min(...allX);
            const maxX = Math.max(...allX);
            const minZ = Math.min(...allZ);
            const maxZ = Math.max(...allZ);
            
            // 添加边距
            const xRange = maxX - minX;
            const zRange = maxZ - minZ;
            const xMargin = xRange * 0.1 || 10;
            const zMargin = zRange * 0.1 || 10;
            
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
                    scales: {
                        x: {
                            title: {
                                display: false
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            },
                            ticks: {
                                display: false
                            }
                        },
                        y: {
                            title: {
                                display: false
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            },
                            ticks: {
                                display: false
                            }
                        }
                    },
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

    // 计算坐标轴范围
    const allX = coordinates.map(coord => coord.x);
    const allZ = coordinates.map(coord => coord.z);
    const minX = Math.min(...allX);
    const maxX = Math.max(...allX);
    const minZ = Math.min(...allZ);
    const maxZ = Math.max(...allZ);

    // 添加边距
    const xRange = maxX - minX;
    const zRange = maxZ - minZ;
    const xMargin = xRange * 0.1 || 10;
    const zMargin = zRange * 0.1 || 10;

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
                    min: minX - xMargin,
                    max: maxX + xMargin,
                    ticks: {
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
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
                    min: minZ - zMargin,
                    max: maxZ + zMargin,
                    ticks: {
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
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
            }
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

// 删除结构
function deleteStructure(structureId) {
    if (!confirm('确定要删除这个结构吗？这将删除所有相关坐标数据！')) {
        return;
    }
    
    const structures = loadStructures();
    const newStructures = structures.filter(s => s.id !== structureId);
    
    // 保存结构数据
    saveStructures(newStructures);
    
    // 重新渲染结构
    renderAllStructures();
    
    // 显示成功消息
    showNotification('结构已删除！', 'success');
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

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.classList.add('fixed', 'top-4', 'right-4', 'bg-white', 'shadow-md', 'p-4', 'rounded-lg', 'z-50');
    notification.classList.add(type === 'success' ? 'border-l-4 border-green-500' : type === 'error' ? 'border-l-4 border-red-500' : 'border-l-4 border-blue-500');
    notification.textContent = message;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 定时消失
    setTimeout(() => {
        notification.classList.add('opacity-0', 'transition-opacity', 'duration-300');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 绑定事件
function bindEvents() {
// 服务器切换
document.getElementById('serverSelector').addEventListener('change', function() {
    switchServer(this.value);
});

// 添加结构表单提交
document.getElementById('addStructureForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('structureName');
    const typeInput = document.getElementById('structureType');
    const descInput = document.getElementById('structureDescription');
    const imageInput = document.getElementById('structureImage');
    const iconInput = document.getElementById('structureIcon');
    
    // 验证输入
    if (!nameInput.value || !typeInput.value || !descInput.value || !imageInput.value || !iconInput.value) {
        showNotification('请填写完整的结构信息', 'error');
        return;
    }
    
    // 创建新结构
    const newStructure = {
        name: nameInput.value,
        type: typeInput.value,
        description: descInput.value,
        image: imageInput.value,
        icon: iconInput.value
    };
    
    // 添加结构
    addStructure(newStructure);
    
    // 重置表单
    this.reset();
    
    // 重新渲染结构
    renderAllStructures();
    
    // 显示成功消息
    showNotification('结构添加成功！', 'success');
});

// 展开/收起坐标列表按钮
document.querySelectorAll('.toggle-coordinates-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const server = this.getAttribute('data-server');
        const structureId = parseInt(this.getAttribute('data-structure'));
        toggleCoordinates(server, structureId);
    });
});

// 显示添加坐标表单按钮
document.querySelectorAll('.show-add-form-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const server = this.getAttribute('data-server');
        const structureId = parseInt(this.getAttribute('data-structure'));
        showAddForm(server, structureId);
    });
});

// 取消添加坐标按钮
document.querySelectorAll('.cancel-add-coordinate-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const form = this.closest('[id$="-add-form"]');
        const [server, structureId] = form.id.split('-');
        hideAddForm(server, structureId);
    });
});

// 添加坐标按钮
document.querySelectorAll('.add-coordinate-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const server = this.getAttribute('data-server');
        const structureId = parseInt(this.getAttribute('data-structure'));
        addCoordinate(server, structureId);
    });
});

// 删除坐标按钮
document.querySelectorAll('.delete-coordinate-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const server = this.getAttribute('data-server');
        const structureId = parseInt(this.getAttribute('data-structure'));
        const coordId = parseInt(this.getAttribute('data-id'));
        deleteCoordinate(server, structureId, coordId);
    });
});

// 删除结构按钮
document.querySelectorAll('.delete-structure-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const structureId = parseInt(this.getAttribute('data-id'));
        deleteStructure(structureId);
    });
});

// 移动端菜单切换
document.getElementById ('mobileMenuBtn').addEventListener ('click', function () {
    const mobileMenu = document.getElementById ('mobileMenu');
    mobileMenu.classList.toggle ('hidden');
});

// 坐标分布图点击事件（放大）
document.querySelectorAll ('.chart-container').forEach (container => {
    container.addEventListener ('click', function () {
    const server = this.getAttribute ('data-server');
    const structureId = parseInt (this.getAttribute ('data-structure'));
    showLargeChart (server, structureId);
    });
});

// 关闭模态框按钮
document.getElementById ('closeChartModal').addEventListener ('click', hideLargeChart);

// 点击模态框背景关闭
document.getElementById ('chartModal').addEventListener ('click', function (e) {
    if (e.target === this) {
    hideLargeChart ();
    }
});

// ESC 键关闭模态框
document.addEventListener ('keydown', function (e) {
    if (e.key === 'Escape' && !document.getElementById ('chartModal').classList.contains ('hidden')) {
    hideLargeChart ();
    }
});

// 搜索功能
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const structures = document.querySelectorAll('.card-hover');
    
    structures.forEach(structure => {
        const name = structure.querySelector('h3').textContent.toLowerCase();
        const type = structure.querySelector('.rounded-full').textContent.toLowerCase();
        const description = structure.querySelector('p').textContent.toLowerCase();
        
        if (name.includes(searchTerm) || type.includes(searchTerm) || description.includes(searchTerm)) {
            structure.classList.remove('hidden');
        } else {
            structure.classList.add('hidden');
        }
    });
});

// 滚动时导航栏样式变化
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('bg-white/95', 'backdrop-blur-sm', 'py-2');
        header.classList.remove('py-4');
    } else {
        header.classList.remove('bg-white/95', 'backdrop-blur-sm', 'py-2');
        header.classList.add('py-4');
    }
});

// 排序功能
document.getElementById ('sortSelect').addEventListener ('change', function () {
    const sortType = this.value;
    const structures = loadStructures ();
    let sortedStructures = [...structures];

    switch (sortType) {
    case 'nameAsc':
    sortedStructures.sort ((a, b) => a.name.localeCompare (b.name));
    break;
    case 'nameDesc':
    sortedStructures.sort ((a, b) => b.name.localeCompare (a.name));
    break;
    case 'type':
    sortedStructures.sort ((a, b) => a.type.localeCompare (b.type));
    break;
    case 'coordinateCount':
    const currentServer = document.getElementById ('serverSelector').value;
    sortedStructures.sort ((a, b) => {
    const aCount = (a.coordinates [currentServer] || []).length;
    const bCount = (b.coordinates [currentServer] || []).length;
    return bCount - aCount; // 降序排列
    });
    break;
    }

    // 保存排序后的结构
    saveStructures (sortedStructures);
    // 重新渲染
    renderAllStructures ();
});

}



// 初始化Gitalk
document.addEventListener('DOMContentLoaded', function() {
    const gitalk = new Gitalk({
        clientID: 'Ov23lir8R3Vh9Zzynyvy',
        clientSecret: 'b7b652dc0032f772142895a06b45e0fe66d197c2',
        repo: 'mc-map',
        owner: 'waddiwasibiu',
        admin: ['waddiwasibiu'],
        id: location.pathname,
        distractionFreeMode: false
    });

    gitalk.render('gitalk-container');
});
// 调用绑定事件函数
bindEvents();


    // 页面加载完成后初始化
    document.addEventListener('DOMContentLoaded', function() {
        // 渲染所有结构
        renderAllStructures();
        
        // 默认显示一区内容
        switchServer('server1');
        
        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // 关闭移动菜单（如果打开）
                    document.getElementById('mobileMenu').classList.add('hidden');
                    
                    // 滚动到目标位置
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });