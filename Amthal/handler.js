const AMTHAl = require("./Data/index.json");

const randomMathal = () => {
  return AMTHAl[~~(Math.random() * AMTHAl.length)];
};

const randomTen = () => {
  let RandomAmthals = new Set();
  while (RandomAmthals.size < 10)
    RandomAmthals.add(AMTHAl[~~(Math.random() * AMTHAl.length)]);

  return [...RandomAmthals];
};

module.exports = { randomMathal, randomTen };
