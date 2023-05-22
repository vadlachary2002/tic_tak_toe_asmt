import React from 'react';
import "./ScoreBoard.css";
export const ScoreBoard=({scores,playing})=>{
  console.log("playing",playing);
  const {xScore,oScore}= scores;
  return (
    <div className="scoreboard">
    <span className={`score x-score ${!playing && "inactive"}`}>X- {xScore}</span>
    <span className={`score o-score ${playing && "inactive"}`}>O- {oScore}</span>
    </div>

  )
}
