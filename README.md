# mc-map
# https://waddiwasibiu.github.io/mc-map/


├── index.html              # 主页面HTML结构

├── posts.html              # 第二页面HTML结构

├── data/

    ├── structures.js       # 结构数据定义和存储操作

    └── blog-posts.js       # 博客帖子数据定义

├── components/

    ├── header.html       # 页面首部组件

    ├── footer.html       # 页面尾部组件

└── js/

    ├── coordinates.js      # 坐标处理和3D可视化功能
    
    ├── blog.js             # 博客帖子渲染和交互功能
    
    └── main.js             # 主程序初始化和事件绑定

所有涉及 DOM 元素操作的代码都通过 waitForElement 包裹，确保元素存在后再执行操作
