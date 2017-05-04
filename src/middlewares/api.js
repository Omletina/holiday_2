export default store => next => action => {
    const { callAPI, ...rest } = action;
    if(!callAPI) return next(action);

    fetch(callAPI.url)
        .then(function(response) {
            debugger;
             return response.json();
        })
        .then(function(response) {
            debugger;
            next({...rest, response});
        })
        .catch(function(err) {
            debugger;
            console.log('Fetch Error :-S', err);
        });

}