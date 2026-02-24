// 06-array-methods.js

// 1. Use map to create a new array with the numbers doubled
function doubleNumbers(arr) {
  const double = arr.map((e) => e * 2);
  return double;
}

// 2. Use filter to return only even numbers
function filterEven(arr) {
  const filter = arr.filter((e) => e % 2 == 0);
  return filter;
}

module.exports = {
  doubleNumbers,
  filterEven,
};
