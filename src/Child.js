import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ backColor, onChangeColor }) {
  return <div className="child" style={{ backgroundColor: backColor}} onClick={onChangeColor}/>;
}

export default Child;
