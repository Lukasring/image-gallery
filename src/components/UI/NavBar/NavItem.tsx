import React, { useState } from "react";
import classes from "./Navbar.module.css";

type Props = {
  name: string;
};

const NavItem: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <div onClick={() => setShow(false)} className={classes.Backdrop}></div>
      )}
      <li onClick={() => setShow(!show)}>
        <h2 className={classes.NavItemText}>{props.name}</h2>
        {show && props.children}
      </li>
    </>
  );
};

export default NavItem;
