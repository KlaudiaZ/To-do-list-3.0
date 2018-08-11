import List from '../list';
import Task from '../task';

export const getTasks = () => {
    List.getTasksFromServer()
        .then((items: object[]) => {
            items.forEach((item: any, index: number) => {
                item = new Task(item.id, item.title, item.details, item.priority, item.isDone);
                item.render(index);
            });
        })
        .catch((err) => {
            console.log(err);
        });
}