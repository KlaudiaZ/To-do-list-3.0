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

export const removeCompleted = async function (tasks: number[]) {
    const list = new List;

    tasks.forEach((task, index) => {
        Server.removeTaskFromServer(task)
            .then((response) => {
                console.log(response);
                if (index + 1 === tasks.length) list.render();
            })
            .catch((err) => {
                console.log(err);
            })
    })

}