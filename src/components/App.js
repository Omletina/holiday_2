import React, { Component, PropTypes } from 'react';
import Navigation from '../components/navigation';

class App extends Component {

    render() {
        return (
            <div className='container'>
                <h1>App</h1>
                <Navigation />
                {/* добавили вывод потомков */}
                {this.props.children}
            </div>
        )
    }
}


export default App

