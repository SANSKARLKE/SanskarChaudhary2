import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import "./TextForm.css";
export default function TextForm(props) {
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
    setSaveText(text);
  };
  const handleLoadText = () => {
    setText(saveText);
  };
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };
  const handleRemoveNumber = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if ((text[i] >= "0" && text[i] <= "9") == 0) {
        newText += text[i];
      }
    }
    setText(newText);
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
    setText(newText);
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
    setText(newText);
  };
  const handleClear = () => {
    setText("");
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
    handleRemoveSpace();
    setText(newText);
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
            className="btn btn-outline-danger btn-sm"
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
      ></textarea>
      <div className="flexi space-giver">
        <div className="space-side">
          <button className="btn btn-outline-primary" onClick={handleSaveText}>
            Save current text
          </button>
        </div>
        <div className="space-side">
          <button className="btn btn-outline-primary" onClick={handleLoadText}>
            Load saved text
          </button>
        </div>
      </div>
      <div className="flexi">
        <div className="space-side">
          <button className="btn btn-outline-primary" onClick={handleUpperCase}>
            Convert to Uppercase
          </button>
        </div>
        <div className="space-side">
          <button className="btn btn-outline-primary" onClick={handleLowerCase}>
            Convert to Lowercase
          </button>
        </div>
        <div className="space-side">
          <button className="btn btn-outline-primary" onClick={handleTitleCase}>
            Convert to Titlecase
          </button>
        </div>
        <div className="space-side">
          <button
            className="btn btn-outline-primary"
            onClick={handleRemoveSpace}
          >
            Remove extra spaces
          </button>
        </div>
        <div className="space-side">
          <button
            className="btn btn-outline-primary"
            onClick={handleRemoveNumber}
          >
            Remove numbers
          </button>
        </div>
        <div className="space-side">
          <button
            className="btn btn-outline-primary"
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
