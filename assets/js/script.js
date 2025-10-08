// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.add('open');
        });
    }
    
    if (closeSidebar && sidebar) {
        closeSidebar.addEventListener('click', function() {
            sidebar.classList.remove('open');
        });
    }
    
    // 点击目录项时，在移动端自动关闭侧边栏
    const tocLinks = document.querySelectorAll('.toc a, .docs-toc a');
    tocLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });
    
    // 高亮当前阅读的章节
    function highlightActiveSection() {
        const headings = document.querySelectorAll('h2, h3');
        const tocLinks = document.querySelectorAll('.toc a');
        
        let currentHeadingId = '';
        const scrollPosition = window.scrollY + 100;
        
        headings.forEach(heading => {
            const headingTop = heading.offsetTop;
            if (scrollPosition >= headingTop) {
                currentHeadingId = heading.id;
            }
        });
        
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentHeadingId) {
                link.classList.add('active');
            }
        });
    }
    
    // 添加滚动事件监听器
    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // 初始高亮
});