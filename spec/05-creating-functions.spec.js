const { a, b, c, d, e } = require('../src/05-creating-functions.js');

describe('Creating Functions:', () => {
  describe('Task 1', () => {
    test('increment adds 1', () => {
      expect(a(1)).toBe(2);
    });
  });

  describe('Task 2', () => {
    test('capitalises any string', () => {
      expect(b('hello')).toBe('Hello');
    });
    test('capitalises any string', () => {
      expect(b('Hello')).toBe('Hello');
    });
  });

  describe('Task 3', () => {
    test('returns string with smiley', () => {
      expect(c('edward')).toBe('Hi, Edward :)');
    });

    test('returns string with smiley', () => {
      expect(c('Aiyana')).toBe('Hi, Aiyana :)');
    });
  });

  describe('Task 4', () => {
    test('returns string count', () => {
      expect(d(['edward'])).toBe(1);
    });
    test('returns string count', () => {
      expect(d(['edward', 'aiyana'])).toBe(2);
    });
    test('returns string count', () => {
      expect(d([1])).toBe(0);
    });
    test('returns string count', () => {
      expect(d([1, 'edward'])).toBe(1);
    });
  });

  describe('Task 5', () => {
    test('adds prop to object if it does not exist', () => {
      expect(e({})).toEqual({ edward: 'amazing' });
    });
    test('adds prop to object if it does not exist', () => {
      expect(e({ aiyana: 'fantastic' })).toEqual({
        aiyana: 'fantastic',
        edward: 'amazing',
      });
    });
    test('adds prop to object if it does not exist', () => {
      expect(e({ edward: 'fabulous' })).toEqual({ edward: 'fabulous' });
    });
  });
});
