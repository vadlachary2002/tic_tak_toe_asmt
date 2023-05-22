import React,{useState} from  "react";

import './App.css';

import {Board} from "./components/Board.js";
import {Reset} from "./components/Reset.js";
import {ScoreBoard} from "./components/ScoreBoard.js";
// import {DisplayWinner} from "./components/DisplayWinner.js";
function App() {
  const win_conditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [board,setBoard] = useState(Array(9).fill(null));

  const [player,setPlaying]= useState(true);

  const [gameOver,setGameOver]= useState(false);

  const [scores,setScores]= useState({xScore:0,oScore:0})

  const handleBoxClicked=(boxId)=>{
       const updatedBoard=board.map((value,idx)=>{
         if(idx===boxId){
           return player=== true?"X":"O";
         }
         return value;
    })
    const winner =checkWinner(updatedBoard);
    if(winner){
      if(winner==="O"){
        let{oScore}= scores;
        oScore+=1;
        setScores({...scores,oScore})
      }else{
        let{xScore}= scores;
        xScore+=1;
        setScores({...scores,xScore})
      }
    }
    console.log(scores);
    setBoard(updatedBoard);

    setPlaying(!player);
  }
  const checkWinner=(board) =>{
    for(let  i=0;i<win_conditions.length;i++){
      const [x,y,z]=win_conditions[i];

      if(board[x] && board[x]===board[y] && board[y]=== board[z]){
        setGameOver(true);
        console.log(board[x]);
        return board[x];
      }
    }
  }
  const resetBoard= ()=>{
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <div className="App">
    <ScoreBoard  scores={scores} playing={player}/>
    <Board  board={board} onClick={gameOver? resetBoard:handleBoxClicked   }/>
    <Reset resetBoard={resetBoard} />
    </div>
  );
}

export default App;
