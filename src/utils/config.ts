const server = "https://todoapihost.000webhostapp.com/api/";

const config: any = {
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

export default config;