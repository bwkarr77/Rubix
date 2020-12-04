import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    // <div>
    <header id="header">
      <nav id="navbar">
        <ul>
          <li>
            <Link to={"/"}>
              <Button content="Cube" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
