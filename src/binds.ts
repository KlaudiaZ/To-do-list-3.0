import handle from './handlers';

const bind = {
    editTaskButton: (taskList: object) => {
        const btns = document.querySelectorAll('.edit');
        btns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const id: number = this.parentElement.getAttribute('data-id');
                handle.editTask(id, taskList);
            });
        });
    },

    removeTaskButton: () => {
        const btns = document.querySelectorAll('.remove');
        btns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const id: number = this.parentElement.getAttribute('data-id');
                handle.removeTask(id);
            });
        });
    },

    checkbox: (taskList: object) => {
        const btns = document.querySelectorAll('.form-check-input');
        btns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const id: number = this.parentElement.parentElement.getAttribute('data-id');
                handle.markTaskAsDone(id, taskList);
            });
        });
    }
}

export default bind;