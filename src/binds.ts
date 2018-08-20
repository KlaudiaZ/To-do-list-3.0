import { removeTask } from './modules/removeTask';
import { editTaskMode, markTaskAsDone } from './modules/editTask';

const bind = {
    editTaskButton: (taskList: object) => {
        const btns = document.querySelectorAll('.edit');
        btns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const id: number = this.parentElement.getAttribute('data-id');
                editTaskMode(id, taskList);
            });
        });
    },

    removeTaskButton: () => {
        const btns = document.querySelectorAll('.remove');
        btns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const id: number = this.parentElement.getAttribute('data-id');
                removeTask(id);
            });
        });
    },

    checkbox: (taskList: object) => {
        const btns = document.querySelectorAll('.form-check-input');
        btns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const id: number = this.parentElement.parentElement.getAttribute('data-id');
                markTaskAsDone(id, taskList);
            });
        });
    },
}

export default bind;