import List from './list';
import utils from './utils/utils';

const handle = {
    editTaskMode: (id: number, tasks: any) => {
        const task = tasks.find((task: any) => {
            return task.id === id;
        });
        utils.setInputValues(task);
    },

    updateTask: () => {
        const task = utils.getInputValues();
        List.updateTask(task)
            .then((response) => {
                console.log(response);
                utils.renderAndBindTaskList();
                utils.clearForm();
            })
            .catch((err) => {
                console.log(err);
            });
    },

    addTask: () => {
        console.log('adding...')
    },

    removeTask: async function (id: number) {
        await List.removeTaskFromServer(id)
            .then((response) => {
                console.log(response);
                utils.renderAndBindTaskList();
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
                utils.renderAndBindTaskList();
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

export default handle;