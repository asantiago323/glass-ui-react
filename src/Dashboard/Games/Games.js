import React from 'react';
import './Games.css';

import Game from './Game/Game'

const Games = () => {
    const games = [
        {
            img: '/images/assassins.png',
            title: 'Assassins Creed Valhalla',
            version: 'PS5 Version',
            percentage: '60%'
        },
        {
            img: '/images/sackboy.png',
            title: 'Sackboy A Great Advanture',
            version: 'PS5 Version',
            percentage: '60%'
        },
        {
            img: '/images/spiderman.png',
            title: 'Spiderman Miles Morales',
            version: 'PS5 Version',
            percentage: '60%'
        }
    ];
    return (
        <div className="games">
          <div className="status">
            <h1>Active Games</h1>
            <input type="text" />
          </div>
          <div className="cards">
            {
                games.map((game) => (
                    <Game
                        key={game.title}
                        img={game.img}
                        title={game.title}
                        version={game.version}
                        percentage={game.percentage}
                    />
                ))
            }
          </div>
        </div>
    );
}

export default Games;
