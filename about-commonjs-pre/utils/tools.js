const log = (data, tag = '') => {
  console.log('----start ' + tag + '----');
  console.log(data);
  console.log('----end ' + tag + '----');
};

module.exports = {
  log,
};
