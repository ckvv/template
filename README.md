
# 功能

## 创建项目的模板

+ [x] bin 参考 <https://github.com/ckpack/git-dl>
+ [ ] 🧠 client-electron
+ [ ] 🧠 client-tauri
+ [x] lib-js
+ [x] lib-vue 参考 <https://github.com/ckpack/v-ui>
+ [ ] 🧠 react-next
+ [ ] 🧠 react-vite
+ [ ] server-artus
+ [ ] server-elysia
+ [x] server-fastify
+ [x] server-h3
+ [x] server-hono
+ [x] 🚧 server-koa
+ [ ] server-midway
+ [x] 🚧 server-nest
+ [ ] server-nitro
+ [x] 🚧 vue-nuxt
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

+ 数据库: PG
+ ORM: drizzle sequelize prisma
+ 开发语言: TS

## 功能

+ 登录
+ 注册
+ JWT
+ 查看当前登录用户

## 部署方案

+ [cloudflare](https://dash.cloudflare.com/)
+ [vercel](https://vercel.com/)
+ [nuxthub](https://admin.hub.nuxt.com/)
+ [netlify](https://app.netlify.com/)
