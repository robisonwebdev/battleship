import React from 'react';

const Ship = (name, length) => {
    const hit = (position) => {
        console.log(`Position ${position} hit!`);
    }
    
    return {
        name: name,
        length: length,
        hit: hit,
        sunk: sunk
    };
}



module.exports = Ship;