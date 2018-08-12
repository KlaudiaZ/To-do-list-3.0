import { getTasks } from '../modules/getTasks';
import bind from '../binds';

export const renderAndBindTaskList = () => {
    getTasks().then((taskList) => {
        bind.editTaskButton(taskList);
        bind.removeTaskButton();
        bind.checkbox(taskList);
    });
}