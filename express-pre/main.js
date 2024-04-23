// 可以在package.json文件中设置type为module，这样就可以直接使用es6的导入和导出方案了
import dayjs from 'dayjs';
import _ from 'lodash';
import { sum, title } from './tools.js';

// console.log(sum(2, 3));
// console.log(title);

// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));

const people = ['犬夜叉', '杀生丸', '桔梗', '戈薇', '珊瑚'];
console.log(_.sampleSize(people, 3)); // 使用lodash插件实现从数组中随机获取指定数量的数据
