// 渲染博客帖子
function renderBlogPosts() {
    const container = document.getElementById('blog-posts-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    blogPosts.forEach(post => {
        const postCard = `
            <div class="bg-white rounded-xl shadow-md overflow-hidden blog-post-card" data-post-id="${post.id}">
                <div class="relative h-48">
                    
                <div class="structure-image w-full h-full bg-cover bg-center" 
                    style="background-image: url('images/posts/${post.image}.png')">
                    <img src="images/posts/${post.image}.png" class="hidden" onError="this.parentElement.style.backgroundImage='url(images/posts/default-post.png)'">
                    <div class="absolute top-3 left-3 bg-primary/90 text-white text-xs px-2 py-1 rounded">
                        ${post.category}
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
    document.getElementById('postDetailImage').style.backgroundImage = `url(images/posts/${post.image}.png)`;
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
