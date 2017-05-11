import React, {Component, PropTypes} from 'react';
import { loadListItem, loadItemParam } from '../../AC/list'
import Checkbox from '../сheckbox/Checkbox';
import { connect } from 'react-redux'
import { Helper } from '../../services/helper';
import './listItem.css'

class ListItem extends Component {

    static propTypes = {
        listItem: PropTypes.object,
        match: PropTypes.object
    };

    helper = new Helper();

    componentWillMount(){}
    componentDidMount(){
        // Передаем в экшен id страницы, чтобы получить данные
        const { match, loadListItem, loadItemParam } = this.props;
        loadListItem(match.params.id);
        loadItemParam(match.params.id)
    }
    componentWillReceiveProps(){}
    componentWillUpdate(){}
    componentDidUpdate(){}
    componentWillUnmount(){}


    render() {

        const { match, listItem, itemParam } = this.props;

        const ListItem = (match) => (
            <div>{match.params.id}</div>
        );

        const checkboxItems = (itemParam && itemParam.length > 0) ? itemParam.map(item => <Checkbox parentId={match.params.id} item={item} key={item.id} />) : null;

        const itemCountry = listItem && listItem.country;
        const itemDate = (listItem &&  listItem.date) ? this.helper.formatDate(listItem.date) : null;

        return (
            <div>
                <h3>{ itemCountry }. Список документов для получения визы.</h3>
                <h3>Собрадь документы до { itemDate }</h3>
                { ListItem(match) }
                { checkboxItems }
            </div>
        );
    }
}

export default connect(state =>{
    return {
        listItem: state.listItem,
        itemParam: state.itemParam && state.itemParam.param
    }
}, {loadListItem, loadItemParam}, null, {pure: false} )(ListItem);

