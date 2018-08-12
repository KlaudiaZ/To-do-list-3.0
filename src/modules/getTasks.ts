import List from '../list';
import Task from '../task';

export async function getTasks() {
    await List.getTasksFromServer()
        .then(function (items: object[]) {
            let i: number = 1;
            items.forEach((item: any) => {
                item = new Task(item.id, item.title, item.details, item.priority, item.isDone);
                !item.render(i) ? i++ : i;
            });
        })
        .catch((err) => {
            console.log(err);
        });
    return List.getTasksFromServer();
}