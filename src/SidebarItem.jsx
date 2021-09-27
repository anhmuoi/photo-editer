import React from 'react';
import PropTypes from 'prop-types';
import "./App.css"

SidebarItem.propTypes = {
    
};

function SidebarItem({name, handleClick, active}) {
    return (
       <button
        onClick={handleClick} 
       className={`sidebar__Item ${active ? 'active': ''}`}>{name}</button>
    );
}

export default SidebarItem;