import { renderAndBindTaskList } from './utils/utils';
import List from './list';


export default {
    editTask: (id: number, tasks: any) => {

        const task = tasks.find((task: any) => {
            return task.id === id;
        });
        console.log(task)
    },

    addTask: () => {
        console.log('adding...')
    },

    removeTask: async function (id: number) {
        await List.removeTaskFromServer(id)
            .then((response) => {
                console.log(response);
                renderAndBindTaskList();
            })
            .catch((err) => {
                console.log(err);
            });
    }
}