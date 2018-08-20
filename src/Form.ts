import { addTask } from './modules/addTask';
import { editTask } from './modules/editTask';

interface RenderOptions {
    mode: 'Add' | 'Edit';
};

class Form {
    private container = document.getElementById('form');

    private bindAdd() {
        const add = document.getElementById('submit');
        add.addEventListener('click', (e) => {
            e.preventDefault();
            addTask();
            this.render({ mode: 'Add' });
        });
    }

    private bindEdit() {
        const update = document.getElementById('submit');
        update.addEventListener('click', (e) => {
            e.preventDefault();
            editTask();
            this.render({ mode: 'Add' });
        });
    }

    render(prop: RenderOptions) {
        this.container.innerHTML = '';

        const form = document.createElement('fieldset');
        form.innerHTML = `
            <h5>${prop.mode} task:</h5>
                <div class="form-group">
                    <label class="col-form-label" for="title">Title:</label>
                    <input type="text" class="form-control" placeholder="Enter note title" id="title">
                </div>
                <div class="form-group">
                    <label for="details">Additional details (optional):</label>
                    <textarea class="form-control" id="details" rows="3"></textarea>
                </div>
                <div class="row">
                    <div class="form-group col-3">
                        <select class="form-control" id="priority">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <label for="priority">Priority</label>
                    </div>
                    <div class="col-5"></div>
                    <button type="submit" class="btn btn-primary col-4 h-25" id="submit">${prop.mode}</button>
                </div>
        `;
        this.container.appendChild(form);

        prop.mode === 'Add' ? this.bindAdd() : this.bindEdit();
    }
}

export default Form;