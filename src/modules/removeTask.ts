import Server from '../Server';
import List from '../List';

export const removeTask = function (id: number) {
    const list = new List;

    Server.removeTaskFromServer(id)
        .then((response) => {
            console.log(response);
            list.render();
        })
        .catch((err) => {
            console.log(err);
        });
}