import React, { useState } from "react";
import PlyersData from "./plyersData";
import { getRandomNumber } from "./uitilis";

function PlayerRegistration() {
  const [players, setPlyers] = useState([]);
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
    // setPlyers([...players, newPlyer]);
    // localStorage.setItem("players", JSON.stringify(players));
    PlyersData.push(newPlyer);
    setNamePlayer("");
  };

  return (
    <div>
      <h1>go to 100!!</h1>
      <input
        type="text"
        minLength={3}
        onChange={(e) => {
          setNamePlayer(e.target.value);
        }}
      />
      <button onClick={addPlyer}>add plyer</button>
      <div className="plyaerlist">
        {players && (
          <ul>
            {players.map((p, i) => (
              <li key={i}>{p.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PlayerRegistration;
