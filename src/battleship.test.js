const ship = require('./components/Ship');

test('Setup Test', () => {
    expect(ship(4, false, false)).toStrictEqual({"hit": false, "length": 4, "sunk": false});
});