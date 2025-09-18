// 组件加载工具函数
const ComponentLoader = {
    // 加载组件并插入到指定容器
    load: async function(containerId, componentPath) {
        try {
            const container = document.getElementById(containerId);
            if (!container) {
                console.error(`容器元素 #${containerId} 不存在`);
                return false;
            }
            
            container.innerHTML = '<div class="loading py-8 text-center text-gray-500">加载中...</div>';
            const response = await fetch(componentPath);
            
            if (!response.ok) {
                throw new Error(`加载组件失败: ${response.statusText}`);
            }
            
            const html = await response.text();
            container.innerHTML = html;
            
            // 页脚加载完成后检查是否需要滚动到评论区
            if (containerId === 'footer-container') {
                scrollToCommentsIfNeeded();
                if (window.Gitalk && typeof initGitalk === 'function') {
                    initGitalk();
                }
            }
            
            return true;
        } catch (error) {
            console.error('组件加载错误:', error);
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `<div class="error py-8 text-center text-red-500">无法加载组件: ${error.message}</div>`;
            }
            return false;
        }
    },
    
    loadMultiple: async function(components) {
        for (const component of components) {
            await this.load(component.containerId, component.path);
        }
        return true;
    }
};

// 检查URL中是否有评论区锚点，如果有则滚动到评论区
function scrollToCommentsIfNeeded() {
    if (window.location.hash === '#comments') {
        setTimeout(() => {
            const commentsElement = document.getElementById('comments');
            if (commentsElement) {
                // 计算导航栏高度，确保滚动位置正确
                const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                const targetPosition = commentsElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }, 500); // 短暂延迟确保组件已完全加载
    }
}




// 移动端菜单切换逻辑
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            // 切换菜单显示状态
            mobileMenu.classList.toggle('hidden');
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const componentsToLoad = [
        {containerId: 'header-container', path: 'components/header.html'},
        {containerId: 'footer-container', path: 'components/footer.html'}
    ];
    
    ComponentLoader.loadMultiple(componentsToLoad)
        .then(success => {
            console.log('组件加载完成');
            
            if (typeof setupNavigation === 'function') {
                setupNavigation();
            }
            if (typeof bindEvents === 'function') {
                bindEvents();
            }
            
            if (window.location.pathname.endsWith('posts.html') && typeof renderBlogPosts === 'function') {
                renderBlogPosts();
            }
        });
});
    

// 页面加载完成后初始化组件
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否支持Fetch API
    if (!window.fetch) {
        console.error('浏览器不支持Fetch API，无法加载组件');
        // 降级处理 - 使用XMLHttpRequest加载
        loadComponentsWithXHR();
        return;
    }
    
    // 确定需要加载的组件
    const componentsToLoad = [
        {containerId: 'header-container', path: 'components/header.html'},
        {containerId: 'footer-container', path: 'components/footer.html'}
    ];
    
    // 加载组件
    ComponentLoader.loadMultiple(componentsToLoad)
        .then(results => {
            console.log('组件加载完成', results);
            
            // 组件加载完成后初始化事件绑定
            if (typeof setupNavigation === 'function') {
                setupNavigation();
            }
            if (typeof bindEvents === 'function') {
                bindEvents();
            }
            
            // 如果是帖子页面，渲染帖子内容
            if (window.location.pathname.endsWith('posts.html') && typeof renderBlogPosts === 'function') {
                renderBlogPosts();
            }
        });
});

// 降级方案：使用XMLHttpRequest加载组件
function loadComponentsWithXHR() {
    const components = [
        {containerId: 'header-container', path: 'components/header.html'},
        {containerId: 'footer-container', path: 'components/footer.html'}
    ];
    
    components.forEach(({containerId, path}) => {
        const xhr = new XMLHttpRequest();
        const container = document.getElementById(containerId);
        
        if (!container) return;

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                container.innerHTML = xhr.responseText;
                
                // 确保元素加载后再初始化事件
                if (typeof setupNavigation === 'function') {
                    setupNavigation();
                }
                if (typeof bindEvents === 'function') {
                    bindEvents(); // 现在bindEvents内部使用waitForElement确保元素存在
                }
                
                // 组件加载完成后调用移动端菜单设置函数
                if (typeof setupMobileMenu === 'function') {
                    setupMobileMenu();
                }
                
                if (containerId === 'footer-container' && typeof initVisitCounter === 'function') {
                    initVisitCounter();
                }
            }
        };
        
        xhr.open('GET', path, true);
        xhr.send();
    });
}
