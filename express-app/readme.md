# 8:30继续

>

## tailwindcss使用

安装官网的说明进行安装，修改配置文件

```bash
npm install -D tailwindcss
npx tailwindcss init
# tailwind.config.js修改配置文件
# content: ['./views/**/*.ejs'],
# 监听ejs文件中代码的改变，自动编译生成css
npx tailwindcss -i ./public/css/style.css -o ./public/css/main.css --watch
```

## 引入

- commonJS引入就是一般的引用，不涉及到拷贝
- es6方式引入是一种只读的模式
