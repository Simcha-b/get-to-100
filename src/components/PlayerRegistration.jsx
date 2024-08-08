import React, { useState } from "react";
import { getRandomNumber } from "./uitilis";

function PlayerRegistration({ setStart, players, setPlyers}) {
  const [namePlayer, setNamePlayer] = useState("");

  const addPlyer = () => {
    let newPlyer = {
      name: namePlayer,
      number: getRandomNumber(),
      steps: 0,
      score: 0,
      state: true,
    };

    setPlyers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers, newPlyer];
      localStorage.setItem("players", JSON.stringify(updatedPlayers));
      return updatedPlayers;
    });
    setNamePlayer("");
  };

  return (
    <div>
      <input
        type="text"
        minLength={3}
        onChange={(e) => {
          setNamePlayer(e.target.value);
        }}
      />
      <button onClick={addPlyer}>add plyer</button>
      <div className="plyaerlist">
        <ul>
          {players.map((p, i) => (
            <li key={i}>{p.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={()=>setStart(true)}>start game</button>
    </div>
  );
}

export default PlayerRegistration;
