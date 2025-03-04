import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Learn from "./components/Learn";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
function App() {
  const [cMade, setCMade] = useState(0);
  const handleCMade = (a) => {
    if (a === 1) {
      setCMade(cMade + 1);
    } else {
      setCMade(0);
    }
  };
  const [bColour, setBColour] = useState("Green");
  const handleBColourChange = (event) => {
    setBColour(event.target.value);
    console.log("new value is " + bColour);
  };
  const [colour, setColour] = useState("#212121");
  const handleColourChange = (event) => {
    setColour(event.target.value);
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const [mode, setMode] = useState("light");
  const onClick = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode set successfully", "success");
    } else {
      setMode("light");
      showAlert("Light mode set successfully", "success");
    }
  };

  document.body.style.backgroundColor = mode === "light" ? "white" : colour;
  document.title =
    cMade === 0 ? "Sanskar Chaudhary" : "Sanskar " + cMade + " changes";
  return (
    <>
      <Router basename="/SanskarChaudhary2">
        <NavBar
          title="Sanskar Chaudhary"
          home="Home"
          learn="Learn"
          mode={mode}
          clicker={onClick}
          colour={colour}
          handleColourChange={handleColourChange}
          handleBColourChange={handleBColourChange}
          bColour={bColour}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                mode={mode}
                clicker={onClick}
                alert={alert}
                showAlert={showAlert}
                colour={colour}
                handleColourChange={handleColourChange}
                bColour={bColour}
                handleBColourChange={handleBColourChange}
                cMade={cMade}
                handleCMade={handleCMade}
              />
            }
          />
          <Route
            exact
            path="/learn"
            element={
              <Learn
                mode={mode}
                clicker={onClick}
                alerto={alert}
                colour={colour}
                handleColourChange={handleColourChange}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
