# Pasta *`controllers`*
+ Pasta destinada à **lógica interna da aplicação**.
  - É onde executamos os **métodos** - e suas respectivas **lógicas** - de cada entidade do sistema.
    * Esta lógica é uma **ação** a ser realizada durante o ciclo de vida do software: esta ação pode ser uma *criação*, *leitura*, *atualização* ou *exclusão de recursos*.
      + Estas ações são chamadas de ***ações da controller***.
+ Cada ação da controller é responsável por **receber uma _requisição HTTP_**, processar a lógica de negócios necessária (interagindo com a sua respectiva **``Model``**), e, em seguida, enviar uma resposta HTTP.
+ Assim, esta pasta ajuda a garantir que **cada parte do código tenha uma _única responsbilidade_**, de acordo com o **princípio da responsibilidade única** (***Single Responsibility Principle***) 