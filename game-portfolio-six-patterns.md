# 游戏化个人作品集：六种核心模式

> 游戏和个人简介的结合 = 把导航和内容映射到一个物理/互动隐喻上。

---

## 模式 1：舞台隐喻

**代表：Aurel's Grand Theater | 开发量：极大**

**映射逻辑：** 项目 = 剧院里的演出节目。入口是旋转门票菜单，每张票是一个项目。点票 → 票撕开 → 演出开始。地下室更衣室用来展示项目详情（DOM 排版），3D 世界和 2D 内容页之间用电影级过渡。解谜收集钥匙解锁隐藏页面。

100+ 3D 模型，150 个物理物体。玩家扮演浣熊在废弃剧院中探索。Ghibli 美学 + 维多利亚 UI。

**适合：** 交互设计师

**链接：**
- [Communication Arts](https://www.commarts.com/webpicks/aurel-s-grand-theater)
- [Codrops 深度拆解](https://tympanus.net/codrops/2025/05/20/behind-the-curtain-building-aurels-grand-theater-from-design-to-code/)

---

## 模式 2：岛屿/景观隐喻

**代表：Bruno Simon folio-2025 | 开发量：大**

**映射逻辑：** 个人信息 = 3D 岛屿上的地标。路标指向不同 section，建筑代表项目。开车行驶在道路上 = 浏览生涯轨迹。本质是把导航菜单做成了物理世界——你不用点菜单，你开过去。

Three.js 构建完整 3D 世界。经典案例，访问量超 40 万。

**适合：** 创意开发者

**链接：** `bruno-simon.com`

---

## 模式 3：关卡隐喻

**代表：Martin Laxenaire Portfolio 2025 | 开发量：中-大**

**映射逻辑：** 每个 section = 一个街机游戏关卡。每关是一个 WebGPU 程序化场景，需要用户交互（拖拽、按住）才能完成。完成后解锁下一关。80 年代街机美学。

体验本身就是技术展示——你看到的视觉效果就是你的能力证明。

**适合：** 前端/图形方向

**技术栈：** WebGPU + compute shaders

**链接：** [okaydev 案例页面](https://okaydev.co/u/martinlaxenaire/portfolio/porfolio-2025)

---

## 模式 4：终端/OS 隐喻

**代表：el1fe.com | 开发量：中**

**映射逻辑：** whoami → 我是谁。projects → 项目列表。cat resume → 履历。内置 Snake、Matrix 雨、黑客入侵模拟。**实时显示同时在线访客的光标位置**（最绝的细节）。

用程序员的母语做自我介绍。共鸣强，门槛低。

**适合：** 后端/全栈

**技术栈：** Next.js + Supabase Realtime

**链接：** [dev.to 文章](https://dev.to/el1fe/how-i-built-a-portfolio-that-makes-recruiters-actually-stop-and-look-1e3n)

---

## 模式 5：DOM 即关卡

**代表：Space Invaders Resume | 开发量：中**

**映射逻辑：** 简历内容 = 外星人舰队。外星人是 DOM 节点。射击 → 真实删除 DOM 元素。游戏层和内容层是同一层，两个面。

最极端的 "show don't tell"。SvelteKit + TailwindCSS。WCAG 2.2 AA 无障碍。

**适合：** 创意方向

**链接：** [dev.to 文章](https://dev.to/pedacos/play-my-resume-a-destructible-space-invaders-portfolio-1124)

---

## 模式 6：RPG 角色隐喻

**代表：Hero's Chronicle | 开发量：小-中**

**映射逻辑：** 技能 → RPG 属性面板（力量/敏捷/智力）。项目 → 已完成的任务。经历 → 任务日志/角色进度。About → 角色创建页。

六种中最轻量——本质还是网页，只是披了 RPG UI 的皮。开发成本和技术门槛最低。

**适合：** 任何人

---

## 总结表

| 模式 | 隐喻 | 项目展示方式 | 开发量 | 适合谁 |
|------|------|-------------|--------|--------|
| 舞台 | 剧院 | 节目票 → 演出 → 后台详情 | 极大 | 交互设计师 |
| 岛屿 | 开车兜风 | 路标/建筑 → 弹出详情 | 大 | 创意开发者 |
| 关卡 | 街机通关 | 每关 = 一个 section | 中-大 | 前端/图形向 |
| 终端 | 命令行 | 命令 → 信息展示 | 中 | 后端/全栈 |
| DOM破坏 | 打外星人 | 敌机 = 内容块 | 中 | 创意方向 |
| RPG面板 | 角色属性 | 属性/任务 = 技能/项目 | 小-中 | 任何人 |
