export default store => next => action => {
    const { callAPI, ...rest } = action;
    if(!callAPI) return next(action);

    fetch(callAPI.url)
        .then(function(response) {
             return response.json();
        })
        .then(function(response) {
            next({...rest, response});
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });

}