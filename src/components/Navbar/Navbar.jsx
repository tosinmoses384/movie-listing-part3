import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import menu from "../../../assets/iconfinder_menu-alt_134216.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  // ....................................................................
  // toggle btn function
  onToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    const { toggle } = this.state;
    return (
      <Fragment>
        <div className="Navbar-container">
          <div className="Navbar-group">
            <div className="navbar">
              <div className="logo">STUTERN MOVIES</div>
              <img
                className="menu"
                src={menu}
                alt=" menu"
                onClick={this.onToggle}
              />
            </div>
            <div className={toggle ? "Navlinks" : "rm-Navlinks"}>
              <Link to="#">Home</Link>
              <Link to="#">About</Link>
              <Link to="#">Contact us</Link>
              <Link to="#">Sign up</Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
