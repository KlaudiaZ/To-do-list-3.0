import { getTasks } from '../modules/getTasks';
import bind from '../binds';



export default {
    findFormElements: function () {
        return {
            title: (<HTMLInputElement>document.getElementById('title')),
            details: (<HTMLInputElement>document.getElementById('details')),
            priority: (<HTMLInputElement>document.getElementById('priority')),
            btn: (<HTMLInputElement>document.getElementById('submit'))
        }
    },

    renderAndBindTaskList: () => {
        getTasks().then((taskList) => {
            bind.editTaskButton(taskList);
            bind.removeTaskButton();
            bind.checkbox(taskList);
        });
    },

    getInputValues: function () {
        const title = this.findFormElements().title.value;
        const details = this.findFormElements().details.value;
        const priority = this.findFormElements().priority.value;
        const id = this.findFormElements().btn.getAttribute('data-id');
        return { title, details, priority, isDone: 0, id }
    },

    setInputValues: function (task: any) {
        this.findFormElements().title.value = task.title;
        this.findFormElements().details.value = task.details;
        this.findFormElements().priority.value = task.priority;
        this.findFormElements().btn.setAttribute('data-id', task.id);
        this.findFormElements().btn.innerHTML = "Update";
    },

    clearForm: function () {
        this.findFormElements().title.value = "";
        this.findFormElements().details.value = "";
        this.findFormElements().priority.value = 1;
    }
}