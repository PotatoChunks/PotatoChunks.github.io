import { articles, getPagedArticles, renderArticleCard, renderArticleContent, isLastPage, currentPage as articlesCurrentPage } from './articles.js';

// 分页状态
let loading = false;

// DOM 元素
const body = document.body;
const themeSwitch = document.querySelector('.theme-switch');
const articleGrid = document.querySelector('.article-grid');
const articleModal = document.querySelector('.article-modal');
const modalClose = document.querySelector('.modal-close');
const modalContent = document.querySelector('.modal-content');
const backToTop = document.querySelector('.back-to-top');
const hero = document.querySelector('.hero');
const typingText = document.querySelector('.typing-text');

// 打字机效果
function typeWriter(element, text, speed = 100) {
    if (!element) return;
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 视差滚动效果
function parallaxScroll() {
    if (!hero) return;
    const scrolled = window.scrollY;
    const heroContent = hero.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
}

// 初始化动画效果
document.addEventListener('DOMContentLoaded', () => {
    // 启动打字机效果
    if (typingText) {
        const originalText = typingText.textContent;
        typeWriter(typingText, originalText);
    }

    // 添加滚动监听
    window.addEventListener('scroll', () => {
        requestAnimationFrame(parallaxScroll);
    });

    // 添加文章卡片动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const articleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 监听文章卡片
    document.querySelectorAll('.article-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        articleObserver.observe(card);
    });
});

// 主题切换功能
function initTheme() {
    // 检查系统主题偏好
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // 获取保存的主题或使用系统主题
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = prefersDarkScheme.matches ? 'dark' : 'light';
    const currentTheme = savedTheme || systemTheme;
    
    // 应用主题
    document.body.dataset.theme = currentTheme;
    
    // 更新主题切换按钮图标
    updateThemeIcon(currentTheme);
    
    // 监听系统主题变化
    prefersDarkScheme.addListener((e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.body.dataset.theme = newTheme;
            updateThemeIcon(newTheme);
        }
    });
}

// 更新主题切换按钮图标
function updateThemeIcon(theme) {
    const themeIcon = themeSwitch?.querySelector('i');
    if (themeIcon) {
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// 主题切换事件
themeSwitch?.addEventListener('click', () => {
    const currentTheme = body.dataset.theme || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// 初始化主题
initTheme();

// 加载保存的主题
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.dataset.theme = savedTheme;
}

// 文章展示功能
function showArticle(article) {
    if (!articleModal || !modalContent) return;

    // 填充文章内容
    const titleElement = modalContent.querySelector('.article-title');
    const dateElement = modalContent.querySelector('.article-date');
    const tagsElement = modalContent.querySelector('.article-tags');
    const coverElement = modalContent.querySelector('.article-cover img');
    const bodyElement = modalContent.querySelector('.article-body');

    if (titleElement) titleElement.textContent = article.title;
    if (dateElement) dateElement.innerHTML = `<i class="far fa-calendar"></i> ${article.date}`;
    if (tagsElement) tagsElement.innerHTML = article.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    if (coverElement) coverElement.src = article.image;
    if (bodyElement) bodyElement.innerHTML = renderArticleContent(article);

    // 高亮代码块
    if (window.hljs) {
        modalContent.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    }

    // 显示弹出层
    articleModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // 将文章内容滚动到顶部
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
    if (articleModal) {
        articleModal.scrollTop = 0;
    }
}

function hideArticle() {
    if (!articleModal) return;
    articleModal.classList.remove('active');
    document.body.style.overflow = '';
}

// 事件监听
modalClose?.addEventListener('click', hideArticle);
articleModal?.addEventListener('click', (e) => {
    if (e.target === articleModal) {
        hideArticle();
    }
});

// 文章分类功能
function generateCategories() {
    if (!articleGrid) return;

    // 获取所有文章标签
    const allTags = new Set();
    articles.forEach(article => {
        article.tags.forEach(tag => allTags.add(tag));
    });

    // 生成分类按钮
    const categoriesContainer = document.querySelector('.article-categories');
    if (!categoriesContainer) return;

    // 清空现有按钮
    categoriesContainer.innerHTML = '';

    // 添加"全部"按钮
    const allButton = document.createElement('button');
    allButton.className = 'category-btn active';
    allButton.dataset.category = 'all';
    allButton.textContent = '全部';
    categoriesContainer.appendChild(allButton);

    // 添加标签按钮
    Array.from(allTags).sort().forEach(tag => {
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.dataset.category = tag.toLowerCase();
        button.textContent = tag;
        categoriesContainer.appendChild(button);
    });

    // 添加点击事件
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterArticles(button.dataset.category);
        });
    });
}

// 更新文章过滤功能
function filterArticles(category) {
    const articles = document.querySelectorAll('.article-card');
    articles.forEach(article => {
        const articleTags = Array.from(article.querySelectorAll('.tag'))
            .map(tag => tag.textContent.toLowerCase());
        
        if (category === 'all' || articleTags.includes(category.toLowerCase())) {
            article.style.display = 'flex';
            article.style.opacity = '0';
            article.style.transform = 'translateY(20px)';
            setTimeout(() => {
                article.style.opacity = '1';
                article.style.transform = 'translateY(0)';
            }, Math.random() * 300);
        } else {
            article.style.display = 'none';
        }
    });
}

// 更新加载文章函数
function loadArticles() {
    if (!articleGrid) return;

    const pagedArticles = getPagedArticles(articlesCurrentPage);
    if (!pagedArticles.length) return;

    pagedArticles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.innerHTML = renderArticleCard(article);
        const card = articleElement.firstElementChild;
        
        if (!card) return;
        
        // 添加卡片点击事件
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            showArticle(article);
        });
        
        articleGrid.appendChild(card);
    });

    // 如果是第一页，生成分类按钮
    if (articlesCurrentPage === 1) {
        generateCategories();
    }
}

// 初始化
if (articleGrid) {
    articleGrid.innerHTML = ''; // 清空现有内容
    loadArticles();
}

// 懒加载功能
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading && !isLastPage) {
        loading = true;
        articlesCurrentPage++;
        loadArticles();
        setTimeout(() => loading = false, 500);
    }

    // 回到顶部按钮显示/隐藏
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// 回到顶部功能
backToTop?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 