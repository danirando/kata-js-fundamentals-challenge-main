const { person, mainInstrument, bestFriend } = require('../src/03-objects.js')

describe('Fundamental Objects', () => {
  test('person', () => {
    expect(person).toEqual({
      age: 43,
      name: 'Matt',
      instruments: ['Guitar', 'Piano', 'Vocals'],
      profession: { name: 'Musician' },
      friends: [
        { name: 'Chris', age: 46 },
        { name: 'Dom', age: 43 }
      ]
    });
  });

  test('mainInstrument', () => {
    expect(mainInstrument).toEqual('Vocals');
  });

  test('bestFriend', () => {
    expect(bestFriend).toEqual('Chris');
  });
});
