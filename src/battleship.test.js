const ship = require('./components/Ship');

test('Setup Test', () => {
    let patrolBoat = ship('Patrol Boat', 4);

    expect(patrolBoat.name).toBe('Patrol Boat');
});

test('Setup Test', () => {
    let patrolBoat = ship('Patrol Boat', 4);

    expect(patrolBoat.length).toBe(4);
});

test('Setup Test', () => {
    let patrolBoat = ship('Patrol Boat', 4);

    expect(patrolBoat.hit(2)).toBe("Position 2 hit!");
});