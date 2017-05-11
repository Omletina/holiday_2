import React, {Component, PropTypes} from 'react';
import { loadDefaultParam } from '../../AC/defaultList'
import Checkbox from '../сheckbox/Checkbox';
import { connect } from 'react-redux'
import { Helper } from '../../services/helper';

class CreateList extends Component {

    static propTypes = {
        defaultParam: PropTypes.array
    };

    state = {
        country: ''
    };

    componentWillMount(){}
    componentDidMount(){
        const { loadDefaultParam } = this.props;
        loadDefaultParam();
    }
    componentWillReceiveProps(){}
    componentWillUpdate(){}
    componentDidUpdate(){}
    componentWillUnmount(){}


    handleSubmit = (e) => {
        e.preventDefault();
        debugger;
    };

    handleCountryChange = (e) => {
        this.setState({
            country: e.target.value
        })
    };

    render() {

        const { defaultParam } = this.props;

        const checkboxItems = (defaultParam && defaultParam.length > 0) ? defaultParam.map(item => <Checkbox isRemove={false} item={item} key={item.id} />) : null;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>Создайте новый список документов для получения визы.</div>
                <div>
                    <lable>Куда отправляетесь, страна</lable>
                    <input type="text" name="country" value={this.state.country} onChange={this.handleCountryChange} />
                </div>
                <div>
                    <lable>Дата отправления, страна</lable>
                    <input type="text" name="date"  />
                </div>
                <div>
                    <lable>Документы которые нужно получить</lable>
                    <div>
                        { checkboxItems }
                    </div>
                </div>
                <div>
                    <input type="submit" value="Создать"/>
                </div>
            </form>
        );
    }
}

export default connect(state =>{
    return {
        defaultParam: state.defaultParam && state.defaultParam.param
    }
}, {loadDefaultParam}, null, {pure: false} )(CreateList);
