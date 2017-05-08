import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';
import { loadAllList, createListItem } from '../../AC/list'
import { connect } from 'react-redux'
import './list.css'


class List extends Component {

    static propTypes = {
        list: PropTypes.array.isRequired
    };


    componentWillMount(){}
    componentDidMount(){
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
                <span className="list-item_date">до: {this.formatDate(item.date)}</span>
            </Link>
         </li>
    );

    formatDate = date =>{
        var newDate = new Date(+date);

        var dd = newDate.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = newDate.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = newDate.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    };

    handleCreateItem = ev => {
        ev.preventDefault();
        const { createListItem, list } = this.props;
        createListItem(list.id);
        //createListItem(article.id)
    };


    render() {

        const { list } = this.props;
        const listItems = this.createList(list);


        return (
            <div>
                <h2>Списки в которых я участвую</h2>
                <ul className="list">
                    { listItems }
                </ul>
                <button onClick={this.handleCreateItem}>Создать новый список</button>
            </div>
        );
    }
}


export default connect(state => ({
    list: state.list
}), {loadAllList, createListItem}, null, {pure: false} )(List);