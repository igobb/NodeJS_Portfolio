import React from 'react';
import {SocialMedia, NavigationDots} from "../Components";


const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />

            <div className="app__wrapper app__flex">
                <Component />

                <div className="copyright">
                    <p className="p-text">@2022 Igob</p>
                    <p className="p-text">Have a nice day!</p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    );
};

export default AppWrap;
