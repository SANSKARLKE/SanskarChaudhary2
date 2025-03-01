import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import NavBar from "./NavBar";
import "./TextForm.css";

export default function LearnContent() {
  return (
    <>
      <center>
        <h5 className="space-giver-db space-side-db">
          Below is a list of all the services provided on this website
        </h5>
      </center>
      <div className="space-side-db">
        <ul>
          <li>
            <div>
              <h6>Convert to UpperCase</h6>
              <p>
                This will convert all of the text typed in the textbox to upper
                case. An example is given below :
                <br />
                If the text input was "My name is Sanskar Chaudhary"
                <br />
                then the text after clicking this button will become "MY NAME IS
                SANSKAR CHAUDHARY"
              </p>
            </div>
          </li>
          <li>
            <div>
              <h6>Convert to LowerCase</h6>
              <p>
                This will convert all of the text typed in the textbox to lower
                case. An example is given below :
                <br />
                If the text input was "My name is Sanskar Chaudhary"
                <br />
                then the text after clicking this button will become "my name is
                sanskar chaudhary"
              </p>
            </div>
          </li>
          <li>
            <div>
              <h6>Convert to TitleCase</h6>
              <p>
                This will convert all of the text typed in the textbox to title
                case. An example is given below :
                <br />
                If the text input was "My name is Sanskar Chaudhary"
                <br />
                then the text after clicking this button will become "My Name Is
                Sanskar Chaudhary"
              </p>
            </div>
          </li>
          <li>
            <div>
              <h6>Remove extra spaces</h6>
              <p>
                This will remove all extra spaces from the text typed in the
                textbox to title case. An example is given below :
                <br />
                If the text input was " My name is Sanskar Chaudhary "
                <br />
                then the text after clicking this button will become "My Name Is
                Sanskar Chaudhary"
              </p>
            </div>
          </li>
          <li>
            <div>
              <h6>Remove numbers</h6>
              <p>
                This will remove all numbers from the text typed in the textbox
                to title case. An example is given below :
                <br />
                If the text input was "My33 na333me is Sansk5454ar Chaudhary
                5456512"
                <br />
                then the text after clicking this button will become "My Name Is
                Sanskar Chaudhary "
                <br />
                Please note that this will{" "}
                <em>
                  <u>not</u>
                </em>{" "}
                remove any extra spaces that may arise due to this operation
              </p>
            </div>
          </li>
          <li>
            <div>
              <h6>Remove special characters</h6>
              <p>
                This will remove all special characters from the text typed in
                the textbox to title case. An example is given below :
                <br />
                If the text input was "My$$ na^^^me is Sansk##ar Chaudhary 1"
                <br />
                then the text after clicking this button will become "My Name Is
                Sanskar Chaudhary 1"
                <br />
                Please note that this will{" "}
                <em>
                  <u>not</u>
                </em>{" "}
                remove any extra spaces that may arise due to this operation,{" "}
                <em>
                  <u>nor</u>
                </em>{" "}
                will this remove any numbers from the text
              </p>
            </div>
          </li>
        </ul>
      </div>
      <center>
        <h5 className="space-giver-db space-side-db">
          Below is a list of some extra functionalities provided on this website
        </h5>
      </center>
      <div className="space-side-db">
        <ul>
          <li>
            <div>
              <h6>Clear</h6>
              <p>This will remove any text typed in the textbox.</p>
            </div>
          </li>
          <li>
            <div>
              <h6>Save Text</h6>
              <p>
                This will save the current text typed in the textbox, which can
                then be used at a later stage. Please note that clicking this
                button{" "}
                <em>
                  <u>will</u>
                </em>{" "}
                destroy any previously saved text.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h6>Load Text</h6>
              <p>
                This will load the textbox with the most recently saved text.
                Please note that clicking this button will{" "}
                <em>
                  <u>not</u>
                </em>{" "}
                destroy the saved text.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
