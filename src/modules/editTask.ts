import Server from '../Server';
import List from '../List';

export const editTask = (task: object) => {

    Server.updateTask(task)
        .then((response) => {
            const list = new List;
            console.log(response);
            list.render();
        })
        .catch((err) => {
            console.log(err);
        });
}

export const markTaskAsDone = function (id: number, tasks: any) {

    const task = tasks.find((task: any) => {
        return task.id === id;
    });
    task.isDone = "1";
    Server.updateTask(task)
        .then((response) => {
            console.log(response);
            const list = new List;
            list.render();
        })
        .catch((err) => {
            console.log(err);
        });
}