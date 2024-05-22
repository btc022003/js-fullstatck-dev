const { log } = require('./utils/tools');
const a1 = require('./utils/a');
log(a1, 'a1直接引入');
// a1.add();
// log(a1, '调用add函数');

const a2 = require('./utils/a');
// log(a2, 'a2重新引入');
a1.total += 1;
log(a2, '改变a1中total的值之后');

// 模块引入和js中的浅拷贝不一样

// const db = require('./db');

// const bb = {
//   total: 1,
//   person: { id: 1, name: 'jerry' },
//   add() {
//     this.total += 1;
//     this.person.id++;
//   },
// };
// log(bb, '第一次赋值');
// const cc = { ...bb };
// log(cc, '设置变量cc值=bb');
// bb.add();
// bb.total++;
// log(bb, '输出bb，调用bb上的add函数');
// log(cc, '输出cc，调用bb上的add函数');
