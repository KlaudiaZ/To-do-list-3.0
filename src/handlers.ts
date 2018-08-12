import { renderAndBindTaskList } from './utils/utils';
import List from './list';


const handle = {
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
    },

    markTaskAsDone: async function (id: number, tasks: any) {
        const task = tasks.find((task: any) => {
            return task.id === id;
        });
        task.isDone = "1";
        await List.updateTask(task)
            .then((response) => {
                console.log(response);
                renderAndBindTaskList();
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

export default handle;