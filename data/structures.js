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
            { id: 1, x: -3135, y: 192, z: 6528, description: "暗月" },
            { id: 2, x: 2945, y: 192, z: -2297, description: "蒂蒂" },
            { id: 3, x: 6999, y: 192, z: 12799, description: "爱酱" },
            { id: 4, x: 8015, y: 192, z: 12909, description: "爱酱" },
            { id: 5, x: 7288, y: 192, z: 8255, description: "DaiMao" },
            { id: 6, x: -4098, y: 192, z: 4297, description: "粉毛" },
            { id: 7, x: -8458, y: 192, z: -995, description: "大毛" },
            { id: 8, x: -3985, y: 192, z: -6349, description: "暗月" },
            { id: 9, x: 423, y: 192, z: -4277, description: "不知了虫" },

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
        { id: 1, x: -2871, y: 192, z: 3141, description: "柚子社" },
        { id: 2, x: 4540, y: 192, z: 208, description: "DDDH66" },
        { id: 3, x: 1539, y: 192, z: -7281, description: "小江" },
        

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
        { id: 1, x: 9628, y: 192, z: 8814, description: "爱酱" },
        { id: 2, x: 9634, y: 192, z: 7762, description: "爱酱" },
        { id: 3, x: -3784, y: 192, z: -3774, description: "爱酱" },
        { id: 4, x: 9634, y: 192, z: -4756, description: "爱酱" },
        

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
            { id: 1, x: 0, y: 192, z: 0, description: "" },

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



        ],
        server2: [


        
        ]
    }
},


{
    id: 17,
    name: "猪灵城楼",
    type: "遗迹",
    description: "猪灵城楼",
    image: 18,
    icon: "fa-fort-awesome",
    coordinates: {
        server1: [

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

        ],
        server2: [

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

