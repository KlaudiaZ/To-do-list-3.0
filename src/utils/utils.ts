import { getTasks } from '../modules/getTasks';
import bind from '../binds';

class Utils {
    private title = (<HTMLInputElement>document.getElementById('title'));
    private details = (<HTMLInputElement>document.getElementById('details'));
    private priority = (<HTMLInputElement>document.getElementById('priority'));
    private btn = (<HTMLInputElement>document.getElementById('submit'));

    renderAndBindTaskList() {
        getTasks().then((taskList) => {
            bind.editTaskButton(taskList);
            bind.removeTaskButton();
            bind.checkbox(taskList);
        });
    }

    getInputValues() {
        const title = this.title.value;
        const details = this.details.value;
        const priority = this.priority.value;
        const id = this.btn.getAttribute('data-id');
        return { title, details, priority, isDone: 0, id }
    }

    setInputValues(task: any) {
        this.title.value = task.title;
        this.details.value = task.details;
        this.priority.value = task.priority;
        this.btn.setAttribute('data-id', task.id);
        this.btn.innerHTML = "Update";
    }

    clearForm: () => {

    }
}

export default Utils;