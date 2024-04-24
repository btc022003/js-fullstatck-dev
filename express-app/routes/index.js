var express = require('express');
var router = express.Router(); // Router实现路由拆分

/* GET home page. */
router.get('/', function (req, res, next) {
  // render
  //  作用是使用模版文件渲染显示
  //  第一个参数是模版文件的名字
  //  第二个参数是渲染模版所需要的参数
  res.render('index', { title: '妖仙姐姐' });
});

router.get('/home', (req, res) => {
  res.render('home/index', {
    title: '首页',
    desc: '这是第一个页面',
    list: [1, 2, 3, 4],
  });
});

module.exports = router;
