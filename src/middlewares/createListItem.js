import {ApiService} from './../services/api-service';

const api = new ApiService();


export default store => next => action => {
    const { createListItem, ...rest } = action;
    if(!createListItem) return next(action);

        api.post('list', createListItem.param)
        // fetch(createListItem.url,{
        //     method: createListItem.request,
        //     body: JSON.stringify(createListItem.param)
        // })
        //     .then(function(response) {
        //         debugger;
        //         return response.json();
        //     })
        .then(function(response) {
            next({...rest, response});
        })
        .catch(function(err) {
            debugger;
            console.log('Fetch Error :-S', err);
        });

}
