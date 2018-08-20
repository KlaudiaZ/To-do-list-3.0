import Form from './Form';
import { getTasks } from './modules/getTasks';
import { markTaskAsDone } from './modules/editTask';
import { removeTask } from './modules/removeTask';

class List {
    private form = new Form;

    constructor() {
        this.render();
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

    public render() {
        getTasks().then((taskList) => {
            this.bindEdit(taskList);
            this.bindRemove();
            this.bindCheckbox(taskList);
        });
    }
}

export default List;