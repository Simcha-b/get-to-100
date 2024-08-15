import React, { useState } from "react";
import PlayerBoard from "./PlayerBoard";

function GameBoard({ players }) {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [newPlayers, setNewPlayers] = useState([...players]);
  const player = newPlayers[currentPlayer];

  return (
    <div className="game-board">
      {newPlayers.map((player, index) => (
        <PlayerBoard
          key={index}
          player={player}
          isActive={index === currentPlayer}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          players={newPlayers}
          setPlayers={setNewPlayers}
        />
      ))}
    </div>
  );
}

export default GameBoard;
