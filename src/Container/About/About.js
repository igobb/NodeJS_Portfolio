import React from 'react';
import './About.scss'
import { AppWrapp, MotionWrapp } from "../../Wrapper"
import { motion } from 'framer-motion'
import { images } from '../../Constans'

const About = () => {

    return (
        <>
            <div className='app__about app__flex'>
                <motion.div
                    whileInView={{ x: [-200, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='app__about-info'
                >
                    <div>
                        <h2 className="head-text">Welcome to my <span>backend</span> portfolio page featuring <span>node.js projects!</span></h2>
                            <p className="p-text bold-text">On this page, you will find a collection of all my <span>Node.js</span> projects that I am proud to share.</p>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, delayChildren: 1 }}
                    className='app__about-item'
                >
                    <img src={images.node} alt='Node.JS logo' />
                </motion.div>
            </div>
        </>
    );
};

export default AppWrapp(MotionWrapp(About, 'app__about'), 'About', 'app__whitebg')
