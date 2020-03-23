import React from "react";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
    <a className="navbar-brand">ToDoApp</a>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link">Home</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
