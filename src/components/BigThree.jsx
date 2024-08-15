import React from "react";

function BigThree() {
  const allPlayers = JSON.parse(localStorage.getItem("allPlayers")) || [];

  const playersWithAvgScores = allPlayers.map((player) => {
    const totalScore = player.score.reduce((acc, curr) => acc + curr, 0);
    const avgScore = totalScore / player.score.length;
    return { ...player, avgScore };
  });

  const topThreePlayers = playersWithAvgScores
    .sort((a, b) => a.avgScore - b.avgScore)
    .slice(0, 3);

  return  (
    <div className="big-three">
      <h2>Top 3 Players</h2>
      <ol>
        {topThreePlayers.map((player, index) => (
          <li key={index}>
            {player.name} - Average Score: {player.avgScore.toFixed(2)}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default BigThree;
