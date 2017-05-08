import {ApiService} from './../services/api-service';
const api = new ApiService();

export default store => next => action => {
    const { callAPI, ...rest } = action;
    if(!callAPI) return next(action);

    api.get(callAPI.url)
    .then(function(response) {
        next({...rest, response});
    })
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });

}