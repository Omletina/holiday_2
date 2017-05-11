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

export function createListItem() {
    return {
        type: CREATE_LIST_ITEM,
        createListItem:{
            request: 'POST',
            url: 'list',
            param: {
                "country": "Индонезия",
                "date": "1493965864740"
            },
            urlItem: 'listItem',
            paramItem: {
                "country": "Индонезия",
                "date": "1493965864740",
                "param": []
            }
        }

    }
}

export function loadListItem(id) {
    return {
        type: LOAD_LIST_ITEM,
        callAPI:{
            request: 'GET',
            url: 'list?id='+id
        }
    }
}

export function loadItemParam(id) {
    return {
        type: LOAD_ITEM_PARAM,
        callAPI:{
            request: 'GET',
            url: 'itemParam?id='+id
        }
    }
}