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

