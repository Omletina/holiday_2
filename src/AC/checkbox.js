import { DELETE_CHECKBOX } from '../constants'

export function deleteCheckbox(checkboxId) {
    return{
        type: DELETE_CHECKBOX,
        payload: {
            checkboxId
        }
    }

}