import React from 'react';

const Ship = (name, length, hit, sunk) => {
    return {
        name: name,
        length: length,
        hit: hit,
        sunk: sunk
    };
}

module.exports = Ship;