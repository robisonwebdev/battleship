import React from 'react';

const Ship = (length, hit, sunk) => {
    return {
        length: length,
        hit: hit,
        sunk: sunk
    };
}

module.exports = Ship;