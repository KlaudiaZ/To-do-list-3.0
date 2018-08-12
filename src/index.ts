import { getTasks } from './modules/getTasks';
import handle from './handlers';

export const init = () => {
    console.log('Initializing...');

    getTasks().then((taskList) => {
        bindEditTaskButton(taskList);
        bindRemoveTaskButton(taskList);
    });
}

const bindEditTaskButton = (taskList: object) => {
    const btns = document.querySelectorAll('.edit');
    btns.forEach((btn) => {
        btn.addEventListener('click', function () {
            const id: number = this.getAttribute('data-id');
            handle.editTask(id, taskList);
        });
    });
}

const bindRemoveTaskButton = (taskList: object) => {
    const btns = document.querySelectorAll('.remove');
    btns.forEach((btn) => {
        btn.addEventListener('click', function () {
            const id: number = this.getAttribute('data-id');
            handle.removeTask(id);
        });
    });
}