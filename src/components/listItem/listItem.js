/**
 * Created by TSaparova on 02.05.2017.
 */
import React, {Component, PropTypes} from 'react';
import './listItem.css'

class ListItem extends Component {

    // static propTypes = {
    //     id: PropTypes.string
    // };

    componentWillMount(){}
    componentDidMount(){}
    componentWillReceiveProps(){}
    componentWillUpdate(){}
    componentDidUpdate(){}
    componentWillUnmount(){}

    render() {
        debugger;
        const {listId} = this.props;

        return (
            <div>
                <h3>Описание списка</h3>
                <div>{listId}</div>
            </div>
        );
    }
}

export default ListItem;
