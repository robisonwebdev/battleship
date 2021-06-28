import React from 'react';

const Ship = (name, length) => {
    const shipHull = [];
    let shipSunk = false;

    for (let i = 0; i < length; i++) {
        shipHull[i] = {
            damage: false
        }
    }

    const hit = (position) => {
        if (position >= 1 && position <= length) {
            shipHull[position - 1].damage = true;
        }
    }

    const isSunk = () => {
        let allDamaged = shipHull.every(position => position.damage == true);

        allDamaged ? shipSunk = true : shipSunk = false;

        return shipSunk;
    }

    return {
        name: name,
        length: length,
        hit: hit,
        hull: shipHull,
        sunk: isSunk
    };
}



module.exports = Ship;