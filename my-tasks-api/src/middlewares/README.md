# Pasta **``middlewares``**
+ Pasta destinada às **funções** que serão executadas ***antes* das ações dos `controllers`**.
  - Por exemplo, validações de conteúdo (textos, números, etc.).
+ Os **``middlewares``** são **funções** que possuem **acesso** ao ***objeto de solicitação*** (***```request```***), ao ***objeto de resposta*** (***```response```***) e à ***próxima função middleware*** no ciclo de solicitação/resposta da aplicação.
+ Os  **``middlewares``** podem executar as seguintes funções:
  1. **Executar qualquer código**;
  2. **Fazer alterações nos objetos de solicitação e resposta**;
  3. **Encerrar o ciclo de solicitação/resposta**;
  4. **Chamar a próxima função middleware na pilha**.
+ Se a **função middleware atual *NÃO* terminar o ciclo de solicitação/resposta**, ela deve chamar ***```next()```***, para passar o controle para a próxima função middleware.
  - Caso contrário, a solicitação ficará **pendente**.