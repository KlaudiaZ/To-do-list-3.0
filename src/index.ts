import Task from './task';
import List from './list';

let list = new List;

export const init = () => {
    console.log('Initializing...')
    list.getTasksFromServer();
}