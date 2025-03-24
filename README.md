
# 功能

## 创建项目的模板

+ [ ] ⭐ bin
+ [ ] ⭐ client-electron
+ [ ] ⭐ client-tauri
+ [ ] lib-js
+ [ ] lib-vue
+ [ ] ⭐ react-next
+ [ ] ⭐ react-vite
+ [ ] server-elysia
+ [ ] server-fastify
+ [ ] server-h3
+ [x] server-hono
+ [ ] server-koa
+ [ ] server-midway
+ [x] ⭐ server-nest
+ [ ] ⭐ server-nitro
+ [ ] vue-nuxt
+ [x] vue-vite

## 下载

```shell
# 使用 @ckpack/git-dl 下载 ckvv/template vue-vite 子文件夹
pnpx @ckpack/git-dl ckvv/template -s "vue-vite"

# 或者 全局安装依赖
pnpm add -g @ckpack/git-dl
# 下载 ckvv/template vue-vite 子文件夹
git-dl ckvv/template -s "vue-vite"
```

## 架构
数据库: PG
ORM: drizzle sequelize prisma
开发语言: TS

## 功能

登录
注册
登录后可以查看当前注册的用户
不登录可以查看功能介绍

## 部署方案

部署选择: vercel, nuxthub, netlify
后端基于 hono | h3 | nitro 部署在 cloudflare
前端: 部署在 https://nuxt.com/deploy
