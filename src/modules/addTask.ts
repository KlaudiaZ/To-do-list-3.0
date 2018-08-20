import List from '../List';
import utils from '../utils/utils';

export const addTask = () => {
    console.log('adding...');
    const task = utils.getInputValues();
    List.addTask(task)
        .then((response) => {
            console.log(response);
            utils.renderAndBindTaskList();
        })
        .catch((err) => {
            console.log(err);
        });
}