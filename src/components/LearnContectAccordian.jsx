import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import NavBar from "./NavBar";
import "./TextForm.css";
import LearnContentAccordian2 from "./LearnContentAccordian2";

export default function LearnContentAccordian(props) {
  let lmod = props.mode;
  let myStyle = {
    color: lmod === "light" ? "#33363A" : "white",
    backgroundColor: lmod === "light" ? "white" : props.colour,
  };
  return (
    <>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Convert to UpperCase
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This will convert all of the text typed in the textbox to upper
              case. An{" "}
              <strong>
                <em>
                  <u>example</u>
                </em>
              </strong>{" "}
              is given below :
              <br />
              If the text input was "My name is Sanskar Chaudhary"
              <br />
              then the text after clicking this button will become "MY NAME IS
              SANSKAR CHAUDHARY".
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Convert to LowerCase
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This will convert all of the text typed in the textbox to lower
              case. An{" "}
              <strong>
                <em>
                  <u>example</u>
                </em>
              </strong>{" "}
              is given below :
              <br />
              If the text input was "My name is Sanskar Chaudhary"
              <br />
              then the text after clicking this button will become "my name is
              sanskar chaudhary".
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Convert to TitleCase
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This will convert all of the text typed in the textbox to title
              case. An{" "}
              <strong>
                <em>
                  <u>example</u>
                </em>
              </strong>{" "}
              is given below :
              <br />
              If the text input was "My name is Sanskar Chaudhary"
              <br />
              then the text after clicking this button will become "My Name Is
              Sanskar Chaudhary".
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={myStyle}
            >
              Remove extra spaces
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This will remove all extra spaces from the text typed in the
              textbox to title case. An{" "}
              <strong>
                <em>
                  <u>example</u>
                </em>
              </strong>{" "}
              is given below :
              <br />
              If the text input was " My name is Sanskar Chaudhary "
              <br />
              then the text after clicking this button will become "My Name Is
              Sanskar Chaudhary".
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              style={myStyle}
            >
              Remove numbers
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This will remove all numbers from the text typed in the textbox to
              title case. An{" "}
              <strong>
                <em>
                  <u>example</u>
                </em>
              </strong>{" "}
              is given below :
              <br />
              If the text input was "My33 na333me is Sansk5454ar Chaudhary
              5456512"
              <br />
              then the text after clicking this button will become "My Name Is
              Sanskar Chaudhary ".
              <br />
              Please note that this will{" "}
              <strong>
                <em>
                  <u>not</u>
                </em>
              </strong>{" "}
              remove any extra spaces that may arise due to this operation.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              style={myStyle}
            >
              Remove special characters
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This will remove all special characters from the text typed in the
              textbox to title case. An{" "}
              <strong>
                <em>
                  <u>example</u>
                </em>
              </strong>{" "}
              is given below :
              <br />
              If the text input was "My$$ na^^^me is Sansk##ar Chaudhary 1"
              <br />
              then the text after clicking this button will become "My Name Is
              Sanskar Chaudhary 1".
              <br />
              Please note that this will{" "}
              <strong>
                <em>
                  <u>not</u>
                </em>
              </strong>{" "}
              remove any extra spaces that may arise due to this operation,{" "}
              <strong>
                <em>
                  <u>nor</u>
                </em>
              </strong>{" "}
              will this remove any numbers from the text.
            </div>
          </div>
        </div>
      </div>
      <center>
        <h5 className="space-giver-db">
          Below is a list of some extra functionalities provided on this website
        </h5>
      </center>
      <div>
        <LearnContentAccordian2
          mode={props.mode}
          colour={props.colour}
          handleColourChange={props.handleColourChange}
        />
      </div>
      <center>
        <h5 className="space-giver-top-db">
          Want to know some interesting facts about this website?
        </h5>
      </center>
      <div>
        <ul className="space-giver space-giver-bottom-db">
          <li>
            Every time you change the input text by using one of my text
            utilities, the title of the webpage changes to reflect how many
            changes in total have been made to the text. Clicking the{" "}
            <strong>
              <em>
                <u>clear</u>
              </em>
            </strong>{" "}
            button resets the title to the original value and also sets the
            count of text changes to 0!
          </li>
        </ul>
      </div>
    </>
  );
}
