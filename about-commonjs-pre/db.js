const { log } = require('./utils/tools');
const a1 = require('./utils/a');
a1.add();
log(a1, 'db文件中引入a1');

module.exports = {};
