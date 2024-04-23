import express from 'express';

const app = express(); // 实例

// 我们需要在代码中添加解析请求体数据的函数
app.use(express.json()); // 让我们的实例能够解析请求体中的json数据
app.use(express.urlencoded({ extended: false })); // 可以解析url编码的数据

// 在express中，路由地址查找是从上往下进行的
// 当匹配到一个之后就不会继续往下找了

// 常见的请求方式，理论上的
//  get【实际用最多】
//  post【实际用最多】
//  patch
//  put
//  delete

// 监听get请求
//  参数一 表示我们请求的地址，就是url中的path路径
//  参数二 是一个回调函数
//    req，request 请求
//    res，response 响应
app.get('/', (req, res) => {
  // 200  成功
  // 301  重定向
  // 201  成功，读取的是缓存数据
  // 404  数据或者是页面找不到，一般情况下是客户端的请求地址出错
  // 400  表示客户端传递的数据有问题
  // 403  访问的资源被拒绝
  // 401  未授权
  // 500  服务器端错误
  // res.status(502); // 此处的状态码是服务器端可以随意设置的
  // 表示返回一个json数据
  res.json({
    code: 404, // 这个code不是网络请求的状态码，这个是自定义的数据
    data: {},
  });
  // 响应的数据在响应头中会有差异
  // res.send(`{"code": 998}`);
});

app.get('/goods.php', (req, res) => {
  res.json({
    code: 200,
    data: {
      list: [],
    },
  });
});

app.get('/goods', (req, res) => {
  res.json({
    code: 201,
    data: {
      list: [],
      total: 0,
    },
  });
});

app.post('/goods', (req, res) => {
  console.log(req.body); // req.body
  res.json({
    code: 200,
    data: '保存成功',
  });
});

// 监听端口号，会帮我们起一个进程，监听所有的向我们这台电脑发起的http请求
//  端口号为3003的
// 0-65535
// 设置端口号的时候尽量避开那些特殊的端口号
// 80   http的默认端口号
// 21   ftp的默认端口号，ftp是文件传输协议
//  使用ftp客户端工具
// 22   ssh的默认端口号
// 443  https的默认端口号
app.listen(3003, () => {
  console.log('server is running on 3003');
});
