import config from './utils/config';
import Task from './task';

class List {
    getTasksFromServer() {
        let xhr = new XMLHttpRequest();
        const method = 'GET';
        const url = config.url.getList;
        const async = true;

        xhr.open(method, url, async);

        xhr.onload = function () {
            if (this.status == 200) {
                let items = JSON.parse(this.responseText);

                items.forEach((item: any, index: number) => {
                    item = new Task(item.id, item.title, item.details, item.priority, item.isDone);
                    item.render(index);
                });
            } else {
                alert(this.status);
            }
        }
        xhr.send();
    }
}

export default List;