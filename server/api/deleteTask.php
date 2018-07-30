<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Headers: Authorization');
    header('Access-Control-Allow-Headers: X-Requested-Width');

        include_once '../config/Database.php';
        include_once '../ToDoList.php';

        $database = new Database();
        $db = $database->connect();

        $stmt = new ToDoList($db);
        $data = json_decode(file_get_contents("php://input"));

        $stmt->id = $data->id;

        if ($stmt->deleteTask()) {
            $msg = array('message' => 'Task Deleted');
            echo json_encode($msg);
        } else {
            $msg = array('message' => 'Task Not Deleted');
            echo json_encode($msg);
        }