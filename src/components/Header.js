import React from "react";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
    <a className="navbar-brand">ToDoApp</a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link">Home</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
