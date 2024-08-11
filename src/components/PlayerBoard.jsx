import React, { useState } from "react";
import { getRandomNumber } from "./uitilis";
function PlayerBoard({
  player,
  isActive,
  currentPlayer,
  setCurrentPlayer,
  players,
  setPlayers,
}) {
  console.log(players);

  const [number, setNumber] = useState(player.number);
  const [steps, setSteps] = useState(0);
  // const [score, setScore] = useState(0);

  const clickAction = (action) => {
    switch (action) {
      case "+1":
        setNumber(number + 1);
        break;
      case "-1":
        setNumber(number - 1);
        break;
      case "*2":
        setNumber(number * 2);
        break;
      case "/2":
        setNumber(Math.floor(number / 2));
        break;
      default:
        break;
    }
    setSteps(steps + 1);

    setCurrentPlayer((currentPlayer + 1) % players.length);
  };
  return (
    <div className={`player-board ${isActive ? "active" : ""}`}>
      <h2>
        Gamer{":"} {player.name} {isActive ? "||| ENABLED" : "||| disabled"}
      </h2>
      <p>
        Number{":"} {number}
      </p>
      <p>
        Steps{":"} {steps}
      </p>

      {isActive && number !== 100 && (
        <div>
          <button onClick={() => clickAction("+1")}>+1</button>
          <button onClick={() => clickAction("-1")}>-1</button>
          <button onClick={() => clickAction("*2")}>*2</button>
          <button onClick={() => clickAction("/2")}>/2</button>
        </div>
      )}
      {number === 100 && (
        <div>
          {(isActive = false)}
          {/* setScore*/}
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
    setNumber(getRandomNumber());
    setSteps(0);
  }
  function quitGame() {
    setPlayers(players.splice(currentPlayer, 1));
  }
}

export default PlayerBoard;
