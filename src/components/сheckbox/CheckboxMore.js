import React, { Component, PropTypes } from 'react';
import toggleOpen from '../../decorators/toggleOpen';
import './checkbox.css'

function CheckboxMore(props) {
    return (
        <div className="checkbox_more">
            { getLinkMore(props) }
            { getBodyMore(props) }
        </div>
    )

}

CheckboxMore.propTypes = {
    text: PropTypes.string.isRequired
};

function getLinkMore(props) {
    const { toggleOpen, isOpen } = props;
    const _classOpen = isOpen ? 'open' : '';
    return  <a href="javascript://" className={['checkbox_more-link', _classOpen].join(' ')} onClick={toggleOpen} >Подробнее</a>;
}

function getBodyMore(props) {
    const { text, isOpen } = props;
    if (!isOpen) return null;
    return  <div className="checkbox_more-text">{ text }</div>;
}

export default toggleOpen(CheckboxMore);