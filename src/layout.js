import React from "react";
import { NavLink, Outlet } from "react-router-dom";

class layout extends React.Component {
  render() {
    return (
      <div className="back">
        <div className="header">
          <nav>
            <NavLink
              className="home"
              style={({ isActive }) => ({
                color: isActive ? "#f1356d" : "#c13d00",
              })}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className="link"
              style={({ isActive }) => ({
                color: isActive ? "#f1356d" : "#c13d00",
              })}
              to="login"
            >
              Login
            </NavLink>

            <NavLink
              className="link"
              style={({ isActive }) => ({
                color: isActive ? "#f1356d" : "#c13d00",
              })}
              to="register"
            >
              Register
            </NavLink>
          </nav>
        </div>

        <Outlet />
      </div>
    );
  }
}

export default layout;
