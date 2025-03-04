import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import "./TextForm.css";
export default function TextForm(props) {
  let lbColour = "";
  if (props.bColour === "Blue") {
    lbColour = "primary";
  } else if (props.bColour === "Green") {
    lbColour = "success";
  } else if (props.bColour === "Red") {
    lbColour = "danger";
  } else if (props.bColour === "Yellow") {
    lbColour = "warning";
  } else {
    lbColour = "info";
  }
  let lmode = props.mode;
  let myStyle = {
    color: lmode === "light" ? props.colour : "white",
    backgroundColor: lmode === "light" ? "white" : props.colour,
  };
  const [text, setText] = useState("");
  const [saveText, setSaveText] = useState("");
  const WordCount = () => {
    let c = 0;
    for (let i = 0; i < text.length - 1; i++) {
      if (i === 0 && text[0] !== " ") {
        c++;
      } else if (i === 0 && text[i] === " ") {
        let j = 1;
        while (text[j] == " " && j < text.length) {
          j++;
        }
        if (j !== text.length) {
          c++;
        }
        i = j;
      } else {
        if (text[i] === " " && text[i + 1] !== " ") {
          c++;
        }
      }
    }
    return c;
  };
  const LetterCount = () => {
    let c = 0;
    for (let i = 0; i < text.length; i++) {
      if (
        (text[i] >= "a" && text[i] <= "z") ||
        (text[i] >= "A" && text[i] <= "Z") ||
        (text[i] >= "0" && text[i] <= "9")
      ) {
        c++;
      }
    }
    return c;
  };
  const DigitCount = () => {
    let c = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] >= "0" && text[i] <= "9") {
        c++;
      }
    }
    return c;
  };
  const handleSaveText = () => {
    if (text === "") {
      props.alert("No text detected", "warning");
    } else {
      setSaveText(text);
      props.alert("Text Saved", "success");
    }
  };
  const handleLoadText = () => {
    if (saveText === "") {
      props.alert("No text saved yet", "warning");
    } else {
      setText(saveText);
      props.alert("Saved text Loaded", "success");
    }
  };
  const handleCopyText = () => {
    if (text === "") {
      props.alert("No text detected", "warning");
    } else {
      navigator.clipboard.writeText(text);
      props.alert("Text copied to clipboard", "success");
    }
  };
  const handleUpperCase = () => {
    if (text === "") {
      props.alert("No text detected", "warning");
    } else if (text.toUpperCase() === text) {
      props.alert("No changes needed", "info");
    } else {
      setText(text.toUpperCase());
      props.alert("Converted to Upper Case", "success");
      props.handleCMade(1);
    }
  };
  const handleLowerCase = () => {
    if (text === "") {
      props.alert("No text detected", "warning");
    } else if (text.toLowerCase() === text) {
      props.alert("No changes needed", "info");
    } else {
      setText(text.toLowerCase());
      props.alert("Converted to Lower Case", "success");
      props.handleCMade(1);
    }
  };
  const handleRemoveNumber = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if ((text[i] >= "0" && text[i] <= "9") == 0) {
        newText += text[i];
      }
    }
    if (text === "") {
      props.alert("No text detected", "warning");
    } else if (newText === text) {
      props.alert("No changes needed", "info");
    } else {
      setText(newText);
      props.alert("Numbers removed", "success");
      props.handleCMade(1);
    }
  };
  const handleTitleCase = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i === 0) {
        newText += text[0].toUpperCase();
      } else {
        if (text[i - 1] === " ") {
          newText += text[i].toUpperCase();
        } else {
          newText += text[i].toLowerCase();
        }
      }
    }
    if (text === "") {
      props.alert("No text detected", "warning");
    } else if (newText === text) {
      props.alert("No changes needed", "info");
    } else {
      setText(newText);
      props.alert("Converted to Title Case", "success");
      props.handleCMade(1);
    }
  };
  const handleRemoveSpace = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i === 0 && text[0] !== " ") {
        newText += text[i];
      } else if (i === 0 && text[0] === " ") {
        let j = 1;
        while (text[j] === " " && j < text.length) {
          j++;
        }
        newText += text[j];
        i = j;
      } else {
        if (text[i] !== " ") {
          newText += text[i];
        } else {
          let j = i + 1;
          while ((text[j] == " ") & (j < text.length)) {
            j++;
          }
          newText += " " + text[j];
          i = j;
        }
      }
    }
    if (text === "") {
      props.alert("No text detected", "warning");
    } else if (newText === text) {
      props.alert("No changes needed", "info");
    } else {
      setText(newText);
      props.alert("Extra spaces removed", "success");
      props.handleCMade(1);
    }
  };
  const handleClear = () => {
    if (text === "") {
      props.alert("Text field is already empty", "warning");
    } else {
      setText("");
      props.alert("Text cleared", "success");
    }
    props.handleCMade(0);
  };
  const handleRemoveSpecial = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (
        (text[i] >= "0" && text[i] <= "9") ||
        (text[i] >= "a" && text[i] <= "z") ||
        (text[i] >= "A" && text[i] <= "Z") ||
        text[i] === " "
      ) {
        newText += text[i];
      }
    }
    if (text === "") {
      props.alert("No text detected", "warning");
    } else if (newText === text) {
      props.alert("No changes needed", "info");
    } else {
      setText(newText);
      props.alert("Special characters removed", "success");
      props.handleCMade(1);
    }
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <center>
        <h4 className="space-giver">{props.hed}</h4>
      </center>
      <div className="mb-3">
        <center>
          <label htmlFor="inputText" className="form-label">
            {props.que ? props.que : "Message here"}
          </label>
        </center>
      </div>
      <div className="space-giver flexi-lr">
        <div className="flexi">
          <div className="space-side-ri">Word Count : {WordCount()}</div>
          <div className="space-side-ri">Letter Count : {LetterCount()}</div>
          <div className="space-side-ri">Digit Count : {DigitCount()}</div>
        </div>
        <div>
          <button
            className={`btn btn-outline-${
              lbColour === "danger"
                ? props.mode === "light"
                  ? "dark"
                  : "light"
                : "danger"
            } btn-sm`}
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>

      <textarea
        className="form-control space-giver"
        id="inputText"
        rows="10"
        placeholder="Enter text here"
        value={text}
        onChange={handleChange}
        style={{ color: "black" }}
      ></textarea>
      <div className="flexi space-giver">
        <div className="space-side">
          <button
            className={`btn btn-outline-${lbColour}`}
            onClick={handleSaveText}
          >
            Save current text
          </button>
        </div>
        <div className="space-side">
          <button
            className={`btn btn-outline-${lbColour}`}
            onClick={handleLoadText}
          >
            Load saved text
          </button>
        </div>
        <div className="space-side">
          <button
            className={`btn btn-outline-${lbColour}`}
            onClick={handleCopyText}
          >
            Copy Text
          </button>
        </div>
      </div>
      <div className="flexi">
        <div className="space-side">
          <button
            className={`btn btn-outline-${lbColour}`}
            onClick={handleUpperCase}
          >
            Convert to Uppercase
          </button>
        </div>
        <div className="space-side">
          <button
            className={`btn btn-outline-${lbColour}`}
            onClick={handleLowerCase}
          >
            Convert to Lowercase
          </button>
        </div>
        <div className="space-side">
          <button
            className={`btn btn-outline-${lbColour}`}
            onClick={handleTitleCase}
          >
            Convert to Titlecase
          </button>
        </div>
        <div className="space-side">
          <button
            className={`btn btn-outline-${lbColour}`}
            onClick={handleRemoveSpace}
          >
            Remove extra spaces
          </button>
        </div>
        <div className="space-side">
          <button
            className={`btn btn-outline-${lbColour}`}
            onClick={handleRemoveNumber}
          >
            Remove numbers
          </button>
        </div>
        <div className="space-side">
          <button
            className={`btn btn-outline-${lbColour}`}
            onClick={handleRemoveSpecial}
          >
            Remove special characters
          </button>
        </div>
      </div>
    </>
  );
}
TextForm.propTypes = {
  que: PropTypes.string,
  hed: PropTypes.string,
};
