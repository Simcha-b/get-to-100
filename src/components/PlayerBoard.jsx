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
  const [number, setNumber] = useState(player.number);
  const [steps, setSteps] = useState(0);
  const [score, setScore] = useState([]);

  const clickAction = (action) => {
    let newNumber = number;
    switch (action) {
      case "+1":
        newNumber += 1;
        // setNumber(number + 1);
        break;
      case "-1":
        // setNumber(number - 1);
        newNumber -= 1;
        break;
      case "*2":
        newNumber *= 2;
        // setNumber(number * 2);
        break;
      case "/2":
        newNumber = Math.floor(newNumber / 2);
        // setNumber(Math.floor(number / 2));
        break;
      default:
        break;
    }
    setNumber(newNumber);
    setSteps(steps + 1);

    if (newNumber !== 100) {
      setCurrentPlayer((currentPlayer + 1) % players.length);
    } else {
      updatedScore();
    }
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
      <p>
        score:
        {score.map((s, i) => (
          <span key={i}> {s}, </span>
        ))}
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
          <button onClick={newGame}>new game</button>
          <button onClick={quitGame}>quit game</button>
        </div>
      )}
    </div>
  );

  function updatedScore() {
    let pl = JSON.parse(localStorage.getItem("players"));
    let all = JSON.parse(localStorage.getItem("allPlayers"));

    if (!pl[currentPlayer].score) {
      pl[currentPlayer].score = [];
    }
    const newScore = [...score, steps + 1];
    setScore(newScore);
    pl[currentPlayer].score.push(steps+1);
    all[currentPlayer].score.push(steps+1);

    localStorage.setItem("players", JSON.stringify(pl));
  }

  
  function newGame() {
    setNumber(getRandomNumber());
    setSteps(0);
  }

  function quitGame() {
    const updatedPlayers = players.filter(
      (_, index) => index !== currentPlayer
    );
    setPlayers(updatedPlayers);

    setCurrentPlayer(currentPlayer % updatedPlayers.length);
  }
}

export default PlayerBoard;
