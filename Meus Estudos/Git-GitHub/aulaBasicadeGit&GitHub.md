##### AULA PARA INICIANTES EM GIT & GITHUB #######################


*** Aula 1 - Controle de Versão ***

  O que é controle de versão ? -> R:(é o sistema com a finalidade de gerenciar diferentes versões de um documento.)

{
    *** SISTEMA [GIT] PARA CONTROLE DE VERSÃO...**
    A FORMA QUE O [GIT] FAZ O ( **Checkins over time** = [Check-ins ao longo do tempo] ) e diferente dos outros métodos conhecidos para controle de versão, por exemplo....
    utilizando outros sistemas com  [SVN], [Bazaar] ect...
    ELES CRIA UMA COPIA DA VERSÃO CASO EXISTAUMA ALTERAÇÃO
    EXEMPLO.[
        (**Versão 1**) | (**Versão 2**) | (**Versão 3**) | (**Versão 4**) | (**Versão 5**)
        **
        [##Arquivo-A##]---> [##A1]---------------------------> [##A2]
        **
        [##Arquivo-B##]--------------------------------------> [##A1]------>   [##A2] 
        **
        [##Arquivo-C##]---> [##A1]----------> [##A2]----------------------->   [##A3]
        **
        {
            NO EXEMPLO A CIMA O [SVN OU BAZAAR] VAI VERIFICAR CADA ARQUIVO NA VERSÃO 1, SE OUVER ALGUMA ALTERAÇÃO
            ELES CRIAM OUTRO ARQUIVO MAS ONDE NÃO EXEITE ELES NÃO CRIAM
        }
    ]
    ***
    NO CASO DO [GIT] ELE NÃO VERIFICA AS DIFERENSAS DOS AS QUIVOS, SÃO TIRADAS **FOTOS**(***SNAPSHOTS*** -> INSTANTÂNEOS) DOS ESTADOS.
    EXEMPLO.[
        (**Versão 1**) | (**Versão 2**) | (**Versão 3**) | (**Versão 4**) | (**Versão 5**)
        **
        [##Arquivo-A##]     [##A1]         {**Snap A1**}       [##A2]        {**Snap A2**}
        **
        [##Arquivo-B##]     {**Snap B**}   {**Snap B**}        [##B1]           [##B2]
        **
        [##Arquivo-C##]     [##C1]          [##C2]           {**Snap C2**}      [##C3]
        **
    ]
    
    @@@ 2 IMPORTANTES COISAS NO CONTROLE DE VERSÕES @@@
    
    1º => ELE É RESPONSAVEL POR VERSIONAR OS ARQUIVOS DO SEU PROJETO, COM ISSO VC NÃO PRECISA FAZER MANUALMENTE.
    2º => OUTROS SISTEMA TRABALHA COM DIFERENÇA DO ARQUIVOS O GIT TRABALHA COM ESTADOS DOS ARQUIVOS
}


### O QUE É GITHUB ? -> R:(é um serviço webe compartilhado para projetos que utilizam o [GIT] para versionamento.) OBS:. [GIT] NÃO É O MESMO QUE O GITHUB

#### ESTALANDO O GIT NA MAQUINA WINDOWS ###########

 -> SITE PARA DOWNLOAD OD GIT (***https://git-scm.com/downloads***).

 ### CONFIGURAÇÃO INICIAL DO GIT ###

    PARA CONFIGURAR O GIT EXISTE 3 FORMAS...
    1º - GIT CONFIG DE TODO O SISTEMA
    2º - GIT CONFIG DO USUARIO
    3º - GIT CONFIG DO PROJETO ESPECIFICO
***CONFIGURANDO O USUARIO***
 [nome de usuario - [git config --global user.name "nome do usuario"]
 e-mail - [git config --global user.email "e-mail do usuario"]
 editor principal do git - [git config --global core.editor  "comando do editor de sua escolha"] se não definir por padrão ele ira usa o vin mesmo.

    *para ver os valore que vc configurou no seu git como nome do usuario, email, editor etc... basta usar esses comandos
    (git config user.name)   para nome do usuario
    (git config user.emal)   para o e-mail do usuario
    (git config core.editor) para o editor escolhido
    se quiser ver tudo de uma só vez basta digitar (git config --list)
]

**INICIALIZANDO UM REPOSITÓRIO**
    {
        CRIANDO UMA PASTA PARA PROJETO -> [###mkdir "***NOME DA PASTA***]
        ENTRANDO NA PASTA CRIADA ***cd nome da pasta***/
        inicializar um diretorio => git init
        voltar uma pasta anterior cd ..
    }


*** Aula 2 - Usando o Editor do Terminal ***
[]
    SE UTILIZARMOS O COMANDO [vi ***nome do arquivo*** (caso não exista será criado)]. o terminal entrará no arquivo especifico. 
    para poder editar o arquivo utilizamos o comando [ i = **INSERT**], e o arquivo entrará em modo de edição.
    após escrever tudo o que eu quero eu clico na tela [**Esc] para sair do modo edição. apertando o [:] iniciarei um comando [w] escrever e salvar [q] para sair sair e apertar em [ENTER] para termina a edição.


