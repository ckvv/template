# Vue Vite Starter Template

一个基于 Vue 3 + Vite 7 构建的现代化前端项目启动模板。

## 🚀 技术栈

- **框架**: [Vue 3.5+](https://vuejs.org/) (Composition API, `<script setup>`)
- **构建工具**: [Vite 7+](https://vitejs.dev/)
- **UI 库**: [@nuxt/ui v4](https://ui.nuxt.com/v4) (基于 Tailwind CSS 4)
- **样式**: [Tailwind CSS 4](https://tailwindcss.com/)
- **路由**: [Vue Router 5](https://router.vuejs.org/) (通过 `vue-router/vite` 实现基于文件系统的路由)
- **状态管理**: [Pinia](https://pinia.vuejs.org/) & [@pinia/colada](https://colada.pinia.vuejs.org/) (数据请求与缓存)
- **工具库**: [VueUse](https://vueuse.org/)
- **网络请求**: [ofetch](https://github.com/unjs/ofetch)
- **验证**: [Zod](https://zod.dev/)
- **代码规范**: [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- **开发工具**: [Vite Vue DevTools](https://devtools-next.vuejs.org/)

## ✨ 特性

- 🛠 **自动化**: 自动导入 Vue API、组件和路由。
- 📂 **基于文件的路由**: `src/pages` 目录下的文件自动生成路由映射。
- 🔐 **身份验证**: 内置全局路由守卫，支持基于 `meta.auth` 的权限控制。
- 🎨 **现代化 UI**: 预集成 `@nuxt/ui` v4，支持高度定制的主题和响应式设计。
- 📏 **强类型**: 全量 TypeScript 支持，集成 `vue-tsc` 进行构建时类型检查。
- 🧹 **极致规范**: 采用 Antfu 的 ESLint 配置，确保代码风格统一。

## 📦 项目结构

```text
src/
├── api/          # 接口定义与请求封装
├── assets/       # 静态资源
├── components/   # 全局组件
├── constant/     # 常量与 Schema 定义 (Zod)
├── pages/        # 页面 (自动路由)
├── router/       # 路由配置与守卫
├── stores/       # 状态管理 (Pinia)
├── App.vue       # 入口组件
└── main.ts       # 入口文件
```

## 🛠️ 指令

### 项目安装

```bash
pnpm install
```

### 开发环境启动

```bash
pnpm dev
```

### 生产环境构建

```bash
pnpm build
```

### 类型检查

```bash
pnpm type-check
```

### 代码格式化与校验

```bash
pnpm lint
```

## 📝 开发指南

- **路由**: 在 `src/pages` 下创建 `.vue` 文件即可自动生成路由。使用 `definePage` 宏定义页面元数据（如 `name`, `meta`）。
- **认证**: 路由默认开启认证检查。若需免登录访问，请在页面中设置 `meta: { auth: false }`。
- **组件**: `src/components` 下的组件会被自动导入，直接在模板中使用即可。
- **UI 组件**: 使用 `U` 前缀的组件（如 `<UButton />`），详情参考 [@nuxt/ui v4 文档](https://ui.nuxt.com/v4)。
