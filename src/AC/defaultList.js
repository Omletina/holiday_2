import { LOAD_DEFAULT_PARAM } from '../constants'


export function loadDefaultParam() {
    return {
        type: LOAD_DEFAULT_PARAM,
        callAPI:{
            request: 'GET',
            url: 'defaultParam'
        }

    }
}