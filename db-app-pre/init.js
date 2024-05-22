const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma
  .$connect()
  .then(async () => {
    console.log('连接成功');
    // initCountries();
    // initPeople();
    const people = await prisma.person.findMany({
      where: {},
      orderBy: {
        createdAt: 'desc',
      },
      // 进行关联查询
      include: {
        country: true,
      },
    });
    console.log(people);
  })
  .catch((err) => {
    console.log(err);
  });

async function initCountries() {
  // findMany 查找多个，返回一个集合
  const resCountries = await prisma.country.count({
    where: {}, // 查询条件
    // orderBy: {
    //   createdAt: 'desc',
    // }, // 排序
  });
  // console.log(resCountries);
  if (resCountries == 0) {
    // 没有数据的时候进行初始化设置
    // 因为sqllite 不支持批量插入，所以我们需要一个一个加
    // await prisma.country.createMany({
    //   data: []
    // })
    await prisma.country.create({
      data: {
        name: '中国',
        img: 'https://flagcdn.com/w40/cn.png',
      },
    });
    await prisma.country.create({
      data: {
        name: '韩国',
        img: 'https://flagcdn.com/w40/kr.png',
      },
    });
    console.log('数据初始化成功');
  }
}

async function initPeople() {
  const resPeople = await prisma.person.count({
    where: {},
  });
  if (resPeople == 0) {
    // 获取国家信息
    const countries = await prisma.country.findMany({
      where: {},
    });
    await prisma.person.create({
      data: {
        name: '孙悟空',
        desc: '一个神话人物',
        countryId: countries.find((item) => item.name == '中国').id,
      },
    });

    await prisma.person.create({
      data: {
        name: '猪八戒',
        desc: '一个神话人物',
        countryId: countries.find((item) => item.name == '中国').id,
      },
    });

    await prisma.person.create({
      data: {
        name: '安贞焕',
        desc: '一个运动员',
        countryId: countries.find((item) => item.name == '韩国').id,
      },
    });
  }
}
