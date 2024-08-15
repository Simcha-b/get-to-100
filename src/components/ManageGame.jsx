import React, { useState } from "react";
import PlayerRegistration from "./PlayerRegistration";
import GameBoard from "./GameBoard";
import BigThree from "./BigThree";
function ManageGame() {
  const [players, setPlyers] = useState([]);
  const [start, setStart] = useState(false);

  return (
    <div>
      <h1>go to 100!!</h1>
      {!start && (
        <PlayerRegistration
          players={players}
          setPlyers={setPlyers}
          setStart={setStart}
        />
      )}
      {start && <GameBoard players={players} />}
      {start&&<BigThree className="big-three"/>}
    </div>
  );
}

export default ManageGame;
