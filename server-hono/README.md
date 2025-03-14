[我的博客](https://ckvv.github.io/) 使用的后台 API, 部署在 cloudflare.

# API

## 对象存储API (https://api.ckvv.net/r2)
由于 Wrangler 限制, 仅支持上传最大 315MB 的文件。要上传大文件，可以选择rclone或S3 兼容工具。
### 增加文件
路径: `/`
方法: `GET`
参数:
返回值:
### 删除文件
路径: `/:key`
方法: `DELETE`
参数:
返回值:
### 查询文件列表
路径: `/`
方法: `GET`
参数:
返回值:
### 获取文件
路径: `/:key`
方法: `GET`
参数:
返回值:

## 背景 API (https://api.ckvv.net/pattern)
生成 SVG 背景花纹

### 获取随机花纹
路径: `/random`

![](https://api.ckvv.net/pattern/random)
### 获取指定花纹

路径: `/:key.svg`

![](https://api.ckvv.net/pattern/demo.svg)

## 图片占位API (https://api.ckvv.net/photos)
用于生成指定大小颜色的占位图

### 获取随机占位图

路径: `/random`

![](https://api.ckvv.net/photos/random)

### 获取指定大小占位图
路径: `/:w/:h`

![](https://api.ckvv.net/photos/200/200)
