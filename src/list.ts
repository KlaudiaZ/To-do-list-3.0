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
                resolve(JSON.parse(this.response));
            }
            xhr.onerror = function () {
                reject('Error: connection failed.');
            }
            xhr.send();
        });
    }

    static removeTaskFromServer(id: number) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            const method = 'DELETE';
            const url = config.url.deleteTask;
            const async = true;

            xhr.open(method, url, async);

            xhr.onload = function () {
                resolve(JSON.parse(this.response));
            }
            xhr.onerror = function () {
                reject('Error: failed to delete the item.');
            }
            xhr.send(JSON.stringify({ id: id }));
        });
    }
}

export default List;