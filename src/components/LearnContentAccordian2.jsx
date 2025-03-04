import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import NavBar from "./NavBar";
import "./TextForm.css";

export default function LearnContentAccordian2(props) {
  let lmod = props.mode;
  let myStyle = {
    color: lmod === "light" ? "#33363A" : "white",
    backgroundColor: lmod === "light" ? "white" : props.colour,
  };
  return (
    <>
      <div className="accordion" id="accordionExample2" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne1"
              aria-expanded="false"
              aria-controls="collapseOne1"
              style={myStyle}
            >
              Clear{" "}
            </button>
          </h2>
          <div
            id="collapseOne1"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              This will{" "}
              <strong>
                <em>
                  <u>remove</u>
                </em>
              </strong>{" "}
              any text typed in the textbox.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo2"
              aria-expanded="false"
              aria-controls="collapseTwo2"
              style={myStyle}
            >
              Save Text
            </button>
          </h2>
          <div
            id="collapseTwo2"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              This will save the current text typed in the textbox, which can
              then be used at a later stage. Please note that clicking this
              button{" "}
              <strong>
                <em>
                  <u>will</u>
                </em>
              </strong>{" "}
              destroy any previously saved text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree3"
              aria-expanded="false"
              aria-controls="collapseThree3"
              style={myStyle}
            >
              Load Text
            </button>
          </h2>
          <div
            id="collapseThree3"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              This will load the textbox with the most recently saved text.
              Please note that clicking this button will{" "}
              <strong>
                <em>
                  <u>not</u>
                </em>
              </strong>{" "}
              destroy the saved text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour4"
              aria-expanded="false"
              aria-controls="collapseFour4"
              style={myStyle}
            >
              Copy Text
            </button>
          </h2>
          <div
            id="collapseFour4"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              This will{" "}
              <strong>
                <em>
                  <u>copy</u>
                </em>
              </strong>{" "}
              the current text to your clipboard.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive5"
              aria-expanded="false"
              aria-controls="collapseFive5"
              style={myStyle}
            >
              Background Colour
            </button>
          </h2>
          <div
            id="collapseFive5"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              This will let you set the Background colour for dark mode by
              selecting a colour from a colour picker.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix6"
              aria-expanded="false"
              aria-controls="collapseSix6"
              style={myStyle}
            >
              Button Colour
            </button>
          </h2>
          <div
            id="collapseSix6"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              This will let you choose the colour of function buttons from a
              list of colours.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
