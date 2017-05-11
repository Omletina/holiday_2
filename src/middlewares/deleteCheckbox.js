import {ApiService} from './../services/api-service';
const api = new ApiService();

export default store => next => action => {
    const { deleteCheckbox, ...rest } = action;

    // Херня конечно, но пока не придумала как сделать по другому
    // ГЕТ Запрос на получение параметров
    // Потом PATCH запрос на изменение этих самых параметров
    if(!deleteCheckbox) return next(action);
    api.get(deleteCheckbox.url)
        .then(function(response) {
            // Удаляем параметр
            var newParam = [];
            if (!!response && response[0]){
                newParam = response[0].param.filter(item => item.id != deleteCheckbox.checkboxId)
            }

            api.put(deleteCheckbox.url, {"id": response[0].id, "param": newParam})
                .then(function(response) {
                    debugger;
                    next({...rest, response});
                })
                .catch(function(err) {
                    debugger;
                    console.log('Fetch Error :-S', err);
                });

        })
        .catch(function(err) {
            debugger;
            console.log('Fetch Error :-S', err);
        });

}