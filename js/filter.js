// 结构筛选功能实现（按名称筛选）
function setupStructureFilter() {
    const filterSelect = document.getElementById('structure-filter');
    if (!filterSelect) return;
    
    // 初始化筛选选项（按名称）
    populateFilterOptions();
    
    // 为筛选下拉框添加事件监听
    filterSelect.addEventListener('change', function() {
        const selectedName = this.value;
        filterStructuresByName(selectedName);
    });
}

// 填充筛选选项（从结构数据中提取所有唯一名称）
function populateFilterOptions() {
    const filterSelect = document.getElementById('structure-filter');
    if (!filterSelect) return;
    
    // 获取所有结构名称
    const structures = loadStructures();
    const structureNames = new Set();
    
    structures.forEach(structure => {
        structureNames.add(structure.name);
    });
    
    // 清空现有选项（保留"所有结构"选项）
    const allOption = filterSelect.querySelector('option[value="all"]') || document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = '所有结构';
    filterSelect.innerHTML = '';
    filterSelect.appendChild(allOption);
    
    // 添加所有结构名称作为选项，并按字母顺序排序
    Array.from(structureNames).sort().forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        filterSelect.appendChild(option);
    });
}

// 根据名称筛选结构
function filterStructuresByName(name) {
    const currentServer = document.getElementById('serverSelector')?.value || 'server1';
    const structureCards = document.querySelectorAll(`#${currentServer}Content .card-hover`);
    
    structureCards.forEach(card => {
        // 获取卡片的结构名称
        const cardNameElement = card.querySelector('h3');
        if (!cardNameElement) return;
        
        const cardName = cardNameElement.textContent.trim();
        
        // 根据筛选条件显示或隐藏卡片
        if (name === 'all' || cardName === name) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
    
    // 检查是否有可见卡片
    const visibleCards = document.querySelectorAll(`#${currentServer}Content .card-hover:not(.hidden)`);
    let noResultsElement = document.getElementById('no-structures-message');
    
    // 如果没有结果，显示提示信息
    if (visibleCards.length === 0) {
        if (!noResultsElement) {
            const serverContent = document.getElementById(currentServer + 'Content');
            if (serverContent) {
                noResultsElement = document.createElement('div');
                noResultsElement.id = 'no-structures-message';
                noResultsElement.className = 'text-center py-12 text-gray-500';
                noResultsElement.innerHTML = `<i class="fa fa-search fa-2x mb-2"></i><p>没有找到匹配的结构</p>`;
                serverContent.appendChild(noResultsElement);
            }
        } else {
            noResultsElement.classList.remove('hidden');
        }
    } else if (noResultsElement) {
        noResultsElement.classList.add('hidden');
    }
}

// 在页面加载完成后初始化筛选功能
document.addEventListener('DOMContentLoaded', function() {
    // 等待组件加载完成后再初始化筛选
    setTimeout(setupStructureFilter, 500);
});
