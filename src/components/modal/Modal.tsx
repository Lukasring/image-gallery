import React from 'react';
import Backdrop from '../backdrop/backdrop';
import classes from "./Modal.module.css";

type Props = {
  show: boolean,
  imgUrl: string,
  closeModal: () => void;
}
const Modal = ({show, closeModal, imgUrl}:Props) => {


  return (
    <div className={classes.Backdrop} onClick={closeModal}>
      <img onLoad={() => console.log('loaded')} src={imgUrl} alt="hello darkness"/>
    </div>
  )
}

export default React.memo(Modal);