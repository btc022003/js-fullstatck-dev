let total = 1;
const person = {
  id: 1,
  name: 'Tom',
};

const add = () => {
  total = total + 1;
  person.id++;
};

module.exports = {
  total,
  person,
  add,
};
