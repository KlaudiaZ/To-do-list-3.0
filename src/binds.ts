import handle from './handlers';

const bind = {
    editTaskButton: (taskList: object) => {
        const btns = document.querySelectorAll('.edit');
        btns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const id: number = this.getAttribute('data-id');
                handle.editTask(id, taskList);
            });
        });
    },

    removeTaskButton: (taskList: object) => {
        const btns = document.querySelectorAll('.remove');
        btns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const id: number = this.getAttribute('data-id');
                handle.removeTask(id);
            });
        });
    }
}

export default bind;