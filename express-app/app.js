var createError = require('http-errors'); // 错误处理
var express = require('express'); // express
var path = require('path'); // path用来做路径解析的
var cookieParser = require('cookie-parser'); // 这个是用来格式化cookie
var logger = require('morgan'); // 输出日志

var indexRouter = require('./routes/index'); // 引入我们自己的功能模块
var usersRouter = require('./routes/users');

var app = express(); // express实例

// 设置模版引擎，模版引擎的作用就是代替我们做字符串拼接
// view engine setup
app.set('views', path.join(__dirname, 'views')); // 设置模版引擎的路径
app.set('view engine', 'ejs'); // 设置使用的模版引擎的名字

app.use(logger('dev')); // 使用中间件(middleware)
app.use(express.json()); // 处理json格式的请求体
app.use(express.urlencoded({ extended: false })); // 处理urlencoded格式的请求体
app.use(cookieParser()); // 处理cookie

// 静态资源目录
app.use(express.static(path.join(__dirname, 'public')));

// 使用我们的功能模块
app.use('/', indexRouter);
// app.use('/users', usersRouter);

// 后面开始写api接口
//  参数一 是url中访问的路径，是一个网址
//  参数二 是我们访问这个地址的时候处理我们请求的对应的文件信息，是一个文件路径
app.use('/api/v1/goods', require('./routes/api/v1/goods'));

app.use('/admin/main', require('./routes/admin/main'));
app.use('/admin/dashboard', require('./routes/admin/dashboard'));

app.get('/login', (req, res) => {
  res.render('login', { errorMessage: '' });
});

app.post('/login', (req, res) => {
  // console.log(req.body);
  if (req.body.userName == 'xiaohei') {
    res.cookie('token', '666', { path: '/', httpOnly: true }); // 这段话的作用是设置cookie
    res.redirect('/user'); //
  } else {
    res.render('login', { errorMessage: '用户名或者密码错误' });
  }
});

// 此处为了快速演示效果，所以我不验证登陆
app.use('/admin/goods', require('./routes/admin/goods')); // /admin/goods/xxx

// 路由是从上往下找的，我们把需要验证登陆的路由信息都写在了这个验证之后
app.all('*', (req, res, next) => {
  if (req.cookies.token) {
    next();
  } else {
    res.redirect('/login'); // 表示重定向
  }
});

// 当我访问users开头的地址的时候，就会进行验证
app.use('/user', require('./routes/users'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
