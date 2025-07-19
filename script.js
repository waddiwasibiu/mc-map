// 存储展开状态
const expandedStates = {};

// 默认结构数据
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

// 从本地存储加载结构数据
function loadStructures() {
    const savedStructures = localStorage.getItem('mcStructures');
    return savedStructures ? JSON.parse(savedStructures) : defaultStructures;
}

// 保存结构数据到本地存储
function saveStructures(structures) {
    localStorage.setItem('mcStructures', JSON.stringify(structures));
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
                <div class="mt-6 mb-6">
                    <h4 class="font-medium text-gray-700 mb-3">坐标分布 (X-Z 平面)</h4>
                    <div class="relative h-64 bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                        ${coordinates.length > 0 ? `
                            <canvas id="${server}-${structure.id}-chart" class="w-full h-full"></canvas>
                        ` : `
                            <div class="absolute inset-0 flex items-center justify-center text-gray-500">
                                <p>暂无坐标数据可展示</p>
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
                                <div>
                                    <button class="text-primary hover:underline" onclick="copyCoordinates('${coord.x}', '${coord.y}', '${coord.z}')">复制坐标</button>
                                </div>
                            </div>
                        </div>
                    `).join('') : `
                        <p class="text-gray-500">暂无坐标数据</p>
                    `}
                </div>
                
                <div class="flex justify-between items-center">
                    <button class="text-primary hover:underline" onclick="toggleCoordinates('${server}-${structure.id}-coordinates')">
                        ${coordinates.length > 0 ? (expandedStates[`${server}-${structure.id}-coordinates`] ? '收起坐标' : '展开坐标') : ''}
                    </button>
                    <a href="#" class="text-primary hover:underline">查看详情</a>
                </div>
            </div>
        </div>
    `;
}

// 复制坐标到剪贴板
function copyCoordinates(x, y, z) {
    const text = `X: ${x}, Y: ${y}, Z: ${z}`;
    navigator.clipboard.writeText(text).then(() => {
        alert('坐标已复制到剪贴板');
    }).catch((err) => {
        console.error('无法复制坐标: ', err);
    });
}

// 切换坐标列表的展开状态
function toggleCoordinates(id) {
    const element = document.getElementById(id);
    const isExpanded = element.dataset.expanded === 'true';
    element.dataset.expanded = !isExpanded;
    expandedStates[id] = !isExpanded;
    if (isExpanded) {
        element.classList.add('max-h-60', 'overflow-y-hidden');
        element.classList.remove('max-h-full', 'overflow-y-auto');
    } else {
        element.classList.remove('max-h-60', 'overflow-y-hidden');
        element.classList.add('max-h-full', 'overflow-y-auto');
    }
}

// 页面加载完成后执行的操作
document.addEventListener('DOMContentLoaded', () => {
    const serverSelector = document.getElementById('serverSelector');
    const sortSelect = document.getElementById('sortSelect');
    const addStructureForm = document.getElementById('addStructureForm');
    const server1Content = document.getElementById('server1Content');
    const server2Content = document.getElementById('server2Content');

    // 加载结构数据
    const structures = loadStructures();

    // 渲染结构卡片
    function renderStructures(server) {
        let filteredStructures = structures;
        const sortOption = sortSelect.value;
        switch (sortOption) {
            case 'nameAsc':
                filteredStructures = filteredStructures.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'nameDesc':
                filteredStructures = filteredStructures.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'type':
                filteredStructures = filteredStructures.sort((a, b) => a.type.localeCompare(b.type));
                break;
            case 'coordinateCount':
                filteredStructures = filteredStructures.sort((a, b) => {
                    const countA = a.coordinates[server].length;
                    const countB = b.coordinates[server].length;
                    return countB - countA;
                });
                break;
        }

        const content = server === 'server1' ? server1Content : server2Content;
        content.innerHTML = '';
        filteredStructures.forEach(structure => {
            content.innerHTML += renderStructureCard(structure, server);
        });

        // 渲染坐标分布图
        filteredStructures.forEach(structure => {
            const coordinates = structure.coordinates[server];
            if (coordinates.length > 0) {
                const ctx = document.getElementById(`${server}-${structure.id}-chart`).getContext('2d');
                new Chart(ctx, {
                    type: 'scatter',
                    data: {
                        datasets: [{
                            label: '坐标分布',
                            data: coordinates.map(coord => ({ x: coord.x, y: coord.z })),
                            backgroundColor: 'rgba(59, 130, 246, 0.5)',
                            borderColor: 'rgba(59, 130, 246, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'X 坐标'
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Z 坐标'
                                }
                            }
                        }
                    }
                });
            }
        });
    }

    // 服务器选择事件
    serverSelector.addEventListener('change', () => {
        const selectedServer = serverSelector.value;
        if (selectedServer === 'server1') {
            server1Content.classList.remove('hidden');
            server2Content.classList.add('hidden');
        } else {
            server1Content.classList.add('hidden');
            server2Content.classList.remove('hidden');
        }
        renderStructures(selectedServer);
    });

    // 排序选择事件
    sortSelect.addEventListener('change', () => {
        const selectedServer = serverSelector.value;
        renderStructures(selectedServer);
    });

    // 添加结构表单提交事件
    addStructureForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const structureName = document.getElementById('structureName').value;
        const structureType = document.getElementById('structureType').value;
        const structureDescription = document.getElementById('structureDescription').value;
        const structureImage = document.getElementById('structureImage').value;
        const structureIcon = document.getElementById('structureIcon').value;

        const newStructure = {
            name: structureName,
            type: structureType,
            description: structureDescription,
            image: structureImage,
            icon: structureIcon
        };

        addStructure(newStructure);
        alert('结构已成功添加');
        addStructureForm.reset();
        const selectedServer = serverSelector.value;
        renderStructures(selectedServer);
    });

    // 初始化渲染
    const initialServer = serverSelector.value;
    renderStructures(initialServer);

    // 移动端菜单切换
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});