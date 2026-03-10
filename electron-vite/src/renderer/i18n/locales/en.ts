import type { MessageSchema } from '@/i18n/locales/zh-CN'

export const en = {
  shell: {
    eyebrow: 'electron-vite',
    title: 'Electron + Vite desktop app starter',
    description: 'A practical baseline for desktop prototypes and production apps with clear process boundaries, routing, i18n, and a scalable Vue UI structure.',
    languageLabel: 'Language',
    languageSwitch: 'Switch language',
  },
  navigation: {
    ariaLabel: 'Application navigation',
  },
  home: {
    eyebrow: 'Home',
    title: 'A starting point you can keep building on from shell to feature screens',
    body: 'This starter cleanly separates the Electron main process, preload bridge, and Vue renderer while staying lightweight enough for dashboards, utilities, and internal desktop tools.',
    meta: {
      runtime: 'Electron Forge + Vite',
      router: 'Vue Router auto routes',
      i18n: 'Built-in locale switcher',
    },
    sections: {
      highlights: 'What is included',
      quickStart: 'Quick start',
    },
    highlights: {
      stack: {
        title: 'Modern frontend stack included',
        body: 'The renderer ships with Vue 3, TypeScript, Tailwind CSS, and Nuxt UI so forms, settings, dashboards, and data views can be added without extra setup.',
      },
      desktop: {
        title: 'Desktop responsibilities stay clear',
        body: 'Main owns windows and lifecycle, preload exposes safe bridges, and renderer stays focused on UX so future native capabilities do not leak across layers.',
      },
      scale: {
        title: 'Built to grow past the template phase',
        body: 'The directory layout already follows runtime ownership, making it straightforward to add new screens, bridge APIs, or window modules without restructuring later.',
      },
    },
    quickStart: {
      title: 'Keep the default conventions and get the app running first',
      install: 'pnpm install',
      dev: 'pnpm start',
      package: 'pnpm package',
      note: 'Validate the startup and packaging flow first so the main process, preload script, and renderer work together before layering in business features.',
    },
  },
  about: {
    eyebrow: 'About',
    title: 'Default project boundaries tailored for Electron desktop apps',
    body: 'Instead of baking in heavy business assumptions, this project focuses on clean directory ownership, a usable app shell, and the core dependencies most desktop apps need first.',
    sections: {
      boundaries: 'Ownership',
      scenarios: 'Good fits',
    },
    boundaries: {
      main: {
        title: 'main: windows, lifecycle, and OS entry points',
        body: 'Use the main process as the home for bootstrapping, BrowserWindow management, menus, tray behavior, and future system-level integrations.',
      },
      preload: {
        title: 'preload: the safe bridge for desktop APIs',
        body: 'Expose a narrow, auditable surface between renderer and Electron APIs so Node capabilities stay controlled instead of leaking directly into the UI layer.',
      },
      renderer: {
        title: 'renderer: UI organized around features',
        body: 'Route files stay thin while layouts, components, and composables remain focused, which makes settings screens, dashboards, and localized content easier to scale.',
      },
    },
    scenariosTitle: 'Good directions to extend this starter',
    scenarios: {
      settings: 'Settings centers, preference panels, account pages, and other common desktop app flows.',
      integrations: 'File system access, clipboard features, local persistence, or external process integration through preload APIs.',
      distribution: 'Packaging, signing, and release automation once the application is ready to ship as a desktop product.',
    },
  },
  locale: {
    'zh-CN': '中文',
    'en': 'English',
  },
} satisfies MessageSchema
