import { LOAD_ADD_LIST, CREATE_LIST_ITEM, LOAD_LIST_ITEM, LOAD_ITEM_PARAM } from '../constants'

export function loadAllList() {
    return {
        type: LOAD_ADD_LIST,
        callAPI:{
            request: 'GET',
            url: 'list'
        }

    }
}

export function createListItem(newList) {
    return {
        type: CREATE_LIST_ITEM,
        createListItem:{
            request: 'POST',
            url: 'list',
            param: {
                "country": newList.country,
                "date": newList.date
            },
            urlItem: 'itemParam',
            paramItem: {
                "param": newList.param
            }
        }

    }
}

export function loadListItem(id) {
    return {
        type: LOAD_LIST_ITEM,
        callAPI:{
            request: 'GET',
            url: 'list/'+id
        }
    }
}

export function loadItemParam(id) {
    return {
        type: LOAD_ITEM_PARAM,
        callAPI:{
            request: 'GET',
            url: 'itemParam/'+id
        }
    }
}