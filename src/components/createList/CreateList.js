import React, {Component, PropTypes} from 'react';
import { loadDefaultParam } from '../../AC/defaultList'
import { createListItem } from '../../AC/list'
import Checkbox from '../сheckbox/Checkbox';
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';


class CreateList extends Component {

    static propTypes = {
        defaultParam: PropTypes.array
    };


    constructor(props){
        super(props);
        this.state = {
            country: '',
            date: '',
            vParam: []
        };
    }

    componentDidMount(){
        const { loadDefaultParam } = this.props;
        loadDefaultParam();
    }

    handleSubmit = ev => {
        ev.preventDefault();
        const { createListItem, defaultParam } = this.props;
        let _sParam = [],
            _date = +this.state.date._d,
            _data = null;

        // фильтруем параметр и передаем то, что нужно создаь
        _sParam = defaultParam.filter(item =>{
            return this.state.vParam.some(item_2 => item.id == item_2)
        });

        _data = {
            country: this.state.country,
            date: _date,
            param: _sParam
        };

        createListItem(_data);
    };

    handleChange = field => ev => {
        if(field == 'date'){
            this.setState({[field]: ev});
            return;
        }
        // У date другой event, поэтому проверка после проверки на date
        if (ev.target.value.length > 5) return;
        if(field == 'vParam'){
            let arr = this.state.vParam;
            // обновляем и фильтруем массив.
            if(ev.target.checked) {
                if(arr.every(el => el != ev.target.value)) arr.push(ev.target.value);
            }
            else{ arr = arr.filter(item => item != ev.target.value); }
            this.setState({[field]: arr});
            return;
        }
        this.setState({
            [field]: ev.target.value
        })
    };


    render() {
        const { defaultParam } = this.props;
        const checkboxItems = (defaultParam && defaultParam.length > 0) ? defaultParam.map(item => <Checkbox isRemove={false} item={item} key={item.id} func={ this.handleChange('vParam') } />) : null;

        return (
            <form onSubmit={this.handleSubmit}>
                <p><strong>Создайте новый список документов для получения визы.</strong></p>
                <div className="control-group">
                    <lable className="control-label">Куда отправляетесь, страна</lable>
                    <input className="control-text" type="text" name="country" value={this.state.country} onChange={this.handleChange('country')} />
                </div>
                <div className="control-group">
                    <lable className="control-label">Дата отправления в отпуск</lable>
                    <DatePicker
                        className="control-text"
                        dateFormat="DD.MM.YYYY"
                        selected={this.state.date}
                        onChange={this.handleChange('date')}
                    />
                </div>
                <div className="control-group">
                    <lable className="control-label">Документы которые нужно получить</lable>
                    <div className="control-multi">
                        { checkboxItems }
                    </div>
                </div>
                <div className="button-wrap left">
                    <button className="blue" type="submit">
                        <span className="blue-title">Создать</span>
                    </button>
                </div>
            </form>
        );
    }
}

export default connect(state =>{
    return {
        defaultParam: state.defaultParam && state.defaultParam.param
    }
}, {loadDefaultParam, createListItem}, null, {pure: false} )(CreateList);
