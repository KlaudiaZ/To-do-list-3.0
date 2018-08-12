import config from './utils/config';

class Task {
    constructor(
        private id: number,
        private title: string,
        private details: string,
        private priority: number,
        private isDone: boolean) {
        this.id = id;
        this.title = title;
        this.details = details;
        this.priority = priority;
        this.isDone = isDone;
    }

    render(index: number, incomplete: any, complete: any) {
        const task = document.createElement('tr');
        if (this.isDone == false) {
            task.setAttribute('class', `${config.priority[this.priority]}`);
            task.setAttribute('data-id', `${this.id}`);
            task.innerHTML = `
                <th scope="row">${index}</th>
                <td>${this.title}</td>
                <td>${this.details}</td>
                <td>${this.priority}</td>
                <td><input class="form-check-input" type="checkbox"></td>
                <td class="edit">(edit icon)</td>
                <td class="remove">(remove icon)</td>
            `;
            incomplete.appendChild(task);
            return false;
        } else {
            task.innerHTML = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${this.title}
                </li>
            `;
            complete.appendChild(task);
            return true;
        }
    }
}

export default Task;