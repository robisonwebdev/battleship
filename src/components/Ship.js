import React from 'react';

const Ship = (name, length) => {
    const shipHull = [];
    const shipSunk = false;

    for (let i = 0; i < length; i++) {
        shipHull[i] = {
            damage: false
        }
    }

    const hit = (position) => {
        if (position >= 1 && position <= 4) {
            shipHull[position - 1].damage = true;
        }
    }

    return {
        name: name,
        length: length,
        hit: hit,
        hull: shipHull
    };
}



module.exports = Ship;