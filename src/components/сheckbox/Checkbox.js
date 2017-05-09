import React, { PropTypes, Component } from 'react';
import CheckboxMore from './CheckboxMore';
import { deleteCheckbox } from '../../AC/checkbox'
import { connect } from 'react-redux'
import './checkbox.css'



class Checkbox extends Component {

    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string,
            more: PropTypes.string
        }).isRequired,
        //from connect
        deleteCheckbox: PropTypes.func
    };


    //defaultProps срабатывает раньше propTypes. Поэтому даже на обязательное поле не выведет ошибку, код ниже для примера
    static defaultProps = {
        item: {}
    };


    handleDeleteCheckbox = ev=>{
        ev.preventDefault();
        const { deleteCheckbox, item } = this.props;
        deleteCheckbox(item.id)
    };


    render(){
        const {item} = this.props;
        const addMore = item.more ? <CheckboxMore text={item.more} /> : null;
        return (
            <label className="checkbox">
                <input className="checkbox_input" type="checkbox" name="checkbox_" defaultValue={ item.id }/>
                <span className="checkbox_input-emu"/>
                <span className="checkbox_label-emu">{item.text}</span>
                { addMore }
                <br/>
                <a href="#" onClick={this.handleDeleteCheckbox}>удалить</a>
            </label>
        )
    }

}

export default connect(null, {
    deleteCheckbox
})(Checkbox);
//export default Checkbox;