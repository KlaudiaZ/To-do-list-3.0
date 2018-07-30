import * as $ from 'jquery';
import config from './config';

export const renderList = (tasks) => {
    console.log(tasks);
    tasks.forEach((task, index) => {
        if (task.is_done != 1) {
            $('#table').append(`
                <tr class=${config.priority[task.priority]}>
                    <th scope="row">${index + 1}</th>
                    <td>${task.title}</td>
                    <td>${task.details}</td>
                    <td>${task.priority}</td>
                    <td><input class="form-check-input" type="checkbox"></td>
                    <td>(icon)</td>
                </tr>
        `);
        }
    })
}