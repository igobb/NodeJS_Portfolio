import React from "react";

import {AppWrapp, MotionWrapp} from "../../Wrapper";

import './Program_list.scss'

const Program_list = () => {

    return (
        <>
            <div className="app__program_list">
                <h2 className="head-text"><span>My NodeJS projects</span></h2>
                <p className="p-text bold-text">These are my projects that I created</p>
            </div>
            <motion.div
                className="app__program_list-list"
            >

            </motion.div>

        </>
    );
};

export default AppWrapp(MotionWrapp(Program_list, 'app__program_list'), 'Program_list', 'app__primarybg')