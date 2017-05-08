import {ApiService} from './../services/api-service';
const api = new ApiService();

export default store => next => action => {
    const { createListItem, ...rest } = action;
    if(!createListItem) return next(action);

    api.post(createListItem.url, createListItem.param)
        .then(function(response) {
            api.post(createListItem.urlItem, createListItem.paramItem)
                .catch(function(err) {
                    console.log('Fetch Error :-S', err);
                });
            next({...rest, response});
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });


}
