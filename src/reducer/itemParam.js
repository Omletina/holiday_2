import { LOAD_ITEM_PARAM, DELETE_CHECKBOX } from '../constants'

export default (itemParamState=[], action) => {
    const { type, payload, response } = action;

    switch (type){
        case LOAD_ITEM_PARAM:
            return response;

        case DELETE_CHECKBOX:
            let newParam = listItemState.param.filter(item => item.id != payload.checkboxId);
            listItemState.param = newParam;
            return itemParamState;
    }
    return itemParamState
}
