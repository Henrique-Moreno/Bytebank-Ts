# Requisitos do projeto

* Cada transação realizada no sistema deve possuir SOMENTE as seguintes informações:
  1) Data da Transação (Date)
  2) Tipo de Transação (Depósito, Transferência, Pagamento de Boleto)
  3) Valor da Transação (valor maior que zero)

* Sempre que a transação for do tipo DEPÓSITO, o valor da transação deve ser adicionado ao saldo da conta.
* Sempre que a transação for do tipo TRANSFERÊNCIA ou PAGAMENTO DE BOLETO, o valor da transação deve ser subtraído do saldo da conta.
* O saldo deve sempre ser atualizado na tela da aplicação a cada transação realizada.

* As informações da conta devem ficar num módulo específico "Conta"
- Saldo 
- Data
- Registro de Transações realizada
- Historico de Transações

* Os componentes
- Nova transação: deve apenas coletar as informações fo form da interface e repassar os dados para o módulo Conta
- Saldo: deve exibir as informaçãoes de data de acesso e do saldo para o usuário na interface acessando esses dados atravé do modulo