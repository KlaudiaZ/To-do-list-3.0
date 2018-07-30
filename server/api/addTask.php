<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Headers: Authorization');
    header('Access-Control-Allow-Headers: X-Requested-Width');

        include_once '../config/Database.php';
        include_once '../ToDoList.php';

        $database = new Database();
        $db = $database->connect();

        $stmt = new ToDoList($db);
        $data = json_decode(file_get_contents("php://input"));

        $stmt->title = $data['title'];
        $stmt->details = $data['details'];
        $stmt->priority = $data['priority'];

        if ($stmt->addTask()) {
            $msg = array('message' => 'Task Added');
            echo json_encode($msg);
        } else {
            $msg = array('message' => 'Task Not Added');
            echo json_encode($msg);
        }