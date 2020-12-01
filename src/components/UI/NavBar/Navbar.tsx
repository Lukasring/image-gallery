import React from "react";
import classes from "./Navbar.module.css";

const Navbar: React.FC = (props) => {
  return (
    <nav className={classes.Navbar}>
      <ul>{props.children}</ul>
    </nav>
  );
};

export default Navbar;
