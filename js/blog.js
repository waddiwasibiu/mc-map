// 统一处理所有导航链接点击事件
function setupNavigation() {
    // 为所有导航链接添加点击事件
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 统一阻止默认行为
            
            const targetHash = this.getAttribute('href').substring(1); // 获取#后面的部分
            
            // 根据目标哈希切换到对应页面
            if (targetHash === 'blog') {
                switchToBlogPage();
            } else {
                switchToMainPage();
            }
            
            // 更新URL哈希
            window.location.hash = targetHash;
        });
    });
}

// 页面加载完成后初始化导航
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    
    // 检查初始URL哈希，决定显示哪个页面
    if (window.location.hash === '#blog') {
        switchToBlogPage();
    } else {
        switchToMainPage();
    }
});

// 渲染博客帖子
// 修改blog.js中的renderBlogPosts函数，实现带分类标题的分区展示
function renderBlogPosts() {
    const container = document.getElementById('blog-posts-container');
    if (!container) return;
    
    // 清空容器并修改为适合全宽分类展示的样式
    container.innerHTML = '';
    container.className = 'space-y-12'; // 分类之间的间距
    
    // 定义分类顺序及对应的样式类（与CSS中的bg-category-*对应）
    const categories = [
        { name: '技术攻略', class: 'bg-category-2' },
        { name: '合影留念', class: 'bg-category-1' },
        { name: '新闻记录', class: 'bg-category-3' }
    ];
    
    // 按分类分组帖子
    const postsByCategory = {};
    blogPosts.forEach(post => {
        if (!postsByCategory[post.category]) {
            postsByCategory[post.category] = [];
        }
        postsByCategory[post.category].push(post);
    });
    
    // 按指定顺序渲染每个分类
    categories.forEach(category => {
        const posts = postsByCategory[category.name] || [];
        if (posts.length === 0) return;
        
        // 创建分类区域（全宽）
        const categorySection = document.createElement('div');
        categorySection.className = 'w-full'; // 宽度为网页宽度
        
        // 分类标题（使用对应背景色）
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = `text-xl md:text-2xl font-bold text-white px-6 py-3 mb-6 ${category.class}`;
        categoryTitle.textContent = category.name;
        categorySection.appendChild(categoryTitle);
        
        // 帖子网格容器（保持原有样式）
        const postsGrid = document.createElement('div');
        postsGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
        
        // 添加该分类下的所有帖子（保持原有卡片样式）
        posts.forEach(post => {
            // 根据分类选择对应的标签样式
            let tagClass = 'category-other';
            if (post.category === '技术攻略') tagClass = 'category-2';
            else if (post.category === '合影留念') tagClass = 'category-1';
            else if (post.category === '新闻记录') tagClass = 'category-3';
            
            const postCard = `
                <div class="bg-white rounded-xl shadow-md overflow-hidden blog-post-card" data-post-id="${post.id}">
                    <div class="relative h-48">
                        <div class="structure-image w-full h-full bg-cover bg-center" 
                            style="background-image: url('images/posts/${post.image}.png')">
                            <img src="images/posts/${post.image}.png" class="hidden" onError="this.parentElement.style.backgroundImage='url(images/posts/default-post.png)'">
                            
                            <!-- 分类标签 -->
                            <div class="absolute top-3 left-3 ${tagClass} text-xs px-2 py-1 rounded">
                                ${post.category}
                                <br>
                                <span class="font-normal opacity-90">${post.content.substring(0, 15)}${post.content.length > 15 ? '...' : ''}</span>
                            </div>
                            
                            <!-- 标题显示在图片上 -->
                            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                <h3 class="text-white font-bold text-sm md:text-base line-clamp-2">${post.title}</h3>
                            </div>
                        </div>
                        <div class="p-5">
                            <h3 class="text-xl font-bold text-dark mb-2">${post.title}</h3>
                            <p class="text-gray-600 text-sm mb-4 line-clamp-3">${post.content}</p>
                            <div class="flex justify-between items-center text-xs text-gray-500">
                                <span><i class="fa fa-user mr-1"></i> ${post.author}</span>
                                <span><i class="fa fa-calendar mr-1"></i> ${post.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            postsGrid.innerHTML += postCard;
        });
        
        categorySection.appendChild(postsGrid);
        container.appendChild(categorySection);
    });
    
    // 为帖子卡片添加点击事件
    document.querySelectorAll('.blog-post-card').forEach(card => {
        card.addEventListener('click', function() {
            const postId = parseInt(this.getAttribute('data-post-id'));
            openPostDetail(postId);
        });
    });
}

// 打开帖子详情
function openPostDetail(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    // 填充详情内容
    document.getElementById('postDetailTitle').textContent = post.title;
    
    // 修改图片设置方式，确保完整显示
    const imgContainer = document.getElementById('postDetailImage');
    imgContainer.style.backgroundImage = `url(images/posts/${post.image}.png)`;
    
    // 添加图片加载完成后调整容器高度的逻辑
    const tempImg = new Image();
    tempImg.src = `images/posts/${post.image}.png`;
    tempImg.onload = function() {
        // 根据图片比例设置容器高度
        const containerWidth = imgContainer.offsetWidth;
        const imgRatio = this.height / this.width;
        imgContainer.style.height = `${containerWidth * imgRatio}px`;
    };
    
    // 错误处理，使用默认图片
    tempImg.onerror = function() {
        imgContainer.style.backgroundImage = 'url(images/posts/default-post.png)';
        const defaultImg = new Image();
        defaultImg.src = 'images/posts/default-post.png';
        defaultImg.onload = function() {
            const containerWidth = imgContainer.offsetWidth;
            const imgRatio = this.height / this.width;
            imgContainer.style.height = `${containerWidth * imgRatio}px`;
        };
    };

    document.getElementById('postDetailAuthor').textContent = post.author;
    document.getElementById('postDetailDate').textContent = post.date;
    document.getElementById('postDetailCategory').textContent = post.category;
    document.getElementById('postDetailContent').innerHTML = post.fullContent;

    // 显示模态框
    document.getElementById('postDetailModal').classList.remove('hidden');
    document.getElementById('postDetailModal').classList.add('flex');
    document.body.style.overflow = 'hidden'; // 防止背景滚动
}

// 关闭帖子详情
function closePostDetail() {
    document.getElementById('postDetailModal').classList.add('hidden');
    document.getElementById('postDetailModal').classList.remove('flex');
    document.body.style.overflow = ''; // 恢复背景滚动
}

// 切换到博客页面
function switchToBlogPage() {
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('about').classList.add('hidden');
    document.getElementById('comments').classList.add('hidden');
    document.getElementById('blog-page').classList.remove('hidden');
    document.getElementById('blog-page').classList.add('container', 'mx-auto', 'px-4', 'pt-24', 'pb-16');
    
    // 渲染博客帖子
    renderBlogPosts();
    
    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 切换到主页面
function switchToMainPage() {
    document.getElementById('blog-page').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    document.getElementById('about').classList.remove('hidden');
    document.getElementById('comments').classList.remove('hidden');
    
    // 滚动到顶部
    window.scrollTo(0, 0);
}
