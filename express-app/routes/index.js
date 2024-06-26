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

// ejs模版引擎的常用语法
// <%= js表达式 %>
// <%- 这里可以输出以恶搞富文本内容 %>
// <% js代码 %>
router.get('/home', (req, res) => {
  // 写数据库查询操作的时候 需要用到异步
  setTimeout(() => {
    //
    res.render('home/index', {
      title: '首页',
      desc: '这是第一个页面',
      list: [1, 2, 3, 4],
      strHtml: `<div style="background-color: red;padding: 2rem; color: white;">
        <h1>这是一个一级标题</h1>
      </div>`,
    });
  }, 5000);
});

module.exports = router;
