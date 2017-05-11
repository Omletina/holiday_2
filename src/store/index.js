import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import api from '../middlewares/api'
import createListItem from '../middlewares/createListItem'
import deleteCheckbox from '../middlewares/deleteCheckbox'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = applyMiddleware(api, createListItem, deleteCheckbox);
const store = createStore(reducer, {}, composeEnhancers(enhancer));

window.store = store;

export default store;