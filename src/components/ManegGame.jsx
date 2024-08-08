import React, { useState } from "react";
import PlayerRegistration from "./PlayerRegistration";
import GameBoard from "./GameBoard";

function ManageGame() {
  const [players, setPlyers] = useState([]);
  const [start, setStart] = useState(false);
  function getPlayers(arr) {
    return arr;
  }

  return (
    <div>
      <h1>go to 100!!</h1>
      {!start && (
        <PlayerRegistration
          getPlayers={getPlayers}
          players={players}
          setPlyers={setPlyers}
          setStart={setStart}
        />
      )}
      {start && <GameBoard players={players} />}
    </div>
  );
}

export default ManageGame;
