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
        if (e.key === 'Escape') {
            if (!document.getElementById ('chartModal').classList.contains ('hidden')) {
                hideLargeChart ();
            }
            if (!document.getElementById ('postDetailModal').classList.contains ('hidden')) {
                closePostDetail ();
            }
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

    // 博客页面相关事件
    document.querySelectorAll('.blog-nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            switchToBlogPage();
        });
    });

    // 帖子详情模态框事件
    document.getElementById('closePostDetailModal').addEventListener('click', closePostDetail);
    
    document.getElementById('postDetailModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closePostDetail();
        }
    });

    // 主页面导航链接事件
    document.querySelectorAll('.main-nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果当前在博客页面，则先切换到主页面
            if (!document.getElementById('blog-page').classList.contains('hidden')) {
                e.preventDefault();
                switchToMainPage();
                
                // 延迟执行原链接行为，确保页面已切换
                setTimeout(() => {
                    const targetId = this.getAttribute('href');
                    if (targetId && targetId !== '#') {
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }, 100);
            }
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
