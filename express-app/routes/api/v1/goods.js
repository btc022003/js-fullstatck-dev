var express = require('express');
var router = express.Router(); // Router实现路由拆分

const goods = [
  {
    name: '商品A',
    price: 99.99,
    description: '优质原材料制作，精致工艺，功能齐全的商品A，性价比极高。',
    mainImage: 'https://example.com/images/productA_main.jpg',
  },
  {
    name: '商品B',
    price: 149.99,
    description: '热销款式商品B，采用环保材料，设计时尚，深受消费者喜爱。',
    mainImage: 'https://example.com/images/productB_main.jpg',
  },
  {
    name: '商品C',
    price: 59.99,
    description: '经典实用商品C，简约大方，经久耐用，满足日常需求。',
    mainImage: 'https://example.com/images/productC_main.jpg',
  },
  {
    name: '商品D',
    price: 279.99,
    description: '高端旗舰商品D，搭载先进技术，性能卓越，尽享极致体验。',
    mainImage: 'https://example.com/images/productD_main.jpg',
  },
  {
    name: '商品E',
    price: 69.99,
    description: '多功能商品E，一物多用，节省空间，居家必备良品。',
    mainImage: 'https://example.com/images/productE_main.jpg',
  },
  {
    name: '商品F',
    price: 39.99,
    description: '经济实惠商品F，品质可靠，物超所值，广受好评。',
    mainImage: 'https://example.com/images/productF_main.jpg',
  },
  {
    name: '商品G',
    price: 109.99,
    description: '创意设计商品G，独特造型，提升生活格调，赠送亲友佳选。',
    mainImage: 'https://example.com/images/productG_main.jpg',
  },
  {
    name: '商品H',
    price: 99.99,
    description: '专业级商品H，专为特定用户群体定制，具备专业特性和精细做工。',
    mainImage: 'https://example.com/images/productH_main.jpg',
  },
];

router.get('/', (req, res) => {
  res.json({
    success: true,
    errorMessage: '',
    data: {
      list: goods,
      page: 1,
      total: 8,
    },
  });
});

module.exports = router;
