import React from "react";
import NavBar from "./NavBar";
import "./TextForm.css";
import TextForm from "./TextForm";
function Home() {
  return (
    <>
      <NavBar
        title="Sanskar Chaudhary"
        home="Home"
        about="About"
        learn="Learn"
      />
      <div className="container space-giver-top">
        <TextForm
          hed="Thanks for using my website!!"
          que="Enter text below to begin"
        />
      </div>
    </>
  );
}

export default Home;
