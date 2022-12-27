/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

const NavigationDots = ({ active }) => (
    <div className="app__navigation">
        {['About', 'Program list', 'Contact'].map((item, index) => (
            <a
                href={`#${item}`}
                key={item + index}
                className="app__navigation-dot"
                style={active === item ? { backgroundColor: '#E6A4FF', border: '1px solid' } : {}}
            />
        ))}
    </div>
);

export default NavigationDots;
