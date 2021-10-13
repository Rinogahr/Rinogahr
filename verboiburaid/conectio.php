<?php
    $host = "localhost";
    $user = "root";
    $pass = "rpm0811";
    $dbname = "systemchurch";
    $port = 3306;

    try {
       $conn = new PDO("mysql:host=$host;port=$port;dbname=" . $dbname, $user, $pass);
        echo "Banco de dados conectado com saucesso";
    } catch (PDOException $err) {
        echo "Erro a se conectar com banco de dados" . $err ->getMessage();
    }
?>