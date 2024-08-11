import React from "react";
import { getRandomNumber } from "./uitilis";
function PlayerBoard({ player, isActive, onAction }) {
  return (
    <div className={`player-board ${isActive ? "active" : ""}`}>
      <h2>
        Gamer{":"} {player.name} {isActive ? "||| ENABLED" : "||| disabled"}
      </h2>
      <p>
        Number{":"} {player.number}
      </p>
      <p>
        Steps{":"} {player.steps}
      </p>

      {isActive && player.number !== 100 && (
        <div>
          <button onClick={() => onAction("+1")}>+1</button>
          <button onClick={() => onAction("-1")}>-1</button>
          <button onClick={() => onAction("*2")}>*2</button>
          <button onClick={() => onAction("/2")}>/2</button>
        </div>
      )}
      {player.number === 100 && (
        <div>
          {(isActive = false)}
          <button onClick={newGame}>new game</button>
          <button onClick={quitGame}>quit game</button>
        </div>
      )}

      <p>
        score{":"} {player.score}
      </p>
    </div>
  );

  function newGame() {
    player.number = getRandomNumber();
    player.steps = 0;
    //localstorg score
  }
  function quitGame() {}
}

export default PlayerBoard;
