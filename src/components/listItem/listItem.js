import React, {Component, PropTypes} from 'react';
import { loadListItem } from '../../AC/list'
import Checkbox from '../сheckbox/Checkbox';
import { connect } from 'react-redux'
import { Helper } from '../../services/helper';
import './listItem.css'

class ListItem extends Component {

    // static propTypes = {
    //     id: PropTypes.string
    // };

    helper = new Helper();

    componentWillMount(){}
    componentDidMount(){
        const { match, loadListItem } = this.props;
        loadListItem(match.params.id);
    }
    componentWillReceiveProps(){}
    componentWillUpdate(){}
    componentDidUpdate(){}
    componentWillUnmount(){}


    render() {

        const { match, listItem } = this.props;

        const ListItem = (match) => (
            <div>{match.params.id}</div>
        );


        const checkboxItems = (listItem.param && listItem.param.length > 0) ? listItem.param.map(item => <Checkbox item={item} key={item.id} />) : null;

        const country = listItem && listItem.country;
        const date = listItem.date ? this.helper.formatDate(listItem.date) : null;

        return (
            <div>
                <h3>{country}. Список документов для получения визы.</h3>
                <h3>Собрадь документы до { date }</h3>
                { ListItem(match) }
                { checkboxItems }
            </div>
        );
    }
}

export default connect(state =>{
    return {
        listItem: state.listItem
    }
}, {loadListItem}, null, {pure: false} )(ListItem);
//export default ListItem;
