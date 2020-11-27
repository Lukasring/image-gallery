import React from 'react';
import {motion} from 'framer-motion';
import classes from "./Modal.module.css";

type Props = {
  show: boolean,
  imgUrl: string,
  closeModal: () => void;
}
const Modal = ({show, closeModal, imgUrl}:Props) => {


  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className={classes.Backdrop} 
      onClick={closeModal}
    >
      <motion.img 
        initial={{y:'-100vh'}}
        animate={{y: '0'}}
        onLoad={() => console.log('loaded')} 
        src={imgUrl} 
        alt="hello darkness"/>
    </motion.div>
  )
}

export default React.memo(Modal);