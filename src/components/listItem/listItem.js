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

        const { match } = this.props;


        const ListItem = (match) => (
            <div>{match.params.id}</div>
        );


        return (
            <div>
                <h3>Описание списка</h3>
                {ListItem(match)}
            </div>
        );
    }
}

export default ListItem;