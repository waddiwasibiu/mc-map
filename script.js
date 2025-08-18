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
            { id: 1, x: -9164, y: 192, z: -2182, description: "地狱坐标" },
            { id: 2, x: -5782, y: 192, z: 3527, description: "地狱坐标" },
            { id: 3, x: -3002, y: 192, z: -9852, description: "地狱坐标" },
            { id: 4, x: 4833, y: 192, z: 870, description: "地狱坐标" },
            { id: 5, x: 1820, y: 192, z: -57, description: "地狱坐标" },
            { id: 6, x: 8845, y: 192, z: 8118, description: "地狱坐标" },

        ],
        server2: [
            { id: 1, x: 6562, y: 192, z: -9506, description: "地狱坐标" },
            { id: 2, x: -9795, y: 192, z: 3234, description: "地狱坐标" },
            { id: 3, x: 2305, y: 192, z: 8814, description: "地狱坐标" },
            { id: 4, x: -1689, y: 192, z: 8335, description: "地狱坐标" },
        
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


        ],
        server2: [
            { id: 1, x: 1909, y: 192, z: 4929, description: "0靶场2女巫" },
            { id: 2, x: 1188, y: 192, z: -4692, description: "2靶场2女巫" },
            { id: 3, x: -4691, y: 192, z: 3531, description: "0靶场3女巫" },
            { id: 4, x: 4125, y: 192, z: -8897, description: "4靶场0女巫" },
            { id: 5, x: -2581, y: 192, z: 6776, description: "2靶场0女巫" },
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


        ],
        server2: [
            { id: 1, x: 23, y: 192, z: 51, description: "地狱坐标" },
            { id: 2, x: 4386, y: 192, z: -3594, description: "地狱坐标" },
            { id: 3, x: 3680, y: 192, z: -8626, description: "地狱坐标" },
            { id: 4, x: 2929, y: 192, z: 3646, description: "地狱坐标" },
            { id: 5, x: 5107, y: 192, z: 35, description: "地狱坐标" },
            { id: 6, x: 46, y: 192, z: 9412, description: "地狱坐标" },
            { id: 7, x: -2325, y: 192, z: 9622, description: "地狱坐标" },
            { id: 8, x: -5530, y: 192, z: 9661, description: "地狱坐标" },
            { id: 9, x: 7951, y: 192, z: -6454, description: "地狱坐标" },
            { id: 10, x: 9372, y: 192, z: -9305, description: "地狱坐标 疑似被独占(?)" },
            { id: 11, x: 5, y: 192, z: 5096, description: "地狱坐标" },
            { id: 12, x: -2123, y: 192, z: -2878, description: "地狱坐标" },

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


        ],
        server2: [
            { id: 1, x: 1307, y: 192, z: -572, description: "五级试炼 地狱坐标" },
            { id: 2, x: 1222, y: 192, z: -587, description: "五级试炼 地狱坐标" },
            { id: 3, x: 2325, y: 192, z: 147, description: "五级试炼 地狱坐标" },
            { id: 4, x: 4009, y: 192, z: -373, description: "五级试炼 地狱坐标" },
            { id: 5, x: -9990, y: 192, z: 3313, description: "三级试炼 地狱坐标" },
            { id: 6, x: -1370, y: 192, z: 7512, description: "五级试炼 地狱坐标" },
        
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

        ],
        server2: [
            { id: 1, x: -1685, y: 192, z: 4417, description: "地狱坐标" },
        
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

        ],
        server2: [
            { id: 1, x: 0, y: 192, z: 0, description: "地狱坐标" },
        
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
            { id: 15, x: 1218, y: 192, z: 807, description: "地狱坐标" },
            { id: 16, x: 2411, y: 192, z: -1197, description: "地狱坐标" },
            

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
            { id: 11, x: 2817, y: 192, z: -2385, description: "地狱坐标" },
            { id: 12, x: 5614, y: 192, z: 1602, description: "地狱坐标" },
            { id: 13, x: 7, y: 192, z: 5191, description: "地狱坐标" },
            { id: 14, x: -406, y: 192, z: -6019, description: "地狱坐标" },
            { id: 15, x: 7, y: 192, z: 3217, description: "地狱坐标" },
            { id: 16, x: 3602, y: 192, z: -382, description: "地狱坐标" },
            { id: 17, x: 4404, y: 192, z: -395, description: "地狱坐标" },
            { id: 18, x: -2400, y: 192, z: 4405, description: "地狱坐标" },
            { id: 19, x: -387, y: 192, z: -7598, description: "地狱坐标" },
            { id: 20, x: -1587, y: 192, z: 7609, description: "地狱坐标" },
        
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

        ],
        server2: [
            { id: 1, x: 4220, y: 192, z: -5666, description: "地狱坐标" },
            { id: 2, x: -1813, y: 192, z: 2630, description: "地狱坐标" },
            { id: 3, x: 1646, y: 192, z: 516, description: "地狱坐标" },
            { id: 4, x: -618, y: 192, z: 9504, description: "地狱坐标" },
        
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
    const server1Coordinates = structure.coordinates.server1 || [];
    const server2Coordinates = structure.coordinates.server2 || [];
    const totalCoordinates = server1Coordinates.length + server2Coordinates.length;
    const coordinates = structure.coordinates[server] || [];
    
    // 确保图片路径安全处理
    const imageUrl = structure.image 
        ? `${structure.image}.png` 
        : 'default-structure.png'; // 添加默认图片
    
    return `
        <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover border border-gray-100 mb-6" 
             data-structure="${structure.id}" data-server="${server}">
            <!-- 结构图片展示区 -->
            <div class="relative">
                <div class="structure-image w-full h-48 bg-cover bg-center transition-transform duration-500 hover:scale-105" 
                     style="background-image: url('${imageUrl}')">
                    <!-- 图片加载失败处理 -->
                    <img src="${imageUrl}" class="hidden" onError="this.parentElement.style.backgroundImage='url(default-structure.png)'">
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
                                <div class="text-xs text-gray-500">
                                    <i class="fa fa-user mr-1"></i> 匿名
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
                    <button class="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors flex items-center show-add-form-btn" 
                            data-structure="${structure.id}" data-server="${server}">
                        <i class="fa fa-plus mr-2"></i> 添加坐标
                    </button>
                </div>
            </div>
            
            <!-- 底部信息栏 -->
            <div class="bg-gray-50 p-4 flex justify-between items-center border-t border-gray-100">
                <span class="text-xs text-gray-500">
                    <i class="fa fa-clock-o mr-1"></i> ${new Date().toLocaleDateString('zh-CN')}
                </span>
                <button class="text-red-500 hover:text-red-700 text-sm delete-structure-btn transition-colors" 
                        data-id="${structure.id}">
                    <i class="fa fa-trash mr-1"></i> 删除结构
                </button>
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

//
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
        
        // 调试信息 - 可以取消注释查看计算过程
        // console.log(`标签ID: ${mesh.userData.id}, 计算位置: (${x}, ${y}), 容器尺寸: (${containerWidth}, ${containerHeight})`);
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

    // 3D坐标图控制按钮
    document.getElementById('reset-view').addEventListener('click', () => {
        camera.position.set(0, 10000, 20000);
        camera.lookAt(0, 0, 0);
        controls.reset();
    });

    document.getElementById('show-axes').addEventListener('click', () => {
        showAxes = !showAxes;
        axesHelper.visible = showAxes;
    });

    document.getElementById('show-labels').addEventListener('click', () => {
        showLabels = !showLabels;
        labels.forEach(label => {
            label.element.style.opacity = showLabels ? '1' : '0';
        });
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

// 页面加载完成后初始化

document.addEventListener('DOMContentLoaded', function() {
    // 检查必要的DOM元素是否存在
    const requiredElements = [
        'server1Content', 
        'server2Content', 
        'searchInput', 
        'sortSelect',
        'canvas-container'
    ];
    
    requiredElements.forEach(id => {
        if (!document.getElementById(id)) {
            console.warn(`缺少必要的DOM元素: ${id}，部分功能可能无法正常工作`);
        }
    });

    // 初始化3D场景
    init3DScene();
    
    // 渲染所有结构
    renderAllStructures();
    
    // 默认显示一区内容
    switchServer('server1');
    
    document.addEventListener('DOMContentLoaded', function() {
    // 专门针对导航栏中的锚点链接进行事件绑定
    const navLinks = document.querySelectorAll('header a[href^="#"]');
    
    // 为每个导航链接添加事件监听器
    navLinks.forEach(anchor => {
        // 先移除可能存在的旧监听器，避免重复绑定
        const newAnchor = anchor.cloneNode(true);
        anchor.parentNode.replaceChild(newAnchor, anchor);
        
        newAnchor.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('href');
            console.log('导航点击:', targetId); // 调试信息
            
            // 确保目标ID有效
            if (targetId === '#' || !targetId) return;
            
            // 查找目标元素
            const targetElement = document.querySelector(targetId);
            if (!targetElement) {
                console.error(`未找到目标元素: ${targetId}`);
                showNotification(`无法找到目标区域: ${targetId}`, 'error');
                return;
            }
            
            // 关闭移动菜单（如果打开）
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            // 计算滚动目标位置
            const header = document.querySelector('header');
            if (!header) {
                console.error('未找到header元素');
                return;
            }
            
            const headerHeight = header.offsetHeight;
            const targetRect = targetElement.getBoundingClientRect();
            const targetPosition = window.pageYOffset + targetRect.top - headerHeight;
            
            console.log('滚动目标位置:', targetPosition); // 调试信息
            
            // 平滑滚动实现
            const scrollToTarget = () => {
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 800; // 滚动持续时间
                let startTime = null;
                
                const animation = currentTime => {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    // 使用缓动函数使滚动更自然
                    const easeProgress = progress < 0.5 
                        ? 4 * progress * progress * progress 
                        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                    
                    window.scrollTo(0, startPosition + distance * easeProgress);
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    } else {
                        // 滚动完成后
                        window.scrollTo(0, targetPosition);
                        
                        // 对于3D坐标区域，额外处理确保视图正确
                        if (targetId === '#3d-coordinates') {
                            console.log('滚动到3D坐标区域完成'); // 调试信息
                            
                            // 确保3D场景已初始化
                            if (typeof scene === 'undefined' || !camera || !controls) {
                                console.error('3D场景尚未初始化');
                                return;
                            }
                            
                            // 重置3D视图，确保用户看到完整场景
                            camera.position.set(0, 10000, 20000);
                            camera.lookAt(0, 0, 0);
                            controls.reset();
                            
                            // 触发窗口大小调整，确保3D视图正确渲染
                            setTimeout(() => {
                                window.dispatchEvent(new Event('resize'));
                            }, 100);
                        }
                    }
                };
                
                requestAnimationFrame(animation);
            };
            
            // 执行滚动
            scrollToTarget();
        }, { capture: true });
    });
});
// 初始化结构筛选器
    initStructureFilter();
    
    // 当结构数据变化时（如添加/删除结构），更新筛选器选项
    // 可以在添加/删除结构的函数中调用此方法
    const originalAddStructure = addStructure;
    addStructure = function(structure) {
        const result = originalAddStructure(structure);
        initStructureFilter(); // 更新筛选器
        return result;
    };
    
    const originalDeleteStructure = deleteStructure;
    deleteStructure = function(structureId) {
        originalDeleteStructure(structureId);
        initStructureFilter(); // 更新筛选器
    };
});
