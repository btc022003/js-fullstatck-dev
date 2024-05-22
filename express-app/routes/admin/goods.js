const express = require('express');
const router = express.Router(); // Router实现路由拆分
const prisma = require('../../db');

router.get('/', async (req, res) => {
  // 查询
  const goods = await prisma.goods.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc',
    },
  });
  res.render('admin/goods/index', {
    goods,
  });
});

router.get('/add', (req, res) => {
  res.render('admin/goods/add');
});

router.post('/add', async (req, res) => {
  // console.log(req.body);
  // 新增
  await prisma.goods.create({
    data: {
      name: req.body.name,
      price: req.body.price * 1,
    },
  });
  // res.send('添加商品');
  res.redirect('/admin/goods'); // 重定向到列表页
});

module.exports = router;
