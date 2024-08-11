import React, {useState} from 'react';
import PlayerBoard from './PlayerBoard';

function GameBoard({ players }) {  
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const clickAction = (action) => {
    const newPlayers = [...players];
    
    const player = newPlayers[currentPlayer];
    switch (action) {
      case '+1':
        player.number += 1;
        break;
      case '-1':
        player.number -= 1;
        break;
      case '*2':
        player.number *= 2;
        break;
      case '/2':
        player.number = Math.floor(player.number / 2);
        break;
      default:
        break;
    }
    player.steps += 1;

  
    setCurrentPlayer((currentPlayer + 1) % players.length);
  }

  return (
    <div className="game-board">
      {players.map((player, index) => (
        <PlayerBoard
          key={index}
          player={player}
          isActive={index === currentPlayer}
          onAction={clickAction}
        />
      ))}
    </div>
  );
}


export default GameBoard;

