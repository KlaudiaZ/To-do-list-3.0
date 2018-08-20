import { removeTask } from './modules/removeTask';
import { editTaskMode, updateTask, markTaskAsDone } from './modules/editTask';
import { addTask } from './modules/addTask';

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

    updateButton: () => {
        const update = document.getElementById('submit');
        update.addEventListener('click', (e) => {
            e.preventDefault();
            updateTask();
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

    addTaskButton: () => {
        const add = document.getElementById('submit');
        add.addEventListener('click', (e) => {
            e.preventDefault();
            addTask();
        });
    }
}

export default bind;