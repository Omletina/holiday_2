export default store => next => action => {
    const { createListItem, ...rest } = action;
    if(!createListItem) return next(action);

    fetch(createListItem.url,{
        method: createListItem.request,
        body: JSON.stringify(createListItem.param)
    })
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