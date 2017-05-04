import { LOAD_ADD_LIST } from '../constants'

export function loadAllList() {
    return {
        type: LOAD_ADD_LIST,
        callAPI:{
            request: 'GET',
            url: 'http://localhost:3000/list'
        }

    }
}