import React, { useState } from "react";
import { images } from "../../Constans";
import { motion } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"

import './Navbar.scss'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <nav className="app__navbar">
                <div className="app__navbar-logo">
                    <img src={images.logo} alt="Logo of Tomasz Golab"/>
                </div>
                <ul className="app__navbar-links">
                    {['About', 'Program_list', 'Contact'].map((item) => (
                      <li className="app__flex" key={`link-${item}`}>
                        <a href={`#${item}`}>{item}</a>
                      </li>
                    ))
                    }
                </ul>
                <div className='app__navbar-menu'>
                    <HiMenu onClick={() => setToggle(true)} />
                    {toggle && (
                        <motion.div
                            whileInView={{ x: [200, 0] }}
                            transition={{ duration: 0.5, ease: 'backIn' }}
                        >
                            <HiX onClick={() => setToggle(false)}/>
                            <ul>
                                {['About', 'Program_list', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
