import React, { useState } from "react";
import "./TextForm.css";
function ColourPicker(props) {
  return (
    <>
      <div className="flexi">
        <div
          className={`space-side-ri text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          Background Colour (Dark mode)
        </div>
        <div className="flexi">
          <input
            type="color"
            className="form-control form-control-color"
            id="exampleColorInput"
            value={props.colour}
            title="Choose your color"
            onChange={props.handleColourChange}
          />
        </div>
      </div>
    </>
  );
}

export default ColourPicker;
