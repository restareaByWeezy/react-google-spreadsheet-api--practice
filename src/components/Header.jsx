import React from 'react';
import '../styles/header.scss'

const Header = () => {
    const dt = new Date();
    const dtToString = dt.toDateString();

    return (
        <div className="header">
            <h1>Invoice</h1>
            <div className="header-client">Client-Boink</div>
            <div className="header-date">Date Period: {dtToString}</div>
        </div>
        
    );
};

export default Header;