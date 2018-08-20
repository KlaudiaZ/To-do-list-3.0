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

    static updateTask(task: object) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            const method = 'PUT';
            const url = config.url.updateTask;
            const async = true;

            xhr.open(method, url, async);

            xhr.onload = function () {
                resolve(JSON.parse(this.response));
            }
            xhr.onerror = function () {
                reject('Error: failed to update the task.');
            }
            xhr.send(JSON.stringify(task));
        });
    }

    static addTask(task: object) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            const method = 'POST';
            const url = config.url.addTask;
            const async = true;

            xhr.open(method, url, async);

            xhr.onload = function () {
                resolve(JSON.parse(this.response));
            }
            xhr.onerror = function () {
                reject('Error: failed to add new task.');
            }
            xhr.send(JSON.stringify(task));
        });
    }
}

export default List;