const ship = require('./components/Ship');

test('Setup Test', () => {
    expect(ship('Patrol Boat', 4, false, false)).toStrictEqual({"name": "Patrol Boat", "hit": false, "length": 4, "sunk": false});
});