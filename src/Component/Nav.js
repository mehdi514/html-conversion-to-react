import React, { Component } from "react";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

import "../js/main";
import "../css/main.css";

class Nav extends Component {
  render() {
    return (
      <header id="header">
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              {/* <NavLink to="/" /> */}
              <img src={logo} />
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <NavLink to="/Home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/About">About</NavLink>
                </li>
                <li>
                  <NavLink to="/Services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/Portfolio">Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to="/Pricing">Pricing</NavLink>
                </li>
                <li className="menu-has-children">
                  <NavLink to="/Blog">Blog</NavLink>
                </li>
                <li className="menu-has-children">
                  <NavLink to="/Pages">Pages</NavLink>
                </li>
                <li>
                  <NavLink to="/Contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Nav;
