import { LOAD_ADD_LIST, CREATE_LIST_ITEM } from '../constants'

export function loadAllList() {
    return {
        type: LOAD_ADD_LIST,
        callAPI:{
            request: 'GET',
            url: 'http://localhost:3000/list'
        }

    }
}

export function createListItem() {
    return {
        type: CREATE_LIST_ITEM,
        createListItem:{
            request: 'POST',
            url: 'http://localhost:3000/list',
            param: {
                "country": "Индонезия",
                "date": "1493965864740"
            }
        }

    }
}