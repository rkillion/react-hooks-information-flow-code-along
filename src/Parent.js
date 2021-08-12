import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  const childColorRandom = getRandomColor();
  const [childColor,setChildColor] = useState(childColorRandom);

  function handleChangeColor() {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); // update color state to a new value
    const newChildColor = getRandomColor();
    setChildColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child backColor={childColor} onChangeColor={handleChangeColor} />
      <Child backColor={childColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
