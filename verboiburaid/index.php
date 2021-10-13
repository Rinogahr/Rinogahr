<?php
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
      echo  password_hash('maciel0811', PASSWORD_DEFAULT);
    ?>
        <div id="screeshotPC"> <h1>Site disponivel apenas para Mobile</h1> </div>

        <?php 
            $dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);
            var_dump($dados);
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