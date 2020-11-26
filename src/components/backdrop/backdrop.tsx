import React from 'react'
import classes from "./backdrop.module.css";

type Props = {
  show: boolean,
  clicked: () => void;
}
const backdrop = ({show, clicked}:Props) => {
  return show ? <div onClick={clicked} className={classes.Backdrop}></div> : null
}

export default backdrop;