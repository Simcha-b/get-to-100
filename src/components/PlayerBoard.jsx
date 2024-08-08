import React from 'react';

function PlayerBoard({ player, isActive, onAction }) {
  return (
    <div className={`player-board ${isActive ? 'active' : ''}`}>
      <h2>Gamer =={'>'} {player.name} {isActive ? '||| ENABLED' : '||| disabled'}</h2>
      <p>Number =={'>'} {player.number}</p>
      <p>Steps =={'>'} {player.steps}</p>
   

      {isActive && (
        <div>
          <button onClick={() => onAction('+1')}>+1</button>
          <button onClick={() => onAction('-1')}>-1</button>
          <button onClick={() => onAction('*2')}>*2</button>
          <button onClick={() => onAction('/2')}>/2</button>
        </div>
        
      )}
      <p>score =={'>'} {player.score}</p>
    </div>
  );
}

export default PlayerBoard;

