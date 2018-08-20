import { addTask } from './modules/addTask';
import { editTask } from './modules/editTask';

interface RenderOptions {
    mode: 'Add' | 'Edit';
    task?: {
        title?: string;
        details?: string;
        priority?: number;
        id?: number;
    }
};

class Form {
    private container = document.getElementById('form');
    private title: any;
    private details: any;
    private priority: any;
    private submit: any;
    private defaultTask: object = {
        title: "",
        details: "",
        priority: 1,
        id: ""
    }

    constructor(init?: boolean) {
        if (init) this.render({ mode: 'Add', task: this.defaultTask });
    }

    private setInputs() {
        this.title = <HTMLInputElement>document.getElementById('title');
        this.details = <HTMLInputElement>document.getElementById('details');
        this.priority = <HTMLInputElement>document.getElementById('priority');
        this.submit = <HTMLInputElement>document.getElementById('submit');
    }

    private bindAdd() {
        this.submit.addEventListener('click', ((e: any) => {
            e.preventDefault();
            addTask(this.getInputValues());
            this.render({ mode: 'Add', task: this.defaultTask });
        }));
    }

    private bindEdit() {
        this.submit.addEventListener('click', ((e: any) => {
            e.preventDefault();
            editTask(this.getInputValues());
            this.render({ mode: 'Add', task: this.defaultTask });
        }));
    }

    private getInputValues() {
        const title = this.title.value;
        const details = this.details.value;
        const priority = this.priority.value;
        const id = this.submit.getAttribute('data-id');
        return { title, details, priority, isDone: 0, id }
    }

    public render(prop: RenderOptions) {
        this.container.innerHTML = '';

        const form = document.createElement('fieldset');
        form.innerHTML = `
            <h5>${prop.mode} task:</h5>
                <div class="form-group">
                    <label class="col-form-label" for="title">Title:</label>
                    <input type="text" class="form-control" placeholder="Enter note title" id="title" value="${prop.task.title}">
                </div>
                <div class="form-group">
                    <label for="details">Additional details (optional):</label>
                    <textarea class="form-control" id="details" rows="3">${prop.task.details}</textarea>
                </div>
                <div class="row">
                    <div class="form-group col-3">
                        <select class="form-control" id="priority" value="${prop.task.priority}">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <label for="priority">Priority</label>
                    </div>
                    <div class="col-5"></div>
                    <button type="submit" class="btn btn-primary col-4 h-25" id="submit" data-id="${prop.task.id}">${prop.mode}</button>
                </div>
            `;
        this.container.appendChild(form);

        this.setInputs();
        prop.mode === 'Add' ? this.bindAdd() : this.bindEdit();
    }

    public enableEdit(task: object) {
        this.render({ mode: 'Edit', task: task });
    }
}

export default Form;