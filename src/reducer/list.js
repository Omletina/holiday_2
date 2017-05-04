import { LOAD_ADD_LIST } from '../constants'

export default (listState=[], action) => {
    const { type, payload, response } = action;

    switch (type){
        case LOAD_ADD_LIST:
            return response;
    }
    return listState
}