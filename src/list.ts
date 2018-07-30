import * as $ from 'jquery';
import config from './config';
import { sendTaskToServer } from './serverComm';

export const renderList = (tasks) => {
    console.log(tasks);
    tasks.forEach((task, index) => {
        if (task.is_done != 1) {
            $('#tasks').append(`
                <tr class=${config.priority[task.priority]}>
                    <th scope="row">${index + 1}</th>
                    <td>${task.title}</td>
                    <td>${task.details}</td>
                    <td>${task.priority}</td>
                    <td><input class="form-check-input" type="checkbox"></td>
                    <td>(edit icon)</td>
                    <td>(remove icon)</td>
                </tr>
        `);
        } else {
            $('#completed').append(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                ${task.title}
                </li>
            `);
        }
    });
}

export const bindAddButton = () => {
    $('#submit').click((e) => {
        addNewTask();
    });
}

const addNewTask = () => {
    const task = {
        title: $('#title').val(),
        details: $('#details').val(),
        priority: $('#priority').val()
    }
    sendTaskToServer(task);
}