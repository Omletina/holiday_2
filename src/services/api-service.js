export class ApiService {

    url_prefix = 'http://localhost:3000';

    get(path, params = {}) {
        return this.rq(this.getUrl(path, params), 'GET');
    }

    post(path, ...args) {
        const data = args.pop();
        const params = args.pop();

        return this.rq(this.getUrl(path, params), 'POST', data);
    }



    // api ============= === =======

    /**
     * метод для преобразования URL
     *
     * @param {string | array} url
     * @param {object} args
     * @returns {string}
     *
     * @example
     * getUrl(['path', 'to', 'page']) => '/path/to/page'
     * getUrl(['path', 'to', 'page'], {q: 'xxx', p: 1}) => '/path/to/page?q=xxx&p=1'
     *
     * @memberOf ApiService
     */
    getUrl(url, args) {

        let params = [];

        const hasParams = args && typeof args === 'object';

        if (hasParams) {
            for (let k in arg) {
                if (args.hasOwnProperty(k)) {
                    params.push(`${k}=${encodeURI(args[k])}`);
                }
            }
        }

        if (typeof url === 'object' && !!url.length) {
            url = url.filter(item => !!item).join('/');
        }

        return this.url_prefix +
            (url[0] === '/' ? '' : '/') +
            url +
            (params.length ? '?' + params.join('&') : '');
    }


    /**
     * Метод для отправки запроса
     * @type {Object}
     * @return {Promise}
     */
    rq(url, type, payload = {}) {
        let data = JSON.stringify(payload);

        return fetch(url, {
                method: type,
                mode: 'cors',
                headers: new Headers({
                    'Accept': 'application/json, */*',
                    'Content-Type': 'application/json'
                }),
                body: data
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw res;
                }
            });
    }
}
