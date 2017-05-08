import { LOAD_ADD_LIST, CREATE_LIST_ITEM, LOAD_LIST_ITEM } from '../constants'

export default (listState=[], action) => {
    const { type, payload, response } = action;

    switch (type){
        case LOAD_ADD_LIST:
            return response;

        case CREATE_LIST_ITEM:
            listState.push(response);
            return listState;
    }
    return listState
}