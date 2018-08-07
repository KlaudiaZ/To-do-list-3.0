const server = "http://localhost:3000/FRONT_END/To-do-list-3.0/server/api/";

export default {
    url: {
        getList: server + "getList.php",
        addTask: server + "addTask.php",
        updateTask: server + "updateTask.php",
        deleteTask: server + "deleteTask.php"
    },
    priority: {
        1: "",
        2: "table-success",
        3: "table-info",
        4: "table-warning",
        5: "table-danger"
    }
};
