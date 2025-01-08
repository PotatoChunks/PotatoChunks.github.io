# 个人博客系统

这是一个现代化的个人博客系统，采用纯前端实现，具有简洁优雅的设计和流畅的用户体验。

## 功能特点

- 🎨 现代化UI设计
  - 响应式布局，完美适配各种设备
  - 明暗主题切换
  - 优雅的动画效果
  - 瀑布流文章展示

- 📱 用户体验
  - 文章懒加载
  - 平滑滚动
  - 回到顶部
  - 文章分类筛选

- 📝 文章功能
  - Markdown 内容支持
  - 代码高亮
  - 文章标签
  - 文章预览
  - 文章详情模态框

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Marked.js (Markdown 解析)
- Highlight.js (代码高亮)
- Font Awesome (图标)

## 项目结构

```
.
├── index.html          # 主页面
├── styles/            
│   ├── main.css       # 主样式文件
├── scripts/           
│   ├── main.js        # 主逻辑文件
│   └── articles.js    # 文章数据和渲染
└── README.md          # 项目说明
```

## 使用说明

1. 克隆项目
```bash
git clone [项目地址]
```

2. 打开项目
```bash
cd [项目目录]
```

3. 运行项目
- 使用任意 HTTP 服务器运行项目
- 或直接打开 `index.html` 文件

## 自定义文章

编辑 `scripts/articles.js` 文件，按照以下格式添加文章：

```javascript
{
    title: "文章标题",
    description: "文章描述",
    content: "Markdown格式的文章内容",
    date: "发布日期",
    tags: ["标签1", "标签2"],
    image: "封面图片URL"
}
```

## 特性说明

### 主题切换
- 支持明暗两种主题
- 主题设置会被保存在本地

### 文章展示
- 瀑布流布局
- 懒加载机制
- 平滑动画效果

### 文章分类
- 基于标签的动态分类
- 实时筛选功能
- 平滑过渡动画

### 响应式设计
- 移动端优化
- 自适应布局
- 触摸友好

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License 