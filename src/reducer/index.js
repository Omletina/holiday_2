import { combineReducers } from 'redux'
import list from './list'
import listItem from './listItem'
import itemParam from './itemParam'

export default combineReducers({
    list: list,
    listItem: listItem,
    itemParam: itemParam
})

