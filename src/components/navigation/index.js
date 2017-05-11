import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import './navigation.css'

function Navigation() {
    return (
        <div className="navigation">
            <ul className="navigation-list">
                <li className="navigation-item"><Link className="navigation-link" to='/list'>Мои списки</Link></li>
                <li className="navigation-item"><Link className="navigation-link" to='/createList'>Создать новый список</Link></li>
            </ul>
        </div>
    )

}

export default Navigation;