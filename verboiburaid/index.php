<?php
    session_start();
    include_once 'conectio.php';
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/index.css">
    <title>D.I Verbo da Vida Ibura</title>
</head>
<body>
    <?php
    //exemplo de criptografia de senha com php
      //echo  password_hash('maciel@14', PASSWORD_DEFAULT);
    ?>
        <div id="screeshotPC"> <h1>Site disponivel apenas para Mobile</h1> </div>

         <?php 
            $dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);
            if(!empty($dados['loginesenha'])){
                var_dump($dados);

               $queryUsuario = "SELECT  usu_Id, usu_Login, usu_Senha,
                        d.dp_Id, d.dp_Funcao, d.dp_Sala, d.dp_Nome
                        FROM usuario, departamento as d
                        WHERE usu_Login =:user
                        LIMIT 1";
                        
                $resultUsuario = $conn->prepare($queryUsuario);
                $resultUsuario->bindParam(':user',$dados['usuario'], PDO::PARAM_STR);
                $resultUsuario->execute();

                if( ($resultUsuario) AND ($resultUsuario->rowCount()) != 0 ){
                    $row_usuario = $resultUsuario->fetch(PDO::FETCH_ASSOC);
                    var_dump($row_usuario);

                    $hash = password_hash($row_usuario['usu_Senha'], PASSWORD_DEFAULT); //variavel que criptografa a senha do usuario
                    
                    if( password_verify( $dados['senha'], $hash ) ){ //utilizando o password_verify para ver se a senha digitada e igual a senha na BD
                        echo "Usuário Logado";
                    }else{
                        $_SESSION['msg'] = "<p style='color: #ff0000'>Erro: Usúario ou Senha inválida rtdrtdrtd !</p>";
                    }

                }else{
                    $_SESSION['msg'] = "<p style='color: #ff0000'>Erro: Usúario ou Senha inválida !</p>";
                }

                
            }

            if(isset($_SESSION['msg'])){
                echo $_SESSION['msg'];
                unset($_SESSION['msg']);
            }
        ?>


            <div id="paiDivLogin">
                <form action="" method="POST">
                    <div id="filhoDivLogin">
                        <div class="imgLogo">
                            <img src="img/logoverbinhoibura.svg" alt="" sizes="" srcset="">
                        </div>

                        <div class="tituloHome">
                            <h1>Bem vindo ao app do Verbinho &#128512;</h1>
                        </div>

                        <div id="loginCampo" class="standardStyle">
                            <input type="text" name="usuario" id="usuario" placeholder="Nome de Úsuario ou E-mail">
                        </div>
                        <div id="senhaCampo" class="standardStyle">
                            <input type="password" name="senha" id="senha" placeholder="Senha">
                        </div>
                        <div id="departamentoCampo" class="standardStyle">
                            <select name="dP">
                                <option value="0">Qual o Seu departamento ?</option>
                                <option value="3a4">Salinha 3 a 4 Ano</option>
                                <option value="5a7">Salinha 5 a 7 Ano</option>
                                <option value="8a11">Salinha 8 a 11 Ano</option>
                            </select>
                        </div>
                        <div id="botaoCampo">
                             <input type="submit" value="ENTRAR" name="loginesenha" design-bt="1"> 
                        </div>
                        <div id="cadastreseCampo">
                            <a href=""  >Inscrevar-se</a>
                        </div>
                    </div>
                </form>
            </div>
</body>
</html>