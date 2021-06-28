import React from 'react';

const Gameboard = () => {
    const gameboard = [];
    
    const buildGameboard = () => {
        for (let i = 0; i < 10; i++) {
            const row = [];
    
            for (let j = 0; j < 10; j++) {
                row[j] = {
                    position: `${String.fromCharCode(65 + i)}${j + 1}`
                }
            }
    
            gameboard[i] = row;
        }
    }

    return {
        build: buildGameboard,
        gameboard: gameboard
    }
}

module.exports = Gameboard;