import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes, { string } from "prop-types";
import "./TextForm.css";
import ColourPicker from "./ColourPicker";
import ButtonColourPicker from "./ButtonColourPicker";
function NavBar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand">
            <div className="space-side-left">{props.title}</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.home ? props.home : "HomeText"}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/learn">
                  {props.learn}
                </Link>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch space-side">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.clicker}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
          <div className="space-side">
            <a href="https://github.com/SANSKARLKE">GitHub</a>
          </div>
          <div className="space-side">
            <a href="https://www.linkedin.com/in/sanskarlke/">LinkedIn</a>
          </div>
          <div className="space-side">
            <ColourPicker
              colour={props.colour}
              handleColourChange={props.handleColourChange}
              mode={props.mode}
            />
          </div>
          <div className="space-side-li">
            <ButtonColourPicker
              bColour={props.bColour}
              handleBColourChange={props.handleBColourChange}
              mode={props.mode}
              colour={props.colour}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
NavBar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string,
  learn: PropTypes.string,
};
export default NavBar;
