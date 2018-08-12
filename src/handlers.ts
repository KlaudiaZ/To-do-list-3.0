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
                location = location;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
