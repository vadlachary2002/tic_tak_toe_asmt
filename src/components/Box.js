import React from "react"
import "./Box.css"
export const Box =  ({value,onClick}) => {
  const boxStyle= value==="X"?"box x":"box o";       // for styling the x box and o box
  return(
    <button className={boxStyle} onClick={onClick}>{value}</button>

  )

}
