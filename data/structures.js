// 存储展开状态
const expandedStates = {};

// 默认结构数据
const defaultStructures = [
{
    id: 19,
    name: "飞艇",
    type: "自然奇观",
    description: "悬浮于高空的神秘飞艇，内部藏有稀有宝箱和特殊战利品",
    image: 101,
    icon: "fa-rocket",
    coordinates: {
        server1: [
            { id: 1, x: -22287, y: 192, z: -73502, description: "" },
            { id: 2, x: -16058, y: 192, z: -5327, description: "" },
            { id: 3, x: -12977, y: 192, z: -20711, description: "" },
            { id: 4, x: -3799, y: 192, z: -15293, description: "" },
        ],
        server2: [

        ]
    }
},
{
    id: 20,
    name: "失落之心",
    type: "遗迹",
    description: "失落于地底深处的远古核心，散发着幽暗的能量",
    image: 102,
    icon: "fa-heart",
    coordinates: {
        server1: [
            { id: 1, x: -22522, y: 192, z: -12320, description: "地狱坐标" },
            { id: 2, x: -22541, y: 192, z: -12141, description: "地狱坐标" },
            { id: 3, x: -22645, y: 192, z: -12591, description: "地狱坐标" },
            { id: 4, x: -22617, y: 192, z: -12595, description: "地狱坐标" },
            { id: 5, x: -22519, y: 192, z: -12557, description: "地狱坐标" },
            { id: 6, x: -22683, y: 192, z: -12451, description: "地狱坐标" },
            { id: 7, x: -22758, y: 192, z: -11988, description: "地狱坐标" },
            { id: 8, x: -22661, y: 192, z: -11577, description: "地狱坐标" },
            { id: 9, x: -22769, y: 192, z: -11617, description: "地狱坐标" },
            { id: 10, x: -22663, y: 192, z: -12015, description: "地狱坐标" },
            { id: 11, x: -22235, y: 192, z: -11568, description: "地狱坐标" },
            { id: 12, x: -22143, y: 192, z: -11869, description: "地狱坐标" },
            { id: 13, x: -22086, y: 192, z: -11591, description: "地狱坐标" },
            { id: 14, x: -21443, y: 192, z: -9865, description: "地狱坐标" },
            { id: 15, x: -21353, y: 192, z: -8799, description: "地狱坐标" },
            { id: 16, x: -21248, y: 192, z: -7933, description: "地狱坐标" },
            { id: 17, x: -21252, y: 192, z: -8089, description: "地狱坐标" },
            { id: 18, x: -20293, y: 192, z: -7793, description: "地狱坐标" },
            { id: 19, x: -19408, y: 192, z: -7268, description: "地狱坐标" },
            { id: 20, x: -16559, y: 192, z: -5553, description: "地狱坐标" },
            { id: 21, x: -12411, y: 192, z: -20241, description: "地狱坐标" },
            { id: 22, x: -12261, y: 192, z: -18321, description: "地狱坐标" },
            { id: 23, x: -8188, y: 192, z: -17876, description: "地狱坐标" },
            { id: 24, x: -7595, y: 192, z: -17785, description: "地狱坐标" },
            { id: 25, x: -7491, y: 192, z: -17677, description: "地狱坐标" },
            { id: 26, x: -5322, y: 192, z: -16901, description: "地狱坐标" },
            { id: 27, x: -5309, y: 192, z: -16761, description: "地狱坐标" },
            { id: 28, x: -4985, y: 192, z: -16375, description: "地狱坐标" },
        ],
        server2: [
            { id: 1, x: 4200, y: 192, z: 1500, description: "" },
        ]
    }
},
{
    id: 1,
    name: "孤独堡垒",
    type: "遗迹",
    description: "试炼刷怪笼与那跃动的灵魂火，也许就是这堡垒里最后的活动之物了。如果感兴趣，你可以在那主塔楼的顶端见到巨大的旋风人。",
    image: 2,
    icon: "fa-fort-awesome",
    coordinates: {
        server1: [
            { id: 1, x: -3135, y: 192, z: 6528, description: "暗月" },
            { id: 2, x: 2945, y: 192, z: -2297, description: "蒂蒂" },
            { id: 3, x: 6999, y: 192, z: 12799, description: "爱酱" },
            { id: 4, x: 8015, y: 192, z: 12909, description: "爱酱" },
            { id: 5, x: 7288, y: 192, z: 8255, description: "DaiMao" },
            { id: 6, x: -4084, y: 192, z: 4297, description: "粉毛" },
            { id: 7, x: -8458, y: 192, z: -995, description: "大毛" },
            { id: 8, x: -3985, y: 192, z: -6349, description: "暗月" },
            { id: 9, x: 423, y: 192, z: -4277, description: "不知了虫" },
            { id: 10, x: -957, y: 192, z: 1957, description: "" },
            { id: 11, x: 5523, y: 192, z: 9694, description: "" },
            { id: 12, x: 5523, y: 192, z: 603, description: "" },
            { id: 13, x: 8053, y: 192, z: -7988, description: "" },
            { id: 14, x: -2898, y: 192, z: 6474, description: "" },
            { id: 15, x: -3673, y: 192, z: 12635, description: "" },
            { id: 16, x: -2984, y: 192, z: 7671, description: "" },
            { id: 17, x: -2565, y: 192, z: 6645, description: "" },
            { id: 18, x: -2695, y: 192, z: 6513, description: "" },
            { id: 19, x: -13055, y: 192, z: 4757, description: "" },
            { id: 20, x: 10949, y: 192, z: -1730, description: "" },
            { id: 21, x: 9170, y: 192, z: 5290, description: "" },
            { id: 22, x: -7513, y: 192, z: 3142, description: "" },
            { id: 23, x: -7383, y: 192, z: 3062, description: "" },

        ],
        server2: [

        ]
    }
},
{
    id: 2,
    name: "剧毒魔窟",
    type: "遗迹",
    description: "沼泽深处的回响",
    image: 3,
    icon: "fa-tree",
    coordinates: {
        server1: [
        { id: 1, x: -2871, y: 192, z: 3141, description: "" },
        { id: 2, x: 4540, y: 192, z: 208, description: "" },
        { id: 3, x: 1539, y: 192, z: -7281, description: "" },
        { id: 4, x: 14162, y: 192, z: -1364, description: "" },
        { id: 5, x: 3250, y: 192, z: 722, description: "" },
        

        ],
        server2: [

        ]
    }
},

{
    id: 3,
    name: "试炼堡垒",
    type: "自然奇观",
    description: "生成于主世界冰冻深海和暖水海洋群系空中的巨大试炼结构",
    image: 4,
    icon: "fa-tornado",
    coordinates: {
        server1: [
        { id: 1, x: 9628, y: 192, z: 8814, description: "" },
        { id: 2, x: 9634, y: 192, z: 7762, description: "" },
        { id: 3, x: -3784, y: 192, z: -3774, description: "已改造" },
        { id: 4, x: 9634, y: 192, z: -4756, description: "" },
        { id: 5, x: 14444, y: 192, z: -4757, description: "" },
        { id: 6, x: 1138, y: 192, z: -1819, description: "" },
        { id: 7, x: 8774, y: 192, z: -12328, description: "已改造" },
        { id: 8, x: -7575, y: 192, z: -4772, description: "" },
        { id: 9, x: -6619, y: 192, z: 2977, description: "" },
        { id: 10, x: 2945, y: 192, z: -4635, description: "" },
        { id: 11, x: 7737, y: 192, z: -6610, description: "已改造" },
        { id: 12, x: 4815, y: 192, z: 50, description: "" },
        { id: 13, x: 8765, y: 192, z: 9716, description: "" },
        { id: 14, x: 14545, y: 192, z: 4819, description: "" },
        { id: 15, x: -1786, y: 192, z: 5904, description: "" },
        { id: 16, x: 8786, y: 192, z: 8692, description: "" },
        { id: 17, x: 8680, y: 192, z: 2977, description: "" },
        { id: 18, x: -13338, y: 192, z: -12414, description: "" },

        

        ],
        server2: [

        ]
    }
},

{
    id: 4,
    name: "沙漠神殿",
    type: "遗迹",
    description: "隐藏在沙漠中的古老神殿，被沙子覆盖。内部困有许多亡灵，还设有一些陷阱。",
    image: 5,
    icon: "fa-sun-o",
    coordinates: {
        server1: [
        
        ],
        server2: [

            
            

        ]
    }
},
{
    id: 5,
    name: "丛林神殿",
    type: "遗迹",
    description: "隐藏在茂密丛林中的古老神殿，周围缠绕着藤蔓和树木。神殿内部布满陷阱，特别是在宝箱周围，需要小心触发。",
    image: 6,
    icon: "fa-tornado",
    coordinates: {
        server1: [
            { id: 1, x: 6577, y: 192, z: 5375, description: "" },
            { id: 2, x: 6461, y: 192, z: 3686, description: "" },
            { id: 3, x: 8912, y: 192, z: 10005, description: "" },
            { id: 4, x: -405, y: 192, z: 8378, description: "" },
            { id: 5, x: 6831, y: 192, z: -742, description: "" },
            { id: 6, x: -5219, y: 192, z: -5229, description: "" },
            { id: 7, x: 3949, y: 192, z: 3965, description: "" },
            { id: 8, x: -8997, y: 192, z: -9001, description: "" },
            { id: 9, x: -3969, y: 192, z: 4009, description: "" },
            { id: 10, x: 45, y: 192, z: -9481, description: "" },
            { id: 11, x: 23, y: 192, z: -14949, description: "" },
            { id: 12, x: -427, y: 192, z: 2417, description: "" },
            { id: 13, x: -2361, y: 192, z: 15318, description: "LT2" },
            { id: 14, x: -2325, y: 192, z: 15912, description: "LT2" },



        ],
        server2: [

            
        ]
    }
},
{
    id: 6,
    name: "善魂云",
    type: "自然奇观",
    description: "刷新在雪原、积雪高山、冰刺之地和冰封山峰群系空中的快乐云朵，云上雪屋的地下室里貌似关押着一只永远不会长大的小可爱，去解放它让它自由地追逐天空吧！特殊战利品：颜色各异的挽具、失水恶魂、“悠魂”附魔书、“纯真守护”附魔书”附魔书、“动能缓冲”附魔书",
    image: 7,
    icon: "fa-tornado",
    coordinates: {
        server1: [
            { id: 1, x: 8200, y: 192, z: -4091, description: "" },

            

            ],
        server2: [

            
        ]
    }
},

{
    id: 7,
    name: "旋风云",
    type: "自然奇观",
    description: "天空中旋转的巨大云团，风呼啸，刷怪笼中的旋风人被靠近的玩家唤醒......特殊战利品：无冷却风弹、脆风棒、“风爆弹射”附魔书、“动能缓冲”附魔书",
    image: 8,
    icon: "fa-tornado",
    coordinates: {
        server1: [



        ],
        server2: [

        ]
    }
},


{
    id: 8,
    name: "嘎吱村",
    type: "自然奇观",
    description: "新在苍白森林的灾厄营地，炼金房、图书馆、教堂、靶场......特殊战利品：音乐唱片-《Infinite Spooky Amethyst》、嘎吱佳酿、附有快速填装IV的弩",
    image: 9,
    icon: "fa-tornado",
    coordinates: {
        server1: [


        ],
        server2: [

        ]
    }
},





{
    id: 9,
    name: "末地堡垒",
    type: "遗迹",
    description: "世界尽头最大的城市",
    image: 10,
    icon: "fa-fort-awesome",
    coordinates: {
        server1: [
            { id: 1, x: 1260, y: 192, z: -14000, description: "" },

        ],
        server2: [
            { id: 1, x: 0, y: 192, z: 0, description: "" },
        ]
    }
},

{
    id: 10,
    name: "五级试炼",
    type: "遗迹",
    description: "最有性价比的水电梯",
    image: 11,
    icon: "fa-fort-awesome",
    coordinates: {
        server1: [



        ],
        server2: [

        
        ]
    }
},

{
    id: 11,
    name: "六级试炼",
    type: "遗迹",
    description: "地底最大的试炼",
    image: 12,
    icon: "fa-fort-awesome",
    coordinates: {
        server1: [
            { id: 1, x: -2492, y: 192, z: 16663, description: "LT2" },
            { id: 2, x: 7199, y: 192, z: -10892, description: "LT2" },


        ],
        server2: [

        
        ]
    }
},


{
    id: 12,
    name: "冰塔",
    type: "遗迹",
    description: "凛冬将至",
    image: 13,
    icon: "fa-fort-awesome",
    coordinates: {
        server1: [
            { id: 1, x: 8000, y: 192, z: -4240, description: "" },


        ],
        server2: [

        
        ]
    }
},

{
    id: 13,
    name: "三叉戟试炼",
    type: "遗迹",
    description: "深海的主宰",
    image: 14,
    icon: "fa-fort-awesome",
    coordinates: {
        server1: [
            { id: 1, x: 4018, y: 192, z: 1615, description: "" },
            { id: 2, x: -11216, y: 192, z: -9999, description: "" },
            { id: 3, x: 4424, y: 192, z: 1607, description: "" },
            { id: 4, x: -4777, y: 192, z: 5606, description: "" },
            { id: 5, x: 6005, y: 192, z: 2810, description: "" },
            { id: 6, x: 8805, y: 192, z: 9599, description: "" },
            { id: 7, x: -1181, y: 192, z: 404, description: "" },
            { id: 8, x: -5183, y: 192, z: 4412, description: "" },
            { id: 9, x: 13213, y: 192, z: -1365, description: "" },


        ],
        server2: [

        ]
    }
},


{
    id: 14,
    name: "遗迹废墟",
    type: "自然奇观",
    description: "“看起来年是一座年代久远的地下博物馆”",
    image: 15,
    icon: "fa-fort-awesome",
    coordinates: {
        server1: [


        ],
        server2: [

        ]
    }
},

{
    id: 15,
    name: "蜂窝",
    type: "遗迹",
    description: "蜂王浆",
    image: 16,
    icon: "fa-fort-awesome",
    coordinates: {
        server1: [


        ],
        server2: [

        
        ]
    }
},



{
    id: 16,
    name: "女巫庄园",
    type: "遗迹",
    description: "渡劫诅咒",
    image: 17,
    icon: "fa-fort-awesome",
    coordinates: {
        server1: [
            { id: 1, x: -2989, y: 192, z: 14329, description: "" },



        ],
        server2: [


        
        ]
    }
},


{
    id: 17,
    name: "禁锢主楼",
    type: "遗迹",
    description: "恶魂boss",
    image: 18,
    icon: "fa-fort-awesome",
    coordinates: {
        server1: [
            { id: 1, x: 492, y: 192, z: 5082, description: "" },
            { id: 2, x: -4221, y: 192, z: 15137, description: "" },

        ],
        server2: [

        ]
    }
},


{
    id: 18,
    name: "下界主楼",
    type: "遗迹",
    description: "下界主楼",
    image: 19,
    icon: "fa-fort-awesome",
    coordinates: {
        server1: [
            { id: 1, x: 9059, y: 192, z: -28758, description: "" },
            { id: 2, x: -35497, y: 192, z: -20170, description: "" },
            { id: 3, x: -5220, y: 192, z: 3367, description: "" },
            { id: 4, x: 6153, y: 192, z: 8978, description: "" },
            { id: 5, x: 6070, y: 192, z: 8000, description: "" },
            { id: 6, x: 4507, y: 192, z: 10826, description: "" },

        ],
        server2: [

        ]
    }
},




];

// 以(0,0)为起点，使用最近邻贪心算法重新排序坐标点，使路径长度最短
function reorderByShortestPath(coords) {
    if (!coords || coords.length <= 1) return coords;
    var remaining = coords.slice();
    var result = [];
    var cx = 0, cz = 0;
    while (remaining.length) {
        var best = 0, bestDist = Infinity;
        for (var i = 0; i < remaining.length; i++) {
            var dx = remaining[i].x - cx, dz = remaining[i].z - cz;
            var dist = dx * dx + dz * dz;
            if (dist < bestDist) { bestDist = dist; best = i; }
        }
        var next = remaining.splice(best, 1)[0];
        result.push(next);
        cx = next.x; cz = next.z;
    }
    result.forEach(function(c, i) { c.id = i + 1; });
    return result;
}

function applyRenumbering(structures) {
    structures.forEach(function(s) {
        var s1 = s.coordinates.server1;
        var s2 = s.coordinates.server2;
        if (s1 && s1.length > 1) s.coordinates.server1 = reorderByShortestPath(s1);
        if (s2 && s2.length > 1) s.coordinates.server2 = reorderByShortestPath(s2);
    });
    return structures;
}

// 保存结构数据到本地存储
function saveStructures(structures) {
    localStorage.setItem('mcStructures', JSON.stringify(structures));
}

// 加载结构数据
function loadStructures() {
    var storedStructures = localStorage.getItem('mcStructures');
    var structures = storedStructures ? JSON.parse(storedStructures) : defaultStructures;
    return applyRenumbering(structures);
}

