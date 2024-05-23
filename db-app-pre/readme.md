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

## 常用的一些方法

- findMany，查找多个，返回一个集合
- findFirst，查找第一个，返回单个数据
- findUnique，查找唯一的一个
- create，创建一个，不能在sqlite数据库中使用
- createMany，创建多个
- count，计算数量
- update，更新一个
- updateMany，更新多个
- delete，删除一个
- deleteMany，删除多个

## 常用的属性

- where，查询条件
  - contains，包含，类似于like，做模糊查询
  - Or，或
- orderBy，排序方式
- include，关联查询
- select，指定查询的字段
- skip，跳过指定的数量
- limit，限制查询的数量

