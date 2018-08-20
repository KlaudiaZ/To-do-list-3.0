import List from '../List';
import utils from '../utils/utils';

export const removeTask = function (id: number) {
    List.removeTaskFromServer(id)
        .then((response) => {
            console.log(response);
            utils.renderAndBindTaskList();
        })
        .catch((err) => {
            console.log(err);
        });
}