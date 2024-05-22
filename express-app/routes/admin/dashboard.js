const { exec } = require('child_process');
const router = require('express').Router();

router.get('/', (req, res) => {
  // 起一个子进程，执行一个其他语言的代码
  exec('python py.py', (err, data) => {
    console.log(data);
    res.render('admin/dashboard', {
      data,
    });
  });
});

module.exports = router;
