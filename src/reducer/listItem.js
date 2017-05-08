import { LOAD_LIST_ITEM } from '../constants'

export default (listItemState=[], action) => {
    const { type, payload, response } = action;

    switch (type){
        case LOAD_LIST_ITEM:
            return response;
    }
    return listItemState
}