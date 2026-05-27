# 个人介绍页设计探索记录

## 一、Vibe Coding 为何失败

AI 在没有足够约束的情况下做设计，会吐出**默认审美**——居中大标题、紫色渐变、毛玻璃卡片、无衬线字体、Figma 模板感。这些东西堆在一起，不丑，但跟你没关系。

个人介绍页的难点从来不是"做出来"，而是**"做出来像你"**。AI 不认识你，Vibe Coding 出来的东西自然没有你。

---

## 二、三条初始方向

### A. 手工拼贴质感（SEATED 那类）
- 好处：辨识度极高，一眼记住，不怕跟别人撞
- 代价：需要你提供素材——照片、手绘、手写文字、纹理。AI 可以搭结构和排版，但核心"手工感"得来自你自己

### B. 极简排版型（Typography-first）
- 好处：个人站最稳妥的方向。只靠字体层级、留白、间距就能撑起来，不依赖视觉素材
- 代价：对你的文字内容要求高——你得有自己的表达

### C. 互动/趣味型（Playful interactive）
- 好处：小交互、小动画，适合偏技术向的人。Bruno Simon 开车逛简历是极致
- 代价：开发量大，容易过度设计

**选择：倾向 A + C**

---

## 三、A 类参考案例（手工拼贴质感）

### 代表案例

1. **Igal 品牌设计师作品集**（Butcher Studio 制作）
   - 美术指导用剪刀和杂志先做了一张真实的纸拼贴，才转成网页主视觉
   - 字体模仿"报纸剪报"——毛边标题、错乱行距、手绘铅笔/剪刀插图点缀在 CTA 旁边
   - [Muzli 拆解文章](https://medium.muz.li/website-as-an-art-object-the-case-of-diving-into-the-world-of-a-brand-designer-39ef30582d97)

2. **Revolucci.art** — 多功能创意人作品集
   - 黑白高对比 × 暖纸色调（米色底）
   - 手绘商业插画 + 干净排版 + 贴纸标签 + 打字机细节
   - 设计意图就是让它像"工作室的墙"而不是模板
   - [案例文章](https://notyouagain.ai/2026/05/13/revolucci-art-studio-portfolio-piece/)

3. **Designmodo 收录的 25+ 剪贴簿风格站点**
   - 纸板装饰 + 手写字体（Dego Interactive）
   - 水彩背景（Elaine Fisher）
   - 抽象拼贴背景（Portlandia）
   - [Scrapbook Style 合集](https://designmodo.com/scrapbook-website-design/)

### 免费素材库
- [Open Peeps](https://www.openpeeps.com) — 手绘线条人物，混搭组件
- [Absurd Design](https://absurd.design) — 超现实手绘插画
- [Lukasz Adam](https://lukaszadam.com/illustrations) — 温暖极简手绘 SVG
- [DrawKit](https://www.drawkit.com) — 多风格含手绘
- [Blush](https://blush.design) — 多位插画师合集

---

## 四、C 类参考案例（互动/游戏化）

### 🔥 标杆三件

| 层级 | 案例 | 一句话 |
|------|------|--------|
| 封神 | **Aurel's Grand Theater** | 扮演浣熊探索废弃剧院，3D 物理引擎 + 解谜 + 收集钥匙解锁作品集，Ghibli 美学 |
| 经典 | **Bruno Simon** | 开着小车逛简历，Three.js 个人站的行业标杆 |
| 新生代 | **Martin Laxenaire Portfolio 2025** | 街机游戏体验，WebGPU 程序化场景，每个 section 是关卡 |

### 更多案例
- **el1fe.com** — 赛博朋克终端：bash 模拟 30+ 命令、Snake 游戏、实时显示其他访客光标
- **Marcus Lane** — Kaboom.js 横版游戏：闯关探索项目经历
- **Mohamed Datt** — 终端冒险游戏：AI 聊天机器人训练在作者人生故事上
- **Rifa Tasfia** — 卡通游乐场：Conway 生命游戏 + 像素画板 + 苏格拉底问答机器人

### 相关链接
- Aurel: [Communication Arts](https://www.commarts.com/webpicks/aurel-s-grand-theater) / [Codrops 深度拆解](https://tympanus.net/codrops/2025/05/20/behind-the-curtain-building-aurels-grand-theater-from-design-to-code/)
- Bruno Simon: `bruno-simon.com`
- Martin Laxenaire: [案例页面](https://okaydev.co/u/martinlaxenaire/portfolio/porfolio-2025)
- el1fe: [dev.to 文章](https://dev.to/el1fe/how-i-built-a-portfolio-that-makes-recruiters-actually-stop-and-look-1e3n)
- Marcus Lane: `marcuslane.com` / [GitHub](https://github.com/mlane/marcuslane.com)
- Mohamed Datt: `mohameddatt.com` / [GitHub](https://github.com/MeeksonJr/mo-portfolio-2025)
- Rifa Tasfia: [Devpost](https://devpost.com/software/rifa-tasfia-chowdhury-portfolio)

---

## 五、游戏与个人简介结合的六种模式

游戏和个人简介的结合，本质上就是**把导航和内容映射到一个物理/互动隐喻上**。

### 模式 1：舞台隐喻 → Aurel's Grand Theater
**映射**：项目 = 剧院里的演出节目
- 入口：旋转门票菜单，每张票是一个项目。点票 → 票撕开 → 演出开始
- 展区：项目案例藏在剧院"地下室/更衣室"，滚动触发的 DOM 内容，3D 和 2D 间电影级过渡
- 彩蛋：解谜收集钥匙 → 解锁隐藏页面；404 藏在剧院后巷
- **开发量：极大 | 适合：交互设计师**

### 模式 2：岛屿/景观隐喻 → Bruno Simon
**映射**：信息 = 3D 地图上的地标
- 一辆车在 3D 岛屿行驶。路标 = 个人信息区，建筑 = 项目，道路 = 生涯轨迹
- 本质是把导航菜单做成了物理世界——你不用点菜单，你开过去
- **开发量：大 | 适合：创意开发者**

### 模式 3：关卡隐喻 → Martin Laxenaire 2025
**映射**：每个 section = 一个街机关卡
- 每关是一个 WebGPU 程序化场景，需要交互完成后才能进入下一关
- 体验本身就是技术展示——你看到的视觉效果就是你的能力证明
- **开发量：中-大 | 适合：前端/图形方向**

### 模式 4：终端/OS 隐喻 → el1fe.com
**映射**：信息 = 文件系统
- `whoami` → 我是谁。`projects` → 项目列表。`cat resume` → 履历
- 内置 Snake、Matrix 雨。实时显示同时在线访客光标位置
- **开发量：中 | 适合：后端/全栈**

### 模式 5：DOM 即关卡 → Space Invaders 简历
**映射**：简历内容 = 外星人舰队
- 外星人是 DOM 节点。射击 → 真实删除 DOM 元素
- 游戏层和内容层是同一个东西的两个面
- **开发量：中 | 适合：创意方向**

### 模式 6：RPG 角色隐喻 → Hero's Chronicle
**映射**：技能 = RPG 属性面板；项目 = 已完成的任务
- About → 角色创建页。技能 → 属性值。经历 → 任务日志
- 六种中最轻量——本质还是网页，只是披了 RPG UI 的皮
- **开发量：小-中 | 适合：任何人**

### 总结表

| 模式 | 隐喻 | 项目展示方式 | 开发量 | 适合谁 |
|------|------|-------------|--------|--------|
| 舞台 | 剧院 | 节目票 → 演出 → 后台详情 | 极大 | 交互设计师 |
| 岛屿 | 开车兜风 | 路标/建筑 → 弹出详情 | 大 | 创意开发者 |
| 关卡 | 街机通关 | 每关 = 一个 section | 中-大 | 前端/图形向 |
| 终端 | 命令行 | 命令 → 信息展示 | 中 | 后端/全栈 |
| DOM破坏 | 打外星人 | 敌机 = 内容块 | 中 | 创意方向 |
| RPG面板 | 角色属性 | 属性/任务 = 技能/项目 | 小-中 | 任何人 |

---

## 六、简化方案：三个可执行的方向

游戏化的太难，回归简单的个人介绍页。三个方向：

### 方向 1：极简白底排版型
最安全、最快出效果。靠字体层级 + 留白撑起质感。零视觉素材要求。

结构：大标题名字 → 一句话介绍 → 几个项目卡片 → 联系方式

参考：
- [Minimal Gallery](https://minimal.gallery) — 极简主义网站合集
- [minimalio](https://github.com/nilaachandra/minimalio) — 纯 HTML/CSS，零依赖，直接改文字
- [Thomas 模板](https://www.framer.com/marketplace/templates/thomas/) — Framer 极简排版案例

### 方向 2：温和人格型
在极简基础上加人格化元素——手写字体、非对称布局、一句有趣的话。不靠视觉轰炸，靠文字和微妙的间距让人觉得"这人有点意思"。

参考：
- [Akasha Michelle](https://www.sitesbuilderreport.com/inspiration/web-developer-designer-portfolios) — 开发者兼 UX 设计师，配色抓眼但布局干净
- Sonja — 自由开发者兼漫画作者，视觉 + 文字质量都很高

### 方向 3：单页叙事型
一屏一屏往下滚，每屏讲一件事。加淡入动画和 scroll trigger。

参考：
- [KaiGe 个人主页](https://github.com/KaiGe7384/personal-homepage) — 开源，白色简约 + 终端窗口 + 星空背景，单文件 HTML 零依赖
- [simplefolio](https://github.com/cobidev/simplefolio) — 5000+ star，一页式带滚动动画
