import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import NavBar from "./NavBar";
import "./TextForm.css";
import TextForm from "./TextForm";
import Alert from "./Alert";
function Home(props) {
  let lmode = props.mode;
  let myStyle = {
    color: lmode === "light" ? "#33363A" : "white",
    backgroundColor: lmode === "light" ? "white" : props.colour,
  };
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
        handleBColourChange={props.handleBColourChange}
        bColour={props.bColour}
      /> */}
      <div className="container space-giver-top" style={myStyle}>
        <TextForm
          hed="Thanks for using my website!!"
          que="Enter text below to begin"
          mode={props.mode}
          alert={props.showAlert}
          bColour={props.bColour}
          cMade={props.cMade}
          handleCMade={props.handleCMade}
        />
      </div>
      <div className="container space-giver-db">
        <Alert alert={props.alert} />
      </div>
    </>
  );
}
export default Home;
