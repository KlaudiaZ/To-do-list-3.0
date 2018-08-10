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

    render(index: number) {
        const task = document.createElement('tr');
        task.setAttribute('class', `${config.priority[this.priority]}`);
        task.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td>${this.title}</td>
            <td>${this.details}</td>
            <td>${this.priority}</td>
            <td><input class="form-check-input" type="checkbox"></td>
            <td>(edit icon)</td>
            <td>(remove icon)</td>
        `;
        document.getElementById('tasks').appendChild(task);
    }
}

export default Task;