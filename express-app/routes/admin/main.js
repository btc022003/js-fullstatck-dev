const express = require('express');
const router = express.Router(); // Router实现路由拆分

router.get('/', (req, res) => {
  res.render('admin/main');
});

module.exports = router;
