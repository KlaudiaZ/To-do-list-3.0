import Server from '../Server';
import List from '../List';

export const addTask = (task: object) => {
    const list = new List;

    console.log('adding...');


    Server.addTask(task)
        .then((response) => {
            console.log(response);
            list.render();
        })
        .catch((err) => {
            console.log(err);
        });
}