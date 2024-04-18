# 全栈

课程会涉及到的一些知识点：

1. js基础语法
2. 前端技术和页面布局
3. express框架
4. ejs模版引擎做服务器端渲染(SSR)，选ejs的原因：
    1. 很多其他框架的模版语法和ejs是一样的
    2. ejs是最简单的一个模版引擎
    3. ejs可以在服务器端和客户端同时使用
5. ORM操作数据库
6. redis相关操作
7. react基础语法
8. antd组件库
9. antd pro做管理系统
10. vue+vant做移动端页面（尽量简化的讲）
11. 运维以及服务器相关知识，熟悉linux命令

## 环境搭建

node版本管理工具，建议大家一定要用

### nvm

我一直在用的，挺好用的。跨平台的node版本管理工具，比较老了

### fnm【强烈建议使用】

建议大家使用，真的挺好用的

## js基础知识

### js编码规范

[https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

首先，写代码要规范。在很多大型项目中，都会配置eslint代码规范性检测

简单的例子

```jsx
const str = "这是一个常量"
// let定义一个变量
const obj = {} //
obj.a = "这是一个属性"
```

如何提升自己的代码能力和规范性：

1. 多写
2. 多看优秀的开源项目
3. 学习一些好的代码风格

### 常见的语法

- 数组操作
    
    ```jsx
    // 数组定义
    const arr = []
    // push/pop/shift/unshift
    // sort，排序
    // splice，替换
    // forEach/map/reduce。这个forEach和map一定要会
    // concat 拼接
    // find/findIndex
    // filter 过滤
    const goods = [{
    	id: 1,
    	name: '商品1',
    	price: '12.91'
    },{
    	id: 2,
    	name: '商品2',
    	price: '12.96'
    },{
    	id: 3,
    	name: '商品3',
    	price: 13.18
    }].map(item=>({...item, price: item.price*1, chk: false}))
    
    // 对应的API用的越来越熟悉，代码就会写的越来越简洁
    ```
    
- 对象操作
    
    ```jsx
    // 拷贝
    const obj = { name: '小新', age: '15', fav: '美女' }
    const params = {...obj}
    params.name = "小葵"
    // 如果对象的属性值还是对象，就需要使用深拷贝
    // 对象转字符串在转对象
    // 或者使用lodash插件
    ```
    
- 字符串操作
    
    ```jsx
    // substr
    // includes/indexOf
    // startsWith
    // replace/replaceAll
    ```
    
- 循环
    
    ```jsx
    // for
    // while
    ```
    
- 条件语句
    
    ```jsx
    // if else
    // switch/case
    ```
    
- 异常捕获
    
    ```jsx
    
    // 懒人必备技能
    // try/catch
    ```
    
- Promise
    
    ```jsx
    // 三个状态
    // 状态不可逆
    // .then  成功
    // .catch 失败
    // .final 完成
    
    // async/await
    
    // Promise.all/.race/.any/.allSettled
    ```
    
- 网络请求
    
    ```jsx
    // fetch
    // XHR
    ```
    

## 写页面

是前端必备技能，也是做web开发一定要会的。web项目就是基于浏览器运行的，早几年的时候这种开发模式又叫BS架构

div+css实现页面布局

### html标签

组成页面的基本结构，常见的一些标签要会

### css样式

预处理语言SASS、LESS等等

css动画、以及移动端布局

**重点：一定要会Flex布局**

## 服务器端和客户端的区别

服务器端就是服务器，是别人的电脑。是提供服务，生成数据的

客户端就是自己的电脑，我们请求的网页会在客户端上运行，在客户的浏览器上进行运行解析

## express

[express](https://expressjs.com/zh-cn/)是一个基于nodejs的web开发框架，可以让我们快速的搭建一个web服务器

使用模版引擎进行服务器端渲染

## prisma

一个nodejs的ORM框架，连数据库的

[https://www.prisma.io/](https://www.prisma.io/)

```bash
npm i prisma -D
npx prisma init --datasource-provider mysql
```

## redis

node结合redis实现验证码功能，接下来需要使用前端代码调一下这个接口，实现前后端一起跑通

## react实现和服务器接口通信

创建项目

```bash
npm init vite@latest # 使用vite搭建项目，根据提示创建一个react项目
npm i # 安装依赖
npm run dev # 启动
```

### 基础语法

jsx语法，就是我们可以直接在js中书写html标签

```jsx
// 目前对于react来讲最推荐的组件定义方式是函数式组件
// 函数式组件+hooks来实现
// 选择技术框架的时候最重要的是生态
// 技术的中立性
function Demo() {
	const clickHandle= () => {
	   // 此处可以编写逻辑
	}
	// 使用{ js表达式 }
	return (<>
			<h1>这是一个组件---{1+2}</h1>
			<button onClick={clickHandle}>按钮</button>
		</>)
	
}
```

### 编辑器配置

一般可以在自己的编辑器中安装插件，便于开发

**ES7+ React/Redux/React-Native/JS snippets**

### 插件的使用

- 路由
    
    react-router-dom实现页面跳转
    
    react的路由每一个版本的写法都有差异
    
- ui组件库
    - antd
    - tailwindcss
    - mui(google)

### antd pro

[官网](https://pro.ant.design/zh-CN/)

**约定大于配置**

```bash
npx @ant-design/pro-cli create manager-app # 创建项目
# https://pro.ant.design/zh-CN/docs/getting-started/
```

## vue相关的

。。。

## 具体实现项目时候

做什么？就需要从用户的角度出发

### 需求整理

1. 想好自己要做什么
2. 先做一个大概的方案
3. 慢慢的梳理自己的思路，进行细化
4. 不需要完美的呈现每一个细节，有大框架就好
5. 在大框架实现的过程中，肯定会有新的想法或者需求，再加进去
6. 最终形成完整的方案

### 技术实现

1. 选择自己每一部分使用的技术方案
2. 考虑技术成本
3. 评估一下实现中的一些风险