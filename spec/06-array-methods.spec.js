// 06-array-methods.spec.js
const { printElements, doubleNumbers, filterEven } = require('../src/06-array-methods');


describe('doubleNumbers', () => {
  it('restituisce un nuovo array con i numeri raddoppiati', () => {
    expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
    expect(doubleNumbers([0, -1])).toEqual([0, -2]);
  });
});

describe('filterEven', () => {
  it('restituisce solo i numeri pari', () => {
    expect(filterEven([1, 2, 3, 4])).toEqual([2, 4]);
    expect(filterEven([1, 3, 5])).toEqual([]);
  });
});
