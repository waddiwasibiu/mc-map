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
            { id: 1, x: -9164, y: 192, z: -2182, description: "地狱坐标" },
            { id: 2, x: -5782, y: 192, z: 3527, description: "地狱坐标" },
            { id: 3, x: -3002, y: 192, z: -9852, description: "地狱坐标" },
            { id: 4, x: 4833, y: 192, z: 870, description: "地狱坐标" },
            { id: 5, x: 1820, y: 192, z: -57, description: "地狱坐标" },
            { id: 6, x: 8845, y: 192, z: 8118, description: "地狱坐标" },
            { id: 7, x: -2390, y: 192, z: -5020, description: "地狱坐标" },

        ],
        server2: [
            { id: 1, x: 6562, y: 192, z: -9506, description: "地狱坐标" },
            { id: 2, x: -9795, y: 192, z: 3234, description: "地狱坐标" },
            { id: 3, x: 2305, y: 192, z: 8814, description: "地狱坐标" },
            { id: 4, x: -1689, y: 192, z: 8335, description: "地狱坐标" },
            { id: 5, x: 9493, y: 192, z: 3317, description: "地狱坐标" },
            { id: 6, x: -5274, y: 192, z: -8951, description: "地狱坐标" },
            { id: 7, x: 10001, y: 192, z: -8182, description: "地狱坐标" },
            { id: 8, x: -9055, y: 192, z: -3178, description: "地狱坐标" },
            { id: 9, x: -8716, y: 192, z: -1668, description: "地狱坐标" },
            { id: 10, x: -6037, y: 192, z: -9784, description: "地狱坐标" },
            { id: 11, x: 7292, y: 192, z: 6267, description: "地狱坐标" },
            { id: 12, x: 9237, y: 192, z: -10252, description: "地狱坐标" },
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
            { id: 1, x: -6077, y: 192, z: 8755, description: "地狱坐标" },
            { id: 2, x: -1180, y: 192, z: -1073, description: "地狱坐标" },
            { id: 3, x: 983, y: 192, z: -4949, description: "地狱坐标" },
            { id: 4, x: 132, y: 192, z: 322, description: "地狱坐标 主城边上" },
            { id: 5, x: -7223, y: 192, z: 1514, description: "地狱坐标" },
            { id: 6, x: 5563, y: 192, z: -4902, description: "地狱坐标" },
            { id: 7, x: 6768, y: 192, z: -5050, description: "地狱坐标" },
            { id: 8, x: -3177, y: 192, z: -4799, description: "地狱坐标 铁锤边上" },
            { id: 9, x: -3079, y: 192, z: -4935, description: "地狱坐标 铁锤边上" },
            { id: 10, x: -7350, y: 192, z: -8793, description: "地狱坐标" },
            { id: 11, x: -7492, y: 192, z: -8713, description: "地狱坐标" },

        ],
        server2: [
            { id: 1, x: 1380, y: 192, z: 3127, description: "地狱坐标" },
            { id: 2, x: 379, y: 192, z: 4069, description: "地狱坐标" },
            { id: 3, x: 3729, y: 192, z: 3938, description: "地狱坐标" },
            { id: 4, x: 1171, y: 192, z: -4078, description: "旁边100m就是嘎吱村" },
            { id: 5, x: 49, y: 192, z: 3950, description: "地狱坐标" },
            { id: 6, x: -312, y: 192, z: 8619, description: "地狱坐标" },
            { id: 7, x: -509, y: 192, z: 8362, description: "地狱坐标" },
            { id: 8, x: -624, y: 192, z: 1627, description: "地狱坐标 逐空边上" },
            { id: 9, x: 4118, y: 192, z: -7989, description: "地狱坐标" },
            { id: 10, x: 6525, y: 192, z: -9265, description: "地狱坐标" },
            { id: 11, x: 213, y: 192, z: 83, description: "地狱坐标 主城边上" },
            { id: 12, x: -790, y: 192, z: -3079, description: "地狱坐标" },
            { id: 13, x: -790, y: 192, z: -8561, description: "地狱坐标" },
            { id: 14, x: -1564, y: 192, z: 7727, description: "地狱坐标" },
            { id: 15, x: -5311, y: 192, z: -9696, description: "地狱坐标" },
            { id: 16, x: -5329, y: 192, z: -4435, description: "地狱坐标" },
            { id: 17, x: -4865, y: 192, z: 6369, description: "地狱坐标" },
            { id: 18, x: -5561, y: 192, z: -6558, description: "地狱坐标" },
            { id: 19, x: -8870, y: 192, z: 6405, description: "地狱坐标" },
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
            { id: 1, x: -9830, y: 63, z: 1501, description: "地狱坐标" },
            { id: 2, x: 5513, y: 63, z: 2275, description: "地狱坐标" },
            { id: 3, x: 638, y: 63, z: -4790, description: "地狱坐标" },
            { id: 4, x: -9958, y: 98, z: -1349, description: "地狱坐标 旁边100m就是第5个" },
            { id: 5, x: -9889, y: 98, z: -1408, description: "地狱坐标" },
            { id: 6, x: -4578, y: 98, z: -4767, description: "地狱坐标 铁锤边上" },
            { id: 7, x: -2239, y: 98, z: -6688, description: "地狱坐标" },
        ],
        server2: [
            { id: 1, x: -2048, y: 63, z: -3277, description: "地狱坐标" },
            { id: 2, x: 923, y: 98, z: -4101, description: "地狱坐标 旁边100m就是第3个" },
            { id: 3, x: 985, y: 98, z: -4090, description: "地狱坐标" },
            { id: 4, x: 3530, y: 98, z: 3123, description: "地狱坐标" },
            { id: 5, x: -777, y: 98, z: 9222, description: "地狱坐标" },
            { id: 6, x: -5372, y: 98, z: -5357, description: "地狱坐标 旁边100m就是第7个" },
            { id: 7, x: -5400, y: 98, z: -5266, description: "地狱坐标" },
            { id: 8, x: -5498, y: 98, z: -3990, description: "地狱坐标" },
            
            

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
            { id: 1, x: -457, y: 192, z: 7, description: "地狱坐标" },
            { id: 2, x: -322, y: 192, z: 9, description: "地狱坐标" },
            { id: 3, x: 1877, y: 192, z: -5268, description: "地狱坐标 旋风云+乐魂云" },
            { id: 4, x: 1992, y: 192, z: -5270, description: "地狱坐标 旋风云+乐魂云" },
            { id: 5, x: 3744, y: 192, z: -5167, description: "地狱坐标" },
            { id: 6, x: -810, y: 192, z: 1450, description: "地狱坐标" },
            { id: 7, x: -951, y: 192, z: 1350, description: "地狱坐标" },
            { id: 8, x: -8472, y: 192, z: -8242, description: "地狱坐标" },
            { id: 9, x: -1972, y: 192, z: -9693, description: "地狱坐标" },
            { id: 10, x: -2891, y: 192, z: -9668, description: "地狱坐标" },
            { id: 11, x: -3079, y: 192, z: -9557, description: "地狱坐标" },
            { id: 12, x: -3187, y: 192, z: -9783, description: "地狱坐标" },
            { id: 13, x: -3215, y: 192, z: -9670, description: "地狱坐标" },
            { id: 14, x: -2975, y: 192, z: -9604, description: "地狱坐标" },
            { id: 15, x: -2787, y: 192, z: -9574, description: "地狱坐标" },
            { id: 16, x: -2996, y: 192, z: -9296, description: "地狱坐标" },
            { id: 17, x: -2891, y: 192, z: -9457, description: "地狱坐标" },
            { id: 18, x: -2987, y: 192, z: -9700, description: "地狱坐标" },
            { id: 19, x: -2891, y: 192, z: -9457, description: "小云 地狱坐标" },
            { id: 20, x: -2868, y: 192, z: -9373, description: "地狱坐标" },
            { id: 21, x: 6018, y: 192, z: -4880, description: "地狱坐标" },
            { id: 22, x: -3341, y: 192, z: -4286, description: "地狱坐标 铁锤边上" },
            { id: 23, x: -3794, y: 192, z: -5495, description: "地狱坐标 铁锤边上" },
            { id: 24, x: 1377, y: 192, z: 877, description: "地狱坐标" },


        ],
        server2: [
            { id: 1, x: -2, y: 192, z: 8474, description: "地狱坐标" },
            { id: 2, x: 43, y: 192, z: 8452, description: "地狱坐标" },
            { id: 3, x:257, y: 192, z: 2306, description: "地狱坐标" },
            { id: 4, x:270, y: 192, z: 2208, descriptiom: "地狱坐标" },
            { id: 5, x:20, y: 192, z: 3515, descriptiom: "地狱坐标" },
            { id: 6, x: 4100, y: 192, z: -8347, description: "地狱坐标" },
            { id: 7, x: 2586, y: 192, z: 6124, description: "地狱坐标" },
            
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
            { id: 1, x: -2831, y: 192, z: -943, description: "地狱坐标" },
            { id: 2, x: 5185, y: 192, z: 3081, description: "地狱坐标" },
            { id: 3, x: 5737, y: 192, z: -190, description: "小云 地狱坐标" },
            { id: 4, x: 5276, y: 192, z: 3094, description: "小云 地狱坐标" },
            { id: 5, x: -1132, y: 192, z: 3119, description: "地狱坐标" },
            { id: 6, x: -4909, y: 192, z: 4301, description: "地狱坐标" },
            { id: 7, x: -4678, y: 192, z: 4319, description: "地狱坐标" },
            { id: 8, x: -4650, y: 192, z: 3778, description: "地狱坐标" },
            { id: 9, x: 4844, y: 192, z: -5043, description: "地狱坐标" },
            { id: 10, x: -1011, y: 192, z: 1177, description: "地狱坐标" },
            { id: 11, x: -2083, y: 192, z: -9781, description: "地狱坐标" },
            { id: 12, x: -1986, y: 192, z: -9662, description: "地狱坐标" },
            { id: 13, x: -2857, y: 192, z: -9668, description: "地狱坐标" },
            { id: 14, x: -2990, y: 192, z: -9568, description: "地狱坐标" },
            { id: 15, x: -3200, y: 192, z: -9683, description: "地狱坐标" },
            { id: 16, x: -2701, y: 192, z: -9374, description: "地狱坐标" },
            { id: 17, x: -3081, y: 192, z: -9365, description: "地狱坐标" },
            { id: 18, x: -2986, y: 192, z: -9379, description: "小云 地狱坐标" },
            { id: 19, x: 3939, y: 192, z: -3110, description: "地狱坐标" },
            { id: 20, x: -3228, y: 192, z: -4407, description: "地狱坐标 铁锤边上" },
            { id: 21, x: -2866, y: 192, z: -4785, description: "地狱坐标 铁锤边上" },
            
            

            ],
        server2: [
            { id: 1, x: 235, y: 192, z: 8362, description: "地狱坐标" },
            { id: 2, x: -266, y: 192, z: 3387, description: "地狱坐标" },
            { id: 3, x: 3985, y: 192, z: -8465, description: "地狱坐标" },
            { id: 4, x: 4209, y: 192, z: -8447, description: "地狱坐标" },
            { id: 5, x: 2622, y: 192, z: 6135, description: "地狱坐标" },
            { id: 6, x: 2736, y: 192, z: 6214, description: "地狱坐标" },
            { id: 7, x: 2528, y: 192, z: -647, description: "地狱坐标" },
            { id: 8, x: -9966, y: 192, z: 3299, description: "地狱坐标" },
            { id: 9, x: -1365, y: 192, z: 7815, description: "地狱坐标" },
            
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
            { id: 1, x: -1575, y: 192, z: -9641, description: "-靶场-女巫1幻术" },
            { id: 2, x: 2434, y: 192, z: -694, description: "3靶场-女巫" },
            { id: 3, x: 5111, y: 192, z: -4917, description: "-靶场-女巫" },
            { id: 4, x: 7991, y: 192, z: -4862, description: "4靶场1女巫" },
            { id: 5, x: -9729, y: 192, z: -1078, description: "-靶场-女巫" },
            { id: 6, x: -8717, y: 192, z: 462, description: "-靶场-女巫" },
            { id: 7, x: 9015, y: 192, z: 8560, description: "2靶场0女巫" },
            { id: 8, x: -8651, y: 192, z: 8758, description: "4靶场1女巫" },


        ],
        server2: [
            { id: 1, x: 1909, y: 192, z: 4929, description: "0靶场2女巫" },
            { id: 2, x: 1188, y: 192, z: -4692, description: "2靶场2女巫" },
            { id: 3, x: -4691, y: 192, z: 3531, description: "0靶场3女巫" },
            { id: 4, x: 4125, y: 192, z: -8897, description: "4靶场0女巫" },
            { id: 5, x: 4563, y: 192, z: 1447, description: "2靶场2女巫" },
            { id: 6, x: -5164, y: 192, z: -9715, description: "2靶场2女巫" },
            { id: 7, x: -4858, y: 192, z: 8534, description: "5靶场-女巫" },
            { id: 8, x: -5374, y: 192, z: -4101, description: "3靶场1女巫" },
            { id: 9, x: -5301, y: 192, z: -4083, description: "1靶场0女巫" },
            { id: 10, x: -5231, y: 192, z: -4096, description: "2靶场-女巫" },
            { id: 11, x: -6980, y: 192, z: -11308, description: "3靶场1女巫" },
            { id: 12, x: -7590, y: 192, z: -11170, description: "1靶场0女巫" },
        ]
    }
},

{
    id: 7,
    name: "遗迹废墟",
    type: "自然奇观",
    description: "“看起来年是一座年代久远的地下博物馆”",
    image: 8,
    icon: "fa-tornado",
    coordinates: {
        server1: [
            { id: 1, x: 5086, y: 192, z: 2693, description: "地狱坐标" },

        ],
        server2: [
            { id: 1, x: -2574, y: 192, z: -6600, description: "地狱坐标" },
            { id: 2, x: -5312, y: 192, z: -106, description: "地狱坐标" },
        ]
    }
},


{
    id: 8,
    name: "试炼堡垒",
    type: "自然奇观",
    description: "生成于主世界冰冻深海和暖水海洋群系空中的巨大试炼结构",
    image: 9,
    icon: "fa-tornado",
    coordinates: {
        server1: [
            { id: 1, x: -720, y: 192, z: 736, description: "地狱坐标" },
            { id: 2, x: -719, y: 192, z: -1435, description: "地狱坐标" },
            { id: 3, x: 2898, y: 192, z: 728, description: "地狱坐标" },
            { id: 4, x: -2156, y: 192, z: -688, description: "地狱坐标" },
            { id: 5, x: -1437, y: 192, z: 772, description: "地狱坐标" },
            { id: 6, x: -5000, y: 192, z: -1375, description: "地狱坐标" },
            { id: 7, x: -5752, y: 192, z: -1438, description: "地狱坐标" },
            { id: 8, x: -2836, y: 192, z: 1502, description: "地狱坐标" },
            { id: 9, x: -8592, y: 192, z: -1412, description: "地狱坐标" },
            { id: 10, x: 1503, y: 192, z: 4343, description: "地狱坐标" },
            { id: 11, x: 33, y: 192, z: -8790, description: "地狱坐标" },
            { id: 12, x: 3664, y: 192, z: -5708, description: "地狱坐标" },
            { id: 13, x: -4312, y: 192, z: -2819, description: "地狱坐标" },
            { id: 14, x: -3203, y: 192, z: -4738, description: "地狱坐标" },
            { id: 15, x: 3623, y: 192, z: 5, description: "地狱坐标" },
            { id: 16, x: -3152, y: 192, z: -5528, description: "地狱坐标" },
            { id: 17, x: 9611, y: 192, z: -1530, description: "地狱坐标" },


        ],
        server2: [
            { id: 1, x: 23, y: 192, z: 51, description: "地狱坐标" },
            { id: 2, x: 4386, y: 192, z: -3594, description: "地狱坐标" },
            { id: 3, x: 3680, y: 192, z: -8626, description: "地狱坐标" },
            { id: 4, x: 2929, y: 192, z: 3646, description: "地狱坐标" },
            { id: 5, x: 5107, y: 192, z: 35, description: "地狱坐标" },
            { id: 6, x: 46, y: 192, z: 9412, description: "地狱坐标" },
            { id: 7, x: -2325, y: 192, z: 9622, description: "地狱坐标" },
            { id: 8, x: -5530, y: 192, z: 9648, description: "地狱坐标" },
            { id: 9, x: 7951, y: 192, z: -6454, description: "地狱坐标" },
            { id: 10, x: 9372, y: 192, z: -9305, description: "地狱坐标 疑似被独占(?)" },
            { id: 11, x: 5, y: 192, z: 5096, description: "地狱坐标" },
            { id: 12, x: -2123, y: 192, z: -2878, description: "地狱坐标" },
            { id: 13, x: 4844, y: 192, z: 4073, description: "地狱坐标" },
            { id: 14, x: 730, y: 192, z: 4375, description: "地狱坐标" },
            { id: 15, x: -5546, y: 192, z: 4835, description: "地狱坐标" },
            { id: 16, x: -5556, y: 192, z: -3966, description: "地狱坐标" },
            { id: 17, x: -4291, y: 192, z: -4297, description: "地狱坐标" },
            { id: 18, x: 11246, y: 192, z: -9594, description: "地狱坐标" },
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
            { id: 1, x: 17540, y: 192, z: 2208, description: "" },
            { id: 2, x: 11727, y: 192, z: 850, description: "" },
            { id: 3, x: -13871, y: 192, z: 14938, description: "8船" },

        ],
        server2: [
            { id: 1, x: -807, y: 192, z: 1409, description: "" },
            { id: 2, x: 5500, y: 192, z: -1727, description: "" },
            { id: 3, x: -3892, y: 192, z: -3557, description: "" },
            { id: 4, x: -1182, y: 192, z: -2028, description: "" },
            { id: 5, x: -3450, y: 192, z: -7906, description: "" },
            { id: 6, x: 4269, y: 192, z: -17271, description: "" },
            { id: 7, x: 1856, y: 192, z: 18, description: "" },
            { id: 8, x: -6077, y: 192, z: 5374, description: "" },
            { id: 9, x: 1062, y: 192, z: -4919, description: "" },
            { id: 10, x: 8400, y: 192, z: -12096, description: "" },
            { id: 11, x: 3864, y: 192, z: 3521, description: "" },
            { id: 12, x: -4672, y: 192, z: 1502, description: "" },
            { id: 13, x: -6546, y: 192, z: -3847, description: "" },
            { id: 14, x: -8500, y: 192, z: 833, description: "" },
            
        
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
            { id: 1, x: 5926, y: 192, z: -169, description: "五级试炼 地狱坐标" },
            { id: 2, x: 5141, y: 192, z: 2941, description: "三级试炼 地狱坐标" },
            { id: 3, x: 5235, y: 192, z: 3036, description: "三级试炼 地狱坐标" },
            { id: 4, x: 5427, y: 192, z: 3941, description: "四级试炼 地狱坐标" },
            { id: 5, x: 5532, y: 192, z: 4135, description: "四级试炼 地狱坐标" },
            { id: 6, x: -9882, y: 192, z: -1076, description: "五级试炼 地狱坐标" },
            { id: 7, x: -1097, y: 192, z: -1755, description: "五级试炼 地狱坐标 地狱离第8个200m" },
            { id: 8, x: -1156, y: 192, z: -1889, description: "五级试炼 地狱坐标" },
            { id: 9, x: 22, y: 192, z: -8477, description: "五级试炼 地狱坐标" },
            { id: 10, x: 728, y: 192, z: -1090, description: "五级试炼 地狱坐标" },
            { id: 11, x: 3020, y: 192, z: -1053, description: "五级试炼 地狱坐标" },
            { id: 12, x: 3644, y: 192, z: -1090, description: "五级试炼 地狱坐标" },
            { id: 13, x: 7008, y: 192, z: -7360, description: "五级试炼 地狱坐标 四个不详宝库" },


        ],
        server2: [
            { id: 1, x: 1307, y: 192, z: -572, description: "五级试炼 地狱坐标" },
            { id: 2, x: 1222, y: 192, z: -587, description: "五级试炼 地狱坐标" },
            { id: 3, x: 2325, y: 192, z: 147, description: "五级试炼 地狱坐标" },
            { id: 4, x: 4009, y: 192, z: -373, description: "五级试炼 地狱坐标" },
            { id: 5, x: -9990, y: 192, z: 3313, description: "三级试炼 地狱坐标" },
            { id: 6, x: -1370, y: 192, z: 7512, description: "五级试炼 地狱坐标" },
            { id: 7, x: -2195, y: 192, z: 3100, description: "五级试炼 地狱坐标" },
            { id: 8, x: -4996, y: 192, z: 5136, description: "五级试炼 地狱坐标" },
            { id: 9, x: -5100, y: 192, z: -5777, description: "五级试炼 地狱坐标" },
            { id: 10, x: -4957, y: 192, z: -5770, description: "五级试炼 地狱坐标" },
            { id: 11, x: -4756, y: 192, z: 6322, description: "五级试炼 地狱坐标" },
            { id: 12, x: -5382, y: 192, z: -10082, description: "五级试炼 地狱坐标" },
            { id: 13, x: -5384, y: 192, z: -9769, description: "五级试炼 地狱坐标" },
            { id: 14, x: -5367, y: 192, z: -7699, description: "五级试炼 地狱坐标" },
            { id: 15, x: -5385, y: 192, z: -5659, description: "五级试炼 地狱坐标" },
            { id: 16, x: -5378, y: 192, z: -4161, description: "五级试炼 地狱坐标" },
            { id: 17, x: -5375, y: 192, z: -3679, description: "五级试炼 地狱坐标" },
            { id: 18, x: -5575, y: 192, z: -1059, description: "五级试炼 地狱坐标" },
            { id: 19, x: -5599, y: 192, z: -956, description: "五级试炼 地狱坐标" },
            { id: 20, x: -5554, y: 192, z: -6662, description: "五级试炼 地狱坐标" },
            { id: 21, x: -5569, y: 192, z: -9972, description: "五级试炼 地狱坐标" },
            { id: 22, x: -5761, y: 192, z: -6394, description: "五级试炼 地狱坐标 大面积彩绘山脉" },
            { id: 23, x: -6074, y: 192, z: -3387, description: "五级试炼 地狱坐标" },
            { id: 24, x: -5995, y: 192, z: -3099, description: "五级试炼 地狱坐标" },
            { id: 25, x: -5963, y: 192, z: -4761, description: "五级试炼 地狱坐标" },
            { id: 26, x: -5997, y: 192, z: -9690, description: "五级试炼 地狱坐标" },
            { id: 27, x: -6275, y: 192, z: -9794, description: "五级试炼 地狱坐标" },
            { id: 28, x: 1804, y: 192, z: 4337, description: "地狱坐标 逐空空置域边上" },
            { id: 29, x: 1715, y: 192, z: 4503, description: "地狱坐标 逐空空置域边上" },
        
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
            { id: 1, x: 3319, y: 192, z: -996, description: "地狱坐标" },
            { id: 2, x: 942, y: 192, z: -3880, description: "地狱坐标" },
            { id: 3, x: -11380, y: 192, z: 10699, description: "地狱坐标" },

        ],
        server2: [
            { id: 1, x: -1685, y: 192, z: 4417, description: "地狱坐标" },
            { id: 2, x: 2591, y: 192, z: -9867, description: "地狱坐标" },
            { id: 3, x: 1544, y: 192, z: 4313, description: "地狱坐标 逐空空置域边上" },
        
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
            { id: 1, x: -1365, y: 192, z: 439, description: "地狱坐标" },
            { id: 2, x: -1139, y: 192, z: -1871, description: "地狱坐标" },
            { id: 3, x: -1222, y: 192, z: -1927, description: "地狱坐标" },
            { id: 4, x: -3017, y: 192, z: -9285, description: "地狱坐标" },
            { id: 5, x: -2949, y: 192, z: -9422, description: "地狱坐标" },
            { id: 6, x: 9799, y: 192, z: 7850, description: "地狱坐标" },

        ],
        server2: [
            { id: 1, x: -5819, y: 192, z: 1737, description: "地狱坐标" },
            { id: 2, x: -5390, y: 192, z: -3452, description: "地狱坐标" },
            { id: 3, x: -5604, y: 192, z: -783, description: "地狱坐标" },
            { id: 4, x: -5894, y: 192, z: -3018, description: "地狱坐标" },
            { id: 5, x: -6112, y: 192, z: -9645, description: "地狱坐标" },
        
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
            { id: 1, x: 0, y: 192, z: 0, description: "地狱坐标 主城边上" },
            { id: 2, x: -1191, y: 192, z: -1192, description: "地狱坐标 罗德岛边上" },
            { id: 3, x: 5611, y: 192, z: 2, description: "地狱坐标" },
            { id: 4, x: 5217, y: 192, z: 2816, description: "地狱坐标" },
            { id: 5, x: 4816, y: 192, z: 2799, description: "地狱坐标" },
            { id: 6, x: -1583, y: 192, z: -1585, description: "地狱坐标 罗德岛边上的边上" },
            { id: 7, x: -2386, y: 192, z: -2000, description: "地狱坐标 罗德岛边上的边上" },
            { id: 8, x: 4406, y: 192, z: 3603, description: "地狱坐标" },
            { id: 9, x: -8383, y: 192, z: -8382, description: "地狱坐标" },
            { id: 10, x: 7211, y: 192, z: -4383, description: "地狱坐标" },
            { id: 11, x: 2003, y: 192, z: 2001, description: "地狱坐标" },
            { id: 12, x: 5208, y: 192, z: -3986, description: "地狱坐标" },
            { id: 13, x: -3986, y: 192, z: -4390, description: "地狱坐标 铁锤边上" },
            { id: 14, x: -3586, y: 192, z: -4393, description: "地狱坐标 铁锤边上" },
            { id: 15, x: 812, y: 192, z: 1621, description: "地狱坐标" },
            { id: 16, x: 2411, y: 192, z: -1197, description: "地狱坐标" },
            { id: 17, x: 7599, y: 192, z: 5613, description: "地狱坐标" },
            { id: 18, x: -788, y: 192, z: -785, description: "地狱坐标" },
            { id: 19, x: -8009, y: 192, z: 5190, description: "地狱坐标" },
            { id: 20, x: 1614, y: 192, z: 4408, description: "地狱坐标" },
            { id: 21, x: -3194, y: 192, z: -4003, description: "地狱坐标 铁锤边上" },
            { id: 22, x: 799, y: 192, z: -2781, description: "地狱坐标" },
            { id: 23, x: -4383, y: 192, z: 6004, description: "地狱坐标" },
            { id: 24, x: 1205, y: 192, z: -3197, description: "地狱坐标" },
            { id: 25, x: 4416, y: 192, z: 2008, description: "地狱坐标" },
            { id: 26, x: -1189, y: 192, z: -1591, description: "地狱坐标 罗德岛边上"},
            { id: 27, x: -3188, y: 192, z: -9190, description: "地狱坐标" },
            { id: 28, x: -6784, y: 192, z: -9193, description: "地狱坐标" },
            { id: 29, x: -6786, y: 192, z: -8793, description: "地狱坐标" }
            

        ],
        server2: [
            { id: 1, x: 4009, y: 192, z: -4389, description: "地狱坐标" },
            { id: 2, x: 3203, y: 192, z: -5192, description: "地狱坐标" },
            { id: 3, x: 2805, y: 192, z: -5194, description: "地狱坐标" },
            { id: 4, x: 1609, y: 192, z: -4000, description: "地狱坐标" },
            { id: 5, x: -2001, y: 192, z: 1215, description: "地狱坐标" },
            { id: 6, x: 2390, y: 192, z: -387, description: "地狱坐标" },
            { id: 7, x: 0, y: 192, z: -5624, description: "地狱坐标 边上有海底城市" },
            { id: 8, x: 407, y: 192, z: -3992, description: "地狱坐标" },
            { id: 9, x: 2818, y: 192, z: -2385, description: "地狱坐标" },
            { id: 10, x: 2808, y: 192, z: -3189, description: "地狱坐标" },
            { id: 11, x: 3986, y: 192, z: -3203, description: "地狱坐标" },
            { id: 12, x: 5614, y: 192, z: 1602, description: "地狱坐标" },
            { id: 13, x: 7, y: 192, z: 5191, description: "地狱坐标" },
            { id: 14, x: -406, y: 192, z: -6019, description: "地狱坐标" },
            { id: 15, x: 7, y: 192, z: 3217, description: "地狱坐标" },
            { id: 16, x: 3602, y: 192, z: -382, description: "地狱坐标" },
            { id: 17, x: 4404, y: 192, z: -395, description: "地狱坐标" },
            { id: 18, x: -2400, y: 192, z: 4405, description: "地狱坐标" },
            { id: 19, x: -387, y: 192, z: -7598, description: "地狱坐标" },
            { id: 20, x: -1587, y: 192, z: 7609, description: "地狱坐标" },
            { id: 21, x: -981, y: 192, z: 2818, description: "地狱坐标" },
            { id: 22, x: -5184, y: 192, z: -3586, description: "地狱坐标" },
            { id: 23, x: -5197, y: 192, z: -6790, description: "地狱坐标 地狱离第24个400m" },
            { id: 24, x: -5184, y: 192, z: -7184, description: "地狱坐标" },
            { id: 25, x: -5585, y: 192, z: -1981, description: "地狱坐标" },
            { id: 26, x: -5582, y: 192, z: -3994, description: "地狱坐标" },
            { id: 27, x: -5580, y: 192, z: -4397, description: "地狱坐标" },
            { id: 28, x: -5985, y: 192, z: -9993, description: "地狱坐标" },
            { id: 29, x: 4004, y: 192, z: -1997, description: "地狱坐标" },
            { id: 30, x: 4013, y: 192, z: -2407, description: "地狱坐标" },
            { id: 31, x: 4005, y: 192, z: -2792, description: "地狱坐标" },
            { id: 32, x: 10532, y: 192, z: -9988, description: "地狱坐标" },
            { id: 33, x: 7604, y: 192, z: -7600, description: "地狱坐标" },
        ]
    }
},


{
    id: 14,
    name: "剧毒魔窟",
    type: "遗迹",
    description: "丛林深处的回响",
    image: 15,
    icon: "fa-fort-awesome",
    coordinates: {
        server1: [
            { id: 1, x: 2014, y: 192, z: -1086, description: "地狱坐标" },
            { id: 2, x: -5042, y: 192, z: 2441, description: "地狱坐标" },
            { id: 3, x: -430, y: 192, z: 2336, description: "地狱坐标" },

        ],
        server2: [
            { id: 1, x: 4220, y: 192, z: -5666, description: "地狱坐标" },
            { id: 2, x: -1813, y: 192, z: 2630, description: "地狱坐标" },
            { id: 3, x: 1646, y: 192, z: 516, description: "地狱坐标" },
            { id: 4, x: -618, y: 192, z: 9504, description: "地狱坐标" },
            { id: 5, x: -7160, y: 192, z: -9536, description: "地狱坐标" },
            { id: 6, x: 9801, y: 192, z: 7258, description: "地狱坐标" },
            { id: 7, x: -7160, y: 192, z: -9536, description: "地狱坐标" },
            { id: 8, x: -6022, y: 192, z: -5086, description: "地狱坐标" },
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
            { id: 1, x: 5575, y: 192, z: -2099, description: "地狱坐标" },
            { id: 2, x: -236, y: 192, z: -5662, description: "地狱坐标" },
            { id: 3, x: 8742, y: 192, z: -6060, description: "地狱坐标" },
            { id: 4, x: 5863, y: 192, z: -3558, description: "地狱坐标" },

        ],
        server2: [
            { id: 1, x: 4324, y: 192, z: -8965, description: "地狱坐标" },
            { id: 2, x: 9425, y: 192, z: 8594, description: "地狱坐标" },
            { id: 3, x: 8891, y: 192, z: 9624, description: "地狱坐标" },
            { id: 4, x: 69, y: 192, z: 2137, description: "地狱坐标" },
            { id: 5, x: -5403, y: 192, z: -8721, description: "地狱坐标" },
            { id: 6, x: -5473, y: 192, z: -8663, description: "地狱坐标" },
            { id: 7, x: -5477, y: 192, z: -8615, description: "地狱坐标" },
            { id: 8, x: -5301, y: 192, z: -162, description: "地狱坐标" },
        
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


        ],
        server2: [
            { id: 1, x: -8590, y: 192, z: -5230, description: "地狱坐标" },
            { id: 2, x: 1795, y: 192, z: 520, description: "地狱坐标" },

        
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

