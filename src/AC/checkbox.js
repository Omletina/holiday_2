import { DELETE_CHECKBOX } from '../constants'

export function deleteCheckbox(parentId, id) {
    return{
        type: DELETE_CHECKBOX,
        payload: {
            id
        },
        deleteCheckbox: {
            request: 'PUT',
            url: 'itemParam/'+parentId,
            checkboxId: id

        }
    }

}