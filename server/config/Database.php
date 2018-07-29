<?php
    class Database {
        private $host = 'localhost';
        private $dbName = 'todolist';
        private $username = 'root';
        private $password = '8kxCgJLT';
        private $conn;

        public function connect() {
            $this->conn = null;

            try {
                $this->conn = new PDO('mysql:host=' . $this->host . 
                                        ';dbname=' . $this->dbName,
                                        $this->username,
                                        $this->password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            } catch (PDOException $err) {
                echo 'Connection Error: ' . $err->getMessage();
            }

            return $this->conn;
        }
    }