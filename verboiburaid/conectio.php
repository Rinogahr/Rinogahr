<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $dbname = "churchsystem";
    $port = 3306;

    try {
        //conexão com a porta
       $conn = new PDO("mysql:host=$host;port=$port;dbname=" . $dbname, $user, $pass);
        //conexão sem a porta
       //$conn = new PDO("mysql:host=$host;dbname=" . $dbname, $user, $pass);
        //echo "Banco de dados conectado com saucesso";
    } catch (PDOException $err) {
       // echo "Erro a se conectar com banco de dados" . $err ->getMessage();
    }
?>