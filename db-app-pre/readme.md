# 数据库操作

## Prisma

这是一个ORM框架，用来操作数据库

[官网](https://www.prisma.io/)

```bash
npm install prisma -D
npx prisma init --datasource-provider sqlite # 初始化数据库连接配置文件，可以自己指定需要的数据库

# 创建好model之后，执行
npx prisma db push # 生成数据库
```
