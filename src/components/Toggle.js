import React from "react";
import { useState } from "react"

function Toggle() {
  const [toggle, setToggle] = useState(false)

  function toggles()
  {
    setToggle((toggle) => !toggle)
  }
  
  const color = toggle ? "red" : "green"

  return <button onClick={toggles} style = {{background: color}}>{toggle ? "ON" : "OFF"}</button>;
}

export default Toggle;