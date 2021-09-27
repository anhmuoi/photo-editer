import React from 'react';
import PropTypes from 'prop-types';
import './App.css'
Slider.propTypes = {
    
};

function Slider({min, max, value, handleChange}) {
    return (
        <div>
            <input 
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            className="slider"
            >

            </input>

        </div>
    );
}

export default Slider;