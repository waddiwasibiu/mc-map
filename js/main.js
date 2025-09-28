/**
 * 重试获取元素直到存在
 * @param {string} selector - 元素选择器（支持id、class等）
 * @param {Function} callback - 元素找到后的回调函数
 * @param {number} maxRetries - 最大重试次数（默认20次）
 * @param {number} interval - 重试间隔（默认300ms）
 */
function waitForElement(selector, callback, maxRetries = 20, interval = 300) {
    let retries = 0;
    
    const check = () => {
        const element = document.querySelector(selector);
        if (element) {
            callback(element);
            return;
        }
        
        if (retries < maxRetries) {
            retries++;
            console.log(`等待元素 ${selector}...（${retries}/${maxRetries}）`);
            setTimeout(check, interval);
        } else {
            console.error(`达到最大重试次数，未找到元素：${selector}`);
        }
    };
    
    check();
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


// 添加访问次数统计功能
function initVisitCounter() {
    const storedCount = localStorage.getItem('visitCount');
    let count = storedCount ? parseInt(storedCount) : 0;
    count += 1;
    localStorage.setItem('visitCount', count.toString());
    
    waitForElement('#visitCount', (countElement) => {
        countElement.textContent = count;
    });
}

// 绑定事件
function bindEvents() {
    // 服务器切换
    waitForElement('#serverSelector', (serverSelector) => {
        serverSelector.addEventListener('change', function() {
            switchServer(this.value);
        });
    });

    // 移动端菜单切换（解决main.js:138错误）
    waitForElement('#mobileMenuBtn', (mobileMenuBtn) => {
        mobileMenuBtn.addEventListener('click', () => {
            waitForElement('#mobileMenu', (mobileMenu) => {
                mobileMenu.classList.toggle('hidden');
            });
        });
    });

    // 处理坐标列表展开/收起按钮事件
    waitForElement('.toggle-coordinates-btn', () => {
        document.querySelectorAll('.toggle-coordinates-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const server = this.getAttribute('data-server');
                const structureId = this.getAttribute('data-structure');
                toggleCoordinates(server, structureId);
            });
        });
    }, 30, 200);

    // 坐标分布图点击事件（放大）
    waitForElement('.chart-container', () => {
        document.querySelectorAll('.chart-container').forEach(container => {
            container.addEventListener('click', function() {
                const server = this.getAttribute('data-server');
                const structureId = parseInt(this.getAttribute('data-structure'));
                showLargeChart(server, structureId);
            });
        });
    }, 30, 200);

    // 关闭模态框按钮
    waitForElement('#closeChartModal', (closeBtn) => {
        closeBtn.addEventListener('click', hideLargeChart);
    });

    // 点击模态框背景关闭
    waitForElement('#chartModal', (modal) => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                hideLargeChart();
            }
        });
    });

    // 搜索功能
    waitForElement('#searchInput', (searchInput) => {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            document.querySelectorAll('.card-hover').forEach(structure => {
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
    });

    // 排序功能
    waitForElement('#sortSelect', (sortSelect) => {
        sortSelect.addEventListener('change', function() {
            const sortType = this.value;
            const structures = loadStructures();
            let sortedStructures = [...structures];

            switch (sortType) {
                case 'nameAsc':
                    sortedStructures.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'nameDesc':
                    sortedStructures.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'type':
                    sortedStructures.sort((a, b) => a.type.localeCompare(b.type));
                    break;
                case 'coordinateCount':
                    waitForElement('#serverSelector', (serverSelector) => {
                        const currentServer = serverSelector.value;
                        sortedStructures.sort((a, b) => {
                            const aCount = (a.coordinates[currentServer] || []).length;
                            const bCount = (b.coordinates[currentServer] || []).length;
                            return bCount - aCount;
                        });
                    });
                    break;
            }

            saveStructures(sortedStructures);
            renderAllStructures();
        });
    });

    // 3D坐标图控制按钮
    waitForElement('#reset-view', (resetBtn) => {
        resetBtn.addEventListener('click', () => {
            camera.position.set(0, 10000, 20000);
            camera.lookAt(0, 0, 0);
            controls.reset();
        });
    });

    waitForElement('#show-axes', (axesBtn) => {
        axesBtn.addEventListener('click', () => {
            showAxes = !showAxes;
            axesHelper.visible = showAxes;
        });
    });

    waitForElement('#show-labels', (labelsBtn) => {
        labelsBtn.addEventListener('click', () => {
            showLabels = !showLabels;
            labels.forEach(label => {
                label.element.style.opacity = showLabels ? '1' : '0';
            });
        });
    });

    // 帖子详情模态框事件
    waitForElement('#closePostDetailModal', (closeBtn) => {
        closeBtn.addEventListener('click', closePostDetail);
    });

    waitForElement('#postDetailModal', (modal) => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closePostDetail();
            }
        });
    });
}


// 修改图片轮播功能，自动检测文件夹中的图片
function initImageSliders() {
    // 结构图片轮播初始化
    initFolderSlider(
        '.feature-card:nth-child(1) .feature-image img', 
        'images/structures/', 
        '结构图片'
    );
    
    // 帖子图片轮播初始化
    initFolderSlider(
        '.feature-card:nth-child(2) .feature-image img', 
        'images/posts/', 
        '帖子图片'
    );
}

// 通用文件夹图片轮播初始化函数
function initFolderSlider(imgSelector, folderPath, altPrefix) {
    const imgElement = document.querySelector(imgSelector);
    if (!imgElement) return;
    
    let currentImageIndex = 1;
    let validImageIndices = [];
    let isDetecting = true;
    
    // 检测有效图片
    function detectImages(index) {
        const testImg = new Image();
        testImg.src = `${folderPath}${index}.png`;
        
        testImg.onload = function() {
            // 图片存在，添加到有效列表
            validImageIndices.push(index);
            // 继续检测下一张
            detectImages(index + 1);
        };
        
        testImg.onerror = function() {
            // 图片不存在，停止检测
            isDetecting = false;
            // 如果没有检测到任何图片，使用默认图片
            if (validImageIndices.length === 0) {
                validImageIndices.push('default');
            }
        };
    }
    
    // 开始检测图片
    detectImages(1);
    
    // 轮播函数
    function startSlideshow() {
        if (validImageIndices.length === 0) {
            // 等待检测完成
            setTimeout(startSlideshow, 100);
            return;
        }
        
        // 切换到下一张图片
        currentImageIndex = (currentImageIndex + 1) % validImageIndices.length;
        const imageName = validImageIndices[currentImageIndex];
        
        // 更新图片
        imgElement.src = `${folderPath}${imageName}.png`;
        imgElement.alt = `${altPrefix} ${imageName}`;
        
        // 设置下一次切换
        setTimeout(startSlideshow, 5000); // 5秒切换一次
    }
    
    // 启动轮播
    startSlideshow();
}

// 在页面加载完成后初始化轮播
window.addEventListener('load', initImageSliders);



// 获取并显示 Google Analytics 访问量
async function fetchGaVisitCount() {
    const API_KEY = 'ExoWZEAgTWOQ_WsVbTgTNg';
    const PROPERTY_ID = 'properties/G-2MY9RSPX4Z';

    try {
        const response = await fetch(
            `https://analyticsdata.googleapis.com/v1beta/${PROPERTY_ID}:runReport?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    dateRanges: [{ startDate: '2025-01-01', endDate: 'today' }],
                    metrics: [{ name: 'sessions' }],
                }),
            }
        );

        const data = await response.json();
        
        waitForElement('#gaVisitCount', (countElement) => {
            if (data.rows && data.rows.length > 0) {
                countElement.textContent = data.rows[0].metricValues[0].value;
            } else {
                countElement.textContent = '暂无数据';
            }
        });
    } catch (error) {
        console.error('获取GA数据失败:', error);
        waitForElement('#gaVisitCount', (countElement) => {
            countElement.textContent = '获取失败';
        });
    }
}




// 初始化Gitalk，使用当前页面路径作为唯一标识
// 修改 main.js 中的 initGitalk 函数
function initGitalk() {
    // 最大重试次数和间隔时间
    const maxRetries = 20;
    const retryInterval = 300;
    let retries = 0;

    // 重试逻辑函数
    const tryInit = () => {
        // 检查 Gitalk 库是否加载完成
        if (!window.Gitalk) {
            if (retries < maxRetries) {
                retries++;
                console.log(`Gitalk 库未加载，重试中（${retries}/${maxRetries}）`);
                setTimeout(tryInit, retryInterval);
            } else {
                console.error('达到最大重试次数，Gitalk 库仍未加载');
            }
            return;
        }

        // 检查评论容器是否存在（页脚中的 gitalk-container）
        const container = document.getElementById('gitalk-container');
        if (!container) {
            if (retries < maxRetries) {
                retries++;
                console.log(`未找到 gitalk-container 元素，重试中（${retries}/${maxRetries}）`);
                setTimeout(tryInit, retryInterval);
            } else {
                console.error('达到最大重试次数，仍未找到 gitalk-container 元素');
            }
            return;
        }

        // 所有条件满足，初始化 Gitalk
        const gitalk = new Gitalk({
            clientID: 'Ov23lir8R3Vh9Zzynyvy',
            clientSecret: 'b7b652dc0032f772142895a06b45e0fe66d197c2',
            repo: 'mc-map',
            owner: 'waddiwasibiu',
            admin: ['waddiwasibiu'],
            id: location.pathname, // 使用当前路径作为评论区分辨标识
            distractionFreeMode: false
        });

        gitalk.render(container);
        console.log('Gitalk 评论组件初始化成功');
    };

    // 开始第一次尝试
    tryInit();
}



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

    initVisitCounter();
    fetchGaVisitCount(); // 总访问量计数

    // 初始化3D场景
    init3DScene();
    
    // 渲染所有结构
    renderAllStructures();
    
    // 默认显示一区内容
    switchServer('server1');
    
    // 初始化结构筛选器
    initStructureFilter();

    initGitalk();


});
