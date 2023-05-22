import React from 'react';

import "./Reset.css"
export const Reset=({resetBoard})=>{
  return (
    <button className="resetbtn" onClick={resetBoard}> Reset</button>
  )
}
