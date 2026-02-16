const { a, b, c } = require('../src/04-calling-functions.js');

describe('Calling Functions:', () => {
  test('hello', () => {
    expect(a).toBe('Hello');
  });

  test('helloToJane', () => {
    expect(b).toBe('Hello Jane!');
  });

  test('helloToBob3Times', () => {
    expect(c).toBe('Hello Bob!Hello Bob!Hello Bob!');
  });
});
