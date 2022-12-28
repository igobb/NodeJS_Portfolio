import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import {AiOutlineClose} from 'react-icons/ai'

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

const CheckHostIp = ({ handleClose }) => {

    return (
      <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
              <div className="app__modal-close">
                  <AiOutlineClose onClick={handleClose}>Close</AiOutlineClose>
              </div>
              <p>essa</p>
          </motion.div>
      </Backdrop>
    );
  };


  export default CheckHostIp;