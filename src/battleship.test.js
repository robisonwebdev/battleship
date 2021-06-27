const ship = require('./components/Ship');

test('Is the ship sunk?, Yes', () => {
    let patrolBoat = ship('Patrol Boat', 4);
    patrolBoat.hit(1)
    patrolBoat.hit(2)
    patrolBoat.hit(3)
    patrolBoat.hit(4)

    expect(patrolBoat.sunk()).toBe(true);
})

test('Is the ship sunk?, No', () => {
    let patrolBoat = ship('Patrol Boat', 4);
    patrolBoat.hit(1)
    patrolBoat.hit(2)
    patrolBoat.hit(4)

    expect(patrolBoat.sunk()).toBe(false);
})

test('Ship Hull', () => {
    let patrolBoat = ship('Patrol Boat', 4);
    patrolBoat.hit(2);

    expect(patrolBoat.hull[1]).toStrictEqual({'damage': true});
})

test('Ship name', () => {
    let patrolBoat = ship('Patrol Boat', 4);

    expect(patrolBoat.name).toBe('Patrol Boat');
});

test('Ship length', () => {
    let patrolBoat = ship('Patrol Boat', 4);

    expect(patrolBoat.length).toBe(4);
});

// test('Ship hit test', () => {
//     let patrolBoat = ship('Patrol Boat', 4);

//     expect(patrolBoat.hit(2)).toBe("Position 2 hit!");
// });