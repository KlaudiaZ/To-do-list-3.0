import config from './utils/config';

class List {
    static getTasksFromServer() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            const method = 'GET';
            const url = config.url.getList;
            const async = true;

            xhr.open(method, url, async);

            xhr.onload = function () {
                resolve(JSON.parse(this.responseText));
            }
            xhr.onerror = function () {
                reject('Error: connection failed.');
            }
            xhr.send();
        });
    }
}

export default List;