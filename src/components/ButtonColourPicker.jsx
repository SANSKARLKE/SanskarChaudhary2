import React, { useState } from "react";
import "./TextForm.css";

function ButtonColourPicker(props) {
  let lmode = props.mode;
  let myStyle = {
    color: lmode === "light" ? "#33363A" : "white",
    backgroundColor: lmode === "light" ? "white" : props.colour,
  };
  return (
    <div className="flexi">
      <div
        className={`space-side-ri text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        Button Colour
      </div>
      <div>
        <select
          className="form-select"
          aria-label="Default select example"
          value={props.bColour}
          onChange={props.handleBColourChange}
          style={myStyle}
        >
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Yellow">Yellow</option>
          <option value="Cyan">Cyan</option>
        </select>
      </div>
    </div>
  );
}

export default ButtonColourPicker;
