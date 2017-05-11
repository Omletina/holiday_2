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
            if (!!response && response.param.length > 0){
                newParam = response.param.filter(item => item.id != deleteCheckbox.checkboxId)
            }

            api.put(deleteCheckbox.url, {"param": newParam})
                .then(function(response) {
                    next({...rest, response});
                })
                .catch(function(err) {
                    console.log('Fetch Error :-S', err);
                });

        })
        .catch(function(err) {
            debugger;
            console.log('Fetch Error :-S', err);
        });

}