import List from '../List';
import Task from '../Task';

export async function getTasks() {
    await List.getTasksFromServer()
        .then(function (items: object[]) {
            let i: number = 1;
            const incomplete: any = document.getElementById('tasks');
            const complete: any = document.getElementById('completed');
            incomplete.innerHTML = '';
            complete.innerHTML = '';
            items.forEach((item: any) => {
                item = new Task(item.id, item.title, item.details, item.priority, item.isDone);
                !item.render(i, incomplete, complete) ? i++ : i;
            });
        })
        .catch((err) => {
            console.log(err);
        });
    return List.getTasksFromServer();
}