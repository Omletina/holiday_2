import React, {Component, PropTypes} from 'react';
// import { Link } from 'react-router-dom';
import './list.css'


import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class List extends Component {

    static propTypes = {};

    componentWillMount(){}
    componentDidMount(){}
    componentWillReceiveProps(){}
    componentWillUpdate(){}
    componentDidUpdate(){}
    componentWillUnmount(){}


    render() {
        const id = '123';

        return (
            <div>
                <h2>Списки в которых я участвую</h2>
                <ul className="list">
                    <li className="list-item">
                        <Link className="list-link" to={`/listItem/${id}`}>
                            <span className="list-item_name">Италия</span>
                            <span className="list-item_date">до: 15.05.2017</span>
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link className="list-link" to='/listItem/bus'>
                            <span className="list-item_name">Партугалия</span>
                            <span className="list-item_date">до: 20.06.2017</span>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default List;
