import React, { useState } from "react";
import { getRandomNumber } from "./uitilis";
// import "./Reg.css";

function PlayerRegistration({ setStart, players, setPlyers }) {
  const [namePlayer, setNamePlayer] = useState("");
  const [nameNewPlayer, setNameNewPlayer] = useState("");
  const [emailNewPlayer, setEmailNewPlayer] = useState("");
  const [sighup, setSighup] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (namePlayer.trim().length >= 3) {
      addPlyer();
    }
  };

  const addPlyer = () => {
    let allPlayers = JSON.parse(localStorage.getItem("allPlayers"));
    allPlayers.forEach((p) => {
      if (p.name === namePlayer) {
        let newPlyer = {
          name: namePlayer,
          number: getRandomNumber(),
          // steps: 0,
          score: p.score,
          state: true,
        };
        setPlyers((prevPlayers) => {
          const updatedPlayers = [...prevPlayers, newPlyer];
          localStorage.setItem("players", JSON.stringify(updatedPlayers));
          setNamePlayer("");
          return updatedPlayers;
        });
      }
    });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    let newP = {
      name: nameNewPlayer,
      email: emailNewPlayer,
      score:[],
    };
    let allPlayers = JSON.parse(localStorage.getItem("allPlayers")) || [];
    allPlayers.push(newP);
    localStorage.setItem("allPlayers", JSON.stringify(allPlayers));
    setSighup(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="sigh-in">
        <label htmlFor="plyer">משתמש רשום?</label>
        <input
          type="text"
          value={namePlayer}
          minLength={3}
          required
          placeholder="הכנס שם משתמש"
          onChange={(e) => {
            setNamePlayer(e.target.value);
          }}
        />
        <button type="submit">add plyer</button>
      </form>

      <form
        onSubmit={handleSubmit2}
        className="sigh-up"
        style={{ display: sighup ? "inline-block" : "none" }}
      >
        <label htmlFor="new">לא רשום עדיין?</label>
        <input
          type="text"
          value={nameNewPlayer}
          minLength={3}
          required
          placeholder="הכנס שם משתמש"
          onChange={(e) => setNameNewPlayer(e.target.value)}
        />
        <label htmlFor="emailNew">Email</label>
        <input
          type="email"
          value={emailNewPlayer}
          required
          placeholder="הכנס כתובת מייל"
          onChange={(e) => setEmailNewPlayer(e.target.value)}
        />
        <button type="submit">הרשם</button>
      </form>
      <div className="plyaerlist">
        <ul>
          {players.map((p, i) => (
            <li key={i}>{p.name}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => {
          if (players.length > 0) {
            setStart(true);
          } else {
            alert("לפחות שחקן אחד!!");
          }
        }}
      >
        start game
      </button>
    </div>
  );
}

export default PlayerRegistration;
