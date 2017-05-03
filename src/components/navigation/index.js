import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import './navigation.css'

function Navigation() {
    return (
        <div className="navigation">
            <ul className="navigation-list">
                <li className="navigation-item"><Link className="navigation-link" to='/lists'>Lists</Link></li>
                <li className="navigation-item"><Link className="navigation-link" to='/page_2'>Page_2</Link></li>
            </ul>
        </div>
    )

}

export default Navigation;