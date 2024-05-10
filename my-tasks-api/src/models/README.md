# Pasta **``Models``**
+ Pasta destinada por **lidar a com a _lógica de dados_** do software.
+ Models são responsáveis por **interagir com o _banco de dados_**.
    - Possuem **funções** para ***buscar***, ***inserir***, ***atualizar*** e ***excluir registros no banco de dados***. Cada Model representa uma tabela (ou coleção, no caso de bancos de dados NoSQL) no banco de dados.
+ Os Models são essenciais para **abstrair a lógica de acesso aos dados**, permitindo que **mudar o banco de dados** ou **a forma como interage com ele**, **_sem_ afetar o restante do código da aplicação**.
    - Além disso, eles ajudam a **garantir que a lógica de negócios** (nos **``Controllers``**) **esteja separada da lógica de acesso aos dados**, facilitando a _manutenção_ e o _teste do código_.

# Orientações
+ <span style="color: red; font-weight: bold;">Renome o arquivo <span>`ConnectionExample.ts` para `Connection.ts`.</span>

# Orientações para executar o arquivo **``Connection.ts``**
+ Via **terminal**:
  1. Executar o comando:
      > **``tsc .\src\models\Connection.ts``**
  2. Após gerado o arquivo **``Connction.js``**, executar o comando:
      > **``node .\src\models\Connection.js``**