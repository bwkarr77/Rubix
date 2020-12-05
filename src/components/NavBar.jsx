import React from "react";
import { NavLink as Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const NavBar = () => {
  return (
    // <div>
    <header id="header">
      <nav id="navbar">
        <ul>
          <li>
            <Link to={"/Cube"}>
              <Button content="Cube" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
