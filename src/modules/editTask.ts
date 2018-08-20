import utils from '../utils/utils';
import List from '../List';

export const editTaskMode = (id: number, tasks: any) => {
    const task = tasks.find((task: any) => {
        return task.id === id;
    });
    utils.setInputValues(task);
}

export const updateTask = () => {
    const task = utils.getInputValues();
    List.updateTask(task)
        .then((response) => {
            console.log(response);
            utils.renderAndBindTaskList();
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
    List.updateTask(task)
        .then((response) => {
            console.log(response);
            utils.renderAndBindTaskList();
        })
        .catch((err) => {
            console.log(err);
        });
}