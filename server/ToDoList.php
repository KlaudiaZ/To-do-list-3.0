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

        public function addTask() {
            $sql = 'INSERT INTO todolist(title, details, priority) VALUES (:title, :details, :priority)';
            $stmt = $this->conn->prepare($sql);

            $this->title = htmlspecialchars(strip_tags($this->title));
            $this->details = htmlspecialchars(strip_tags($this->details));
            $this->priority = htmlspecialchars(strip_tags($this->priority));

            $stmt->bindParam(':title', $this->title);
            $stmt->bindParam(':details', $this->details);
            $stmt->bindParam(':priority', $this->priority);

            if($stmt->execute()) {
                return true;
            }

            printf("Error: %s.\n", $stmt->error);
            return false;
        }
    }