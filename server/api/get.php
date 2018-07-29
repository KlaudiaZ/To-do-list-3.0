<?php
    header('Access-Control-ALlow-Origin: *');
    header('Content-Type: application/json');

    include_once '../config/Database.php';
    include_once '../ToDoList.php';

    $database = new Database();
    $db = $database->connect();

    $stmt = new ToDoList($db);
    $result = $stmt->getList();

    $num = $result->rowCount();

    if ($num > 0) {
        $list = $result->fetchAll();
        echo json_encode($list);
    } else {
        $msg = array('message' => 'No items');
        echo json_encode($msg);
    }