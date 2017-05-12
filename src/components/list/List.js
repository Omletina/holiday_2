import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { loadAllList } from '../../AC/list'
import { Helper } from '../../services/helper';
import './list.css'


class List extends Component {

    static propTypes = {
        list: PropTypes.array.isRequired
    };

    helper = new Helper();

    componentDidMount(){
        this.props.loadAllList();
    }

    createList = dictList => dictList.map(item =>
         <li className="list-item" key={item.id}>
            <Link className="list-link" to={`/listItem/${item.id}`}>
                <span className="list-item_name">{item.country}</span>
                <span className="list-item_date">до: {this.helper.formatDate(item.date)}</span>
            </Link>
         </li>
    );


    render() {
        const { list } = this.props;
        const listItems = this.createList(list);


        return (
            <div>
                <h2>Списки в которых я участвую</h2>
                <ul className="list">
                    { listItems }
                </ul>
            </div>
        );
    }
}


export default connect(state => ({
    list: state.list
}), {loadAllList}, null, {pure: false} )(List);