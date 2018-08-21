import Form from './Form';
import { getTasks } from './modules/getTasks';
import { markTaskAsDone, undoCompleted } from './modules/editTask';
import { removeTask, removeCompleted } from './modules/removeTask';

class List {
    private form = new Form;
    private completed: number[] = [];

    constructor(init?: boolean) {
        if (init) this.render();
    }

    private storeCompleted() {
        const tasks = document.querySelectorAll('.completed');
        tasks.forEach((task) => {
            const id: number = parseInt(task.getAttribute('data-id'));
            this.completed.push(id);
        })
    }

    private bindEdit(taskList: any) {
        const that = this;
        const btns = document.querySelectorAll('.edit');
        btns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const id: number = this.parentElement.getAttribute('data-id');
                const task = taskList.find((task: any) => {
                    return task.id === id;
                });
                that.form.enableEdit(task);
            });
        });
    }

    private bindRemove() {
        const btns = document.querySelectorAll('.remove');
        btns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const id: number = this.parentElement.getAttribute('data-id');
                removeTask(id);
            });
        });
    }

    private bindCheckbox(taskList: object) {
        const btns = document.querySelectorAll('.form-check-input');
        btns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const id: number = this.parentElement.parentElement.getAttribute('data-id');
                markTaskAsDone(id, taskList);
            });
        });
    }

    private bindCompletedTasks(taskList: object) {
        const btns = document.querySelectorAll('.completed');
        btns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const id: number = this.getAttribute('data-id');
                undoCompleted(id, taskList);
            });
        });
    }

    private renderClearButton() {
        const clear = document.createElement('button');
        clear.classList.add('btn', 'btn-primary', 'col-4', 'h-25');
        clear.innerHTML = 'Clear';
        clear.addEventListener('click', (e) => {
            removeCompleted(this.completed);
        });
        document.getElementById('completed').appendChild(clear);
    }

    public render() {
        getTasks().then((taskList) => {
            this.bindEdit(taskList);
            this.bindRemove();
            this.bindCheckbox(taskList);
            this.bindCompletedTasks(taskList);
            this.storeCompleted();
            this.renderClearButton();
        });
    }
}

export default List;