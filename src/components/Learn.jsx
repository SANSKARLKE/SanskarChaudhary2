import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import NavBar from "./NavBar";
import LearnContent from "./LearnContent";
import "./TextForm.css";
import Alert from "./Alert";
import LearnContentAccordian from "./LearnContectAccordian";

export default function Learn(props) {
  let lmod = props.mode;
  let myStyle = {
    color: lmod === "light" ? "#33363A" : "white",
    backgroundColor: lmod === "light" ? "white" : props.colour,
  };
  document.body.style.backgroundColor =
    lmod === "light" ? "white" : props.colour;
  return (
    <>
      {/* <NavBar
        title="Sanskar Chaudhary"
        home="Home"
        learn="Learn"
        mode={props.mode}
        clicker={props.clicker}
        colour={props.colour}
        handleColourChange={props.handleColourChange}
      /> */}
      <div className="container">
        <Alert alert={props.alerto} />
      </div>
      <center>
        <h5 className="space-giver-db" style={myStyle}>
          Below is a list of all the services provided on this website
        </h5>
      </center>
      <div className="container" style={myStyle}>
        <LearnContentAccordian
          mode={props.mode}
          colour={props.colour}
          handleColourChange={props.handleColourChange}
        />
      </div>
    </>
  );
}
