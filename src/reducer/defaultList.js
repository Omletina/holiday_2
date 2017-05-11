import { LOAD_DEFAULT_PARAM } from '../constants'

export default (defaultParamState=[], action) => {
    const { type, payload, response } = action;

    switch (type){
        case LOAD_DEFAULT_PARAM:
            return response;

    }
    return defaultParamState
}
