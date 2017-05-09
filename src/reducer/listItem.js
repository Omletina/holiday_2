import { LOAD_LIST_ITEM, DELETE_CHECKBOX } from '../constants'

export default (listItemState=[], action) => {
    const { type, payload, response } = action;

    switch (type){
        case LOAD_LIST_ITEM:
            return response;

        case DELETE_CHECKBOX:
            let newParam = listItemState.param.filter(item => item.id != payload.checkboxId);
            listItemState.param = newParam;
            return listItemState;
    }
    return listItemState
}
