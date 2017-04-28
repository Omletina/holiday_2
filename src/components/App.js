import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

class App extends Component {

    render() {
        return (
            <div className='container'>
                <h1>App</h1>
                <ul>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/genre'>Genre</Link></li>
                </ul>
                {/* добавили вывод потомков */}
                {this.props.children}
            </div>
        )
    }
}


export default App

