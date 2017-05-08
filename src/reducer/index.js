import { combineReducers } from 'redux'
import list from './list'
import listItem from './listItem'

export default combineReducers({
    list: list,
    listItem: listItem
})

