# electron-vite

一个基于 Electron Forge、Vite 和 Vue 3 的桌面应用模板，内置主进程/预加载/渲染进程分层、Vue Router 页面路由，以及 `vue-i18n` 多语言支持。

## 特性

- Electron 主进程、Preload、Renderer 分层清晰
- Vue 3 Composition API + TypeScript
- 基于文件的页面组织，接入 `vue-router/auto-routes`
- 内置中英文切换与语言持久化
- 预加载脚本通过 `contextBridge` 暴露安全桥接 API
- 集成 ESLint，支持一键修复

## 技术栈

- Electron Forge
- Vite
- Vue 3
- Vue Router
- Vue I18n
- TypeScript
- Tailwind CSS
- ESLint (`@antfu/eslint-config`)

## 环境要求

- Node.js 24+
- pnpm 10+（推荐）

## 快速开始

```bash
pnpm install
pnpm start
```

开发中常用命令：

```bash
pnpm start
pnpm lint
pnpm typecheck
pnpm package
pnpm make
```

对应脚本说明：

- `pnpm start`：启动 Electron Forge 开发环境
- `pnpm lint`：运行 ESLint 并自动修复可修复问题
- `pnpm typecheck`：使用 `vue-tsc` 执行 TypeScript 类型检查
- `pnpm package`：构建应用但不生成安装包
- `pnpm make`：生成平台分发产物

## 目录结构

```text
src/
  main/        Electron 主进程入口、生命周期与窗口管理
  preload/     预加载脚本与桥接 API
  renderer/    Vue 渲染进程应用
docs/
  i18n.md      多语言实现与扩展说明
```

渲染进程中的主要目录：

- `src/renderer/components/`：页面组件与通用 UI 组件
- `src/renderer/layouts/`：布局组件
- `src/renderer/pages/`：页面文件，路由由文件自动生成
- `src/renderer/router/`：路由初始化
- `src/renderer/composables/`：复用逻辑
- `src/renderer/i18n/`：语言注册、消息定义与运行时配置
- `src/renderer/shared/styles/`：共享样式

## 架构说明

### Main

`src/main/` 负责 Electron 生命周期、窗口创建与桌面端能力接入。当前主窗口启用了：

- `contextIsolation: true`
- `sandbox: true`
- `nodeIntegration: false`

这意味着渲染进程默认无法直接访问 Node.js 能力，需要通过 Preload 层桥接。

### Preload

`src/preload/index.ts` 使用 `contextBridge.exposeInMainWorld()` 将 `electron-vite` API 注入到渲染进程，用于承载受控的桌面能力访问入口。

### Renderer

`src/renderer/` 是标准 Vue 应用，负责页面、布局、样式与多语言渲染。路由使用哈希模式，适合 Electron 桌面应用场景。

## 路由

页面文件位于 `src/renderer/pages/`，通过 `vue-router/auto-routes` 自动生成路由。

当前页面包括：

- `/`：首页
- `/about`：关于页
- `src/renderer/pages/[...path].vue`：兜底路由页

## 国际化

项目已内置多语言切换能力：

- 默认语言：`zh-CN`
- 已注册语言：`zh-CN`、`en`
- 当前语言会持久化到 `localStorage`
- 应用启动时会优先读取本地缓存，否则根据浏览器语言自动匹配

详细说明见：[docs/i18n.md](./docs/i18n.md)

## 开发约定

- 优先使用 `pnpm`
- 渲染进程代码使用 Vue 3 Composition API 与 `<script setup lang="ts">`
- 新增桌面能力时，优先放在 `preload` 桥接层，而不是直接暴露 Node 能力到页面
- 修改公共工具或公共行为时，同步更新 `docs/`
- 提交 PR 前运行 `pnpm lint`
- 提交 PR 前运行 `pnpm typecheck`
- 如需新增生产依赖，请先确认

## 手动验证建议

当前仓库未配置独立测试框架，建议至少完成以下检查：

1. 运行 `pnpm start`，确认主窗口能够正常打开
2. 检查首页与 About 页面路由切换是否正常
3. 切换语言后刷新应用，确认语言选择被持久化
4. 运行 `pnpm lint`，确认无新增 lint 问题
5. 运行 `pnpm typecheck`，确认无 TypeScript 类型错误

## License

MIT
