# Project Context: Vue Vite Starter Template

这是一个基于 Vue 3 和 Vite 7 构建的现代化前端项目启动模板，集成了 @nuxt/ui v4、Pinia 和 Vue Router 5。

## 🚀 技术栈概述

- **核心框架**: Vue 3.5+ (Composition API, `<script setup>`)
- **构建工具**: Vite 7+
- **UI 组件库**: [@nuxt/ui](https://ui.nuxt.com)
- **样式方案**: Tailwind CSS
- **路由管理**: [Vue Router](https://router.vuejs.org/) (使用 `vue-router/vite` 实现 `src/pages` 目录下的文件系统路由)
- **状态管理**: [Pinia](https://pinia.vuejs.org/) & [@pinia/colada](https://colada.pinia.vuejs.org/)
- **网络请求**: [ofetch](https://github.com/unjs/ofetch) & [VueUse `useFetch`](https://vueuse.org/core/useFetch/) 封装
- **数据验证**: [Zod](https://zod.dev/)
- **代码规范**: [@antfu/eslint-config](https://github.com/antfu/eslint-config) (无分号, 单引号, 2空格缩进)

## 🛠️ 构建与运行指令

- **安装依赖**: `pnpm install`
- **本地开发**: `pnpm dev`
- **生产构建**: `pnpm build` (输出至 `dist/`)
- **类型检查**: `pnpm type-check`
- **代码校验**: `pnpm lint` (包含自动修复)
- **预览产物**: `pnpm preview`

## 📂 核心目录结构

- `src/api/`: 基于 `ofetch` 和 `useFetch` 的接口请求封装。
- `src/components/`: 全局通用组件，由 `unplugin-vue-components` (集成在 `@nuxt/ui`) 自动导入。
- `src/constant/`: 存储常量定义和 Zod 校验 Schema。
- `src/pages/`: 页面组件目录，文件名即为路由路径。
- `src/router/`: 路由初始化配置及全局路由守卫 (处理 `meta.auth` 逻辑)。
- `src/stores/`: Pinia Store 定义，包含全局状态初始化。

## 📝 开发规范与约定

1. **路由自动化**: 始终在 `src/pages` 下创建 `.vue` 文件。对于需要登录的页面，默认开启认证；若需公开访问，需在页面中使用 `definePage({ meta: { auth: false } })`。
2. **组件自动导入**: `src/components` 目录下的组件以及 `@nuxt/ui` 组件 (以 `U` 开头) 无需手动导入，可直接在模板中使用。
3. **API 封装**: 优先使用 `src/api/request.ts` 中封装的 `useFetch` 进行网络请求。
4. **状态管理**: 全局用户状态存储在 `src/stores/sign.ts` 中。
5. **代码风格**: 严格遵循 ESLint 配置。建议在 IDE 中开启保存自动修复。
6. **类型定义**: 尽量使用 TypeScript 定义接口返回和组件 Props，Schema 定义应放在 `src/constant/schema.ts`。
