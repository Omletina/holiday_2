import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';
import { loadAllList } from '../../AC/list'
import { connect } from 'react-redux'
import './list.css'


class List extends Component {

    static propTypes = {
        // list: PropTypes.array.isRequired
    };



    componentWillMount(){}
    componentDidMount(){
        debugger;
        this.props.loadAllList();
    }
    componentWillReceiveProps(){}
    componentWillUpdate(){}
    componentDidUpdate(){}
    componentWillUnmount(){}


    createList = dictList => dictList.map(item =>
         <li className="list-item" key={item.id}>
            <Link className="list-link" to={`/listItem/${item.id}`}>
                <span className="list-item_name">{item.country}</span>
                <span className="list-item_date">до: {item.date}</span>
            </Link>
         </li>
    );


    render() {
        const dictList = [
            { "id": 0, "country": "Япония", "date": 1493815874684 },
            { "id": 1, "country": "Испания", "date": 1464728400000 }
        ];
        debugger;
        const list = this.createList(dictList);


        return (
            <div>
                <h2>Списки в которых я участвую</h2>
                <ul className="list">
                    { list }
                </ul>
            </div>
        );
    }
}

export default connect(state=>({
    list: state.list
}), {loadAllList} )(List);