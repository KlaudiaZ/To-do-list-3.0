<?php
    class ToDoList {
        private $conn;

        public $id;
        public $title;
        public $details;
        public $priority;
        public $is_done;

        public function __construct($db) {
            $this->conn = $db;
        }

        public function getList() {
            $sql = 'SELECT * FROM todolist';
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();

            return $stmt;
        }
    }