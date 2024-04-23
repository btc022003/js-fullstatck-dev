# 8:40继续

## 安装软件

在mac中安装软件的时候一定要使用brew

## web服务器

### express

express是一个基于nodejs的web开发框架

因为它是最基础，最简单的一个框架，可以让我们明白什么是web服务器以及ssr(Server Side Rendering)

```bash
npm i express # 安装express
```

### MVC

MVC是一种软件开发模式，分为三部分：
- Model（数据），用来存储和操作数据
- View（视图），用来展示数据
- Controller（控制器），是控制数据以什么形式展示，用来串联视图和数据
### nodemon

是一个开发的时候常用的插件，会监听我们文件的改变，改变之后自动重启代码

```bash
npm i nodemon -D # 安装插件
# 需要自己手动修改package.json文件，添加启动命令
```
