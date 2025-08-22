// 渲染博客帖子
function renderBlogPosts() {
    const container = document.getElementById('blog-posts-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    blogPosts.forEach(post => {
        // 根据分类选择对应的样式类
        let categoryClass = 'category-other'; // 默认样式
        if (post.category === '合影留念') categoryClass = 'category-1';
        else if (post.category === '技术攻略') categoryClass = 'category-2';
        else if (post.category === '新闻记录') categoryClass = 'category-3';
        // 可以继续添加更多分类的判断
        
        const postCard = `
            <div class="bg-white rounded-xl shadow-md overflow-hidden blog-post-card" data-post-id="${post.id}">
                <div class="relative h-48">
                    
                <div class="structure-image w-full h-full bg-cover bg-center" 
                    style="background-image: url('images/posts/${post.image}.png')">
                    <img src="images/posts/${post.image}.png" class="hidden" onError="this.parentElement.style.backgroundImage='url(images/posts/default-post.png)'">
                    
                    <!-- 分类标签 -->
                    <!-- 这里使用动态样式类 -->
                    <div class="absolute top-3 left-3 ${categoryClass} text-xs px-2 py-1 rounded">
                        ${post.category}
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
        `;
        container.innerHTML += postCard;
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
