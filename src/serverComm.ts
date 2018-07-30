import axios from 'axios';
import config from './config';
import { renderList } from './list';

export const getListFromServer = () => {
    axios.get(config.url.getList)
        .then((result) => {
            renderList(result.data);
        })
        .catch((error) => {
            alert(error);
        });
}

export const sendTaskToServer = (task) => {
    axios.post(config.url.addTask, JSON.stringify({
        title: task.title,
        details: task.details,
        priority: task.priority
    }))
        .then(() => {

        })
        .catch((error) => {
            alert(error);
        });
}