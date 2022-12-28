import React, {useState} from "react";
import {AppWrapp, MotionWrapp} from "../../Wrapper";
import { motion, AnimatePresence } from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';
import Modal from '../../Components/Modal/CheckHostIp'

import './Program_list.scss'

const Program_list = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    return (
        <>
            <div className="app__program_list">
                <h2 className="head-text"><span>My NodeJS projects</span></h2>
                <p className="p-text bold-text">These are my projects that I created</p>
                <div className="app__program_list-container">
                    <motion.div
                        className="app__program_list-list"
                    >
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__program_list-item app__flex"
                        >
                            <div id="host-ip-adress" className="app__flex">
                                <p>FOTO</p>
                                <h4 className="head-text">IP address of the host</h4>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="save-button"
                                    onClick={() => (modalOpen ? close() : open())}
                                >
                                    Check it out!
                                </motion.button>
                            </div>
                            <Tooltip anchorId="host-ip-adress" content="With this program, you can check the IP address of the host. Enter the hostname and you will receive its IP address." place="top" />
                        </motion.div>
                    </motion.div>
                </div>
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                >
                    {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
                </AnimatePresence>
            </div>
        </>
    );
};

export default AppWrapp(MotionWrapp(Program_list, 'app__program_list'), 'Program_list', 'app__primarybg')