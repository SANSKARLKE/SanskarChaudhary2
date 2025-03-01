import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import NavBar from "./NavBar";
import LearnContent from "./LearnContent";
import "./TextForm.css";

export default function Learn() {
  return (
    <>
      <NavBar
        title="Sanskar Chaudhary"
        home="Home"
        about="About"
        learn="Learn"
        input="Search for functions"
        button="Search"
      />
      <LearnContent />
    </>
  );
}
