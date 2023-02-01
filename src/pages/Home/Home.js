import React from "react";
import "./Home.css";
import logo from "../../images/02/logo.png";
import { NavLink, Route, Routes } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

function Home() {
  return (
    <div className="home-container">
      <img src={logo} className="logo" />
      <nav className="nav-bar">
        <NavLink
          to="/"
          // className="tablink"
          style={({ isActive }) => {
            return {
              borderBottom: isActive
                ? "4px solid #FFA222"
                : "none",
              color: isActive ? "white" : "white",
              fontSize: "1.5rem",
              transition: isActive ? "all 0.1s ease" : null,
              fontWeight: isActive ? "800" : "500",
              textDecoration: "none",
              borderRadius: "2px",
              padding: "10px 0px",
            };
          }}
        >
          SIGN IN
        </NavLink>
        <NavLink
          to="/signup"
          className="tablink"
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "4px solid #FFA222" : "none",
              color: isActive ? "white" : "white",
              fontSize: "1.5rem",
              padding: "10px 0px",
              transition: isActive ? "all 0.1s ease" : null,
              fontWeight: isActive ? "800" : "500",
              textDecoration: "none",
              borderRadius: "2px",
            };
          }}
        >
          SIGN UP
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default Home;
