// 文章内容存储
const articleContents = {
    'this-in-javascript': `
# 深入理解 JavaScript 中的 this 指向


在 JavaScript 中，\`this\` 关键字是一个较为复杂的概念，它的值取决于函数的调用方式。本文将详细介绍不同场景下 \`this\` 的指向问题。


## 1. 全局上下文中的 this


在全局执行上下文中（在任何函数之外），\`this\` 指向全局对象：
- 在浏览器中，\`this\` 指向 \`window\` 对象
- 在 Node.js 中，\`this\` 指向 \`global\` 对象


\`\`\`javascript
console.log(this === window); // 在浏览器中输出 true
\`\`\`


## 2. 函数中的 this


### 2.1 普通函数调用


在普通函数中，\`this\` 指向全局对象（非严格模式）或 \`undefined\`（严格模式）：


\`\`\`javascript
function showThis() {
    console.log(this);
}


showThis(); // window 或 undefined（严格模式）
\`\`\`


### 2.2 对象方法中的 this


当函数作为对象的方法调用时，\`this\` 指向调用该方法的对象：


\`\`\`javascript
const person = {
    name: '张三',
    sayHi() {
        console.log(this.name);
    }
};


person.sayHi(); // 输出：张三
\`\`\`


### 2.3 构造函数中的 this


使用 \`new\` 关键字调用函数时，\`this\` 指向新创建的对象：


\`\`\`javascript
function Person(name) {
    this.name = name;
    this.sayHi = function() {
        console.log('你好，我是' + this.name);
    };
}


const person = new Person('张三');
person.sayHi(); // 输出：你好，我是张三
\`\`\`


## 3. 箭头函数中的 this


箭头函数没有自己的 \`this\`，它会继承外层作用域的 \`this\` 值：


\`\`\`javascript
const obj = {
    name: '张三',
    sayHiArrow: () => {
        console.log(this.name);
    },
    sayHiRegular: function() {
        console.log(this.name);
    }
};


obj.sayHiArrow();     // undefined（this 指向全局对象）
obj.sayHiRegular();   // 张三
\`\`\`


## 4. 事件处理器中的 this


在 DOM 事件处理器中，\`this\` 指向触发事件的元素：


\`\`\`javascript
button.addEventListener('click', function() {
    console.log(this); // 指向 button 元素
});


button.addEventListener('click', () => {
    console.log(this); // 指向全局对象（箭头函数）
});
\`\`\`


## 5. 更换绑定 this


JavaScript 提供了三个方法来更换绑定 \`this\`：


### 5.1 call()


\`\`\`javascript
function greet() {
    console.log(\`你好，\${this.name}\`);
}


const person = { name: '张三' };
greet.call(person); // 输出：你好，张三
\`\`\`


### 5.2 apply()


\`\`\`javascript
function greet(greeting) {
    console.log(\`\${greeting}，\${this.name}\`);
}


const person = { name: '张三' };
greet.apply(person, ['早上好']); // 输出：早上好，张三
\`\`\`


### 5.3 bind()


\`\`\`javascript
function greet() {
    console.log(\`你好，\${this.name}\`);
}


const person = { name: '张三' };
const greetPerson = greet.bind(person);
greetPerson(); // 输出：你好，张三
\`\`\`


## 总结


理解 \`this\` 的关键是要记住以下几点：


1. \`this\` 的值取决于函数的调用方式，而不是定义方式
2. 箭头函数没有自己的 \`this\`，会继承外层作用域的 \`this\`
3. 可以使用 \`call\`、\`apply\` 和 \`bind\` 方法更换绑定 \`this\`
4. 在事件处理器中，\`this\` 通常指向触发事件的元素
5. 在严格模式下，独立调用的函数中的 \`this\` 为 \`undefined\`


掌握这些规则，就能在实际开发中正确处理 \`this\` 指向的问题了。

`,
    'git-basics-guide': `
# Git 基础使用指南

Git 是目前最流行的版本控制系统，本文将介绍 Git 的基本概念和常用命令。

## 1. Git 基本概念

### 1.1 工作区域

Git 项目有三个工作区域：
- 工作目录（Working Directory）
- 暂存区（Staging Area）
- Git 仓库（Repository）

\`\`\`bash
# 查看当前工作区状态
git status
\`\`\`

### 1.2 文件状态

Git 中的文件状态：
- Untracked：未跟踪
- Modified：已修改
- Staged：已暂存
- Committed：已提交

## 2. 基本操作

### 2.1 初始化仓库

\`\`\`bash
# 在当前目录初始化 Git 仓库
git init

# 克隆远程仓库
git clone <repository-url>
\`\`\`

### 2.2 添加和提交

\`\`\`bash
# 添加文件到暂存区
git add <file-name>
git add .  # 添加所有文件

# 提交更改
git commit -m "提交说明"

# 添加并提交
git commit -am "提交说明"  # 仅对已跟踪文件有效
\`\`\`

### 2.3 分支操作

\`\`\`bash
# 创建分支
git branch <branch-name>

# 切换分支
git checkout <branch-name>

# 创建并切换分支
git checkout -b <branch-name>

# 合并分支
git merge <branch-name>
\`\`\`

## 3. 远程操作

### 3.1 远程仓库

\`\`\`bash
# 添加远程仓库
git remote add origin <repository-url>

# 推送到远程仓库
git push origin <branch-name>

# 从远程仓库拉取
git pull origin <branch-name>
\`\`\`

### 3.2 同步操作

\`\`\`bash
# 获取远程更新
git fetch origin

# 查看远程分支
git remote -v
\`\`\`

## 4. 常用技巧

### 4.1 查看历史

\`\`\`bash
# 查看提交历史
git log

# 查看简洁历史
git log --oneline

# 查看分支图
git log --graph --oneline
\`\`\`

### 4.2 撤销操作

\`\`\`bash
# 撤销工作区修改
git checkout -- <file-name>

# 撤销暂存区修改
git reset HEAD <file-name>

# 撤销提交
git revert <commit-id>
\`\`\`

### 4.3 标签管理

\`\`\`bash
# 创建标签
git tag <tag-name>

# 创建带注释的标签
git tag -a <tag-name> -m "标签说明"

# 查看标签
git tag
\`\`\`


`
};

// 文章数据
const articles = [
    {
        id: 1,
        title: "深入理解 JavaScript 中的 this 指向",
        description: "详细解析 JavaScript 中 this 的指向问题，包括全局上下文、对象方法、事件处理器等多种场景。",
        date: "2024-01-15",
        tags: ["JavaScript", "编程基础"],
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
        content: getArticleContent('this-in-javascript')
    },
    {
        id: 2,
        title: "Git 基础使用指南",
        description: "详细介绍 Git 的基本概念、常用命令和最佳实践，帮助你快速掌握版本控制工具。",
        date: "2024-01-16",
        tags: ["Git", "开发工具"],
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
        content: getArticleContent('git-basics-guide')
    }
];

// 分页配置
const PAGE_SIZE = 6;
let currentPage = 1;
let isLastPage = false;

// 获取分页数据
function getPagedArticles(page) {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const pagedArticles = articles.slice(start, end);
    isLastPage = end >= articles.length;
    return pagedArticles;
}

// 渲染文章卡片
function renderArticleCard(article) {
    return `
        <article class="article-card">
            <div class="article-image" style="background-image: url('${article.image}')"></div>
            <div class="article-content">
                <div class="article-tags">
                    ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <div class="article-meta">
                    <span><i class="far fa-calendar"></i> ${article.date}</span>
                </div>
            </div>
        </article>
    `;
}

// 渲染文章内容
function renderArticleContent(article) {
    // 配置Marked选项
    marked.setOptions({
        highlight: function(code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                return hljs.highlight(code, { language: lang }).value;
            }
            return hljs.highlightAuto(code).value;
        },
        breaks: true,
        gfm: true
    });

    // 解析Markdown内容
    const content = marked.parse(article.content);
    
    return content;
}

// 获取文章内容
function getArticleContent(key) {
    return articleContents[key] || '';
}

export { articles, getPagedArticles, renderArticleCard, renderArticleContent, isLastPage, currentPage }; 