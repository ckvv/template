export const zhCN = {
  shell: {
    eyebrow: 'electron-vite',
    title: 'Electron + Vite 桌面应用启动模板',
    description: '面向桌面产品原型与正式项目的基础骨架，内置进程分层、路由、国际化与可扩展的 Vue 界面结构。',
    languageLabel: '语言',
    languageSwitch: '切换语言',
  },
  navigation: {
    ariaLabel: '应用导航',
  },
  home: {
    eyebrow: '首页',
    title: '从桌面壳到业务页面，一套可直接继续开发的起点',
    body: '这个模板把 Electron 主进程、preload 桥接与 Vue 渲染层拆分清楚，同时保留足够轻量的默认实现，适合快速启动管理后台、工具型桌面应用或内部工作台。',
    meta: {
      runtime: 'Electron Forge + Vite',
      router: 'Vue Router 自动路由',
      i18n: '内置中英文切换',
    },
    sections: {
      highlights: '模板能力',
      quickStart: '快速开始',
    },
    highlights: {
      stack: {
        title: '现代前端栈直接就绪',
        body: '渲染层使用 Vue 3、TypeScript、Tailwind CSS 与 Nuxt UI，适合继续扩展表单、设置页、列表页和仪表盘。',
      },
      desktop: {
        title: '桌面进程边界清晰',
        body: '主进程负责窗口与生命周期，preload 负责安全桥接，renderer 专注界面交互，后续接入系统能力时不会互相缠绕。',
      },
      scale: {
        title: '适合从模板演进到正式项目',
        body: '当前目录已经按 runtime 责任分区，新增页面、桥接 API 或窗口模块时可以自然扩展，不需要推翻已有结构。',
      },
    },
    quickStart: {
      title: '保留默认约定，先把应用跑起来',
      install: 'pnpm install',
      dev: 'pnpm start',
      package: 'pnpm package',
      note: '开发阶段先用启动与打包流程验证主进程、预加载脚本和渲染层是否协同正常，再逐步加入业务模块。',
    },
  },
  about: {
    eyebrow: '关于',
    title: '为 Electron 桌面应用整理出的默认工程边界',
    body: '项目没有塞入过多业务假设，而是优先约束好目录职责、页面壳层和基础依赖，让你在继续开发时可以把注意力放在业务本身。',
    sections: {
      boundaries: '职责划分',
      scenarios: '适用场景',
    },
    boundaries: {
      main: {
        title: 'main: 窗口、生命周期与系统交互入口',
        body: '把应用启动、窗口创建、菜单、托盘以及未来的系统级能力收敛在主进程，避免把桌面逻辑散落到渲染层。',
      },
      preload: {
        title: 'preload: 安全桥接桌面能力',
        body: '作为 renderer 与 Electron API 的中间层，适合暴露有限且可审计的接口，降低直接暴露 Node 能力带来的风险。',
      },
      renderer: {
        title: 'renderer: 面向功能的界面组织',
        body: '路由页面保持精简，布局、组件与 composables 分层明确，后续扩展设置中心、数据面板或多语言内容都会更顺手。',
      },
    },
    scenariosTitle: '适合在这些方向上继续扩展',
    scenarios: {
      settings: '设置中心、偏好配置、账户信息等典型桌面应用页面。',
      integrations: '通过 preload 暴露文件系统、剪贴板、本地缓存或外部进程调用能力。',
      distribution: '在完成功能后继续接入打包、签名与发布流程，演进成可分发的桌面产品。',
    },
  },
  locale: {
    'zh-CN': '中文',
    'en': 'English',
  },
} as const

type LocaleSchema<T> = {
  [Key in keyof T]: T[Key] extends string ? string : LocaleSchema<T[Key]>
}

export type MessageSchema = LocaleSchema<typeof zhCN>
