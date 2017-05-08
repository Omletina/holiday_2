export class Helper {
    /**
     * Преобразование даты
     *
     * @param {Date} date
     * @returns {string} 22.07.1987

     */
    formatDate(date){
        var newDate = new Date(+date);

        var dd = newDate.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = newDate.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = newDate.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    };




}
