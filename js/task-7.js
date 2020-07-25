'use strict'

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 1000,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const objectOfTransaction = {
      id: this.transactions.length + 1,
      type,
      amount,
    }
    return objectOfTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(
        this.createTransaction(amount,Transaction.DEPOSIT)
    );
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {

    if(this.balance < amount) {
      alert('Снятие такой суммы невозможно, недостаточно средств');
    }

    this.balance -= amount;
    this.transactions.push(
      this.createTransaction(amount,Transaction.WITHDRAW)
    );

  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {

    for(const obj of this.transactions) {

      if(obj['id'] === id) {
        console.log(obj);
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let quantityTransaction = 0;

    for(const transaction of this.transactions) {

      if (transaction['type'] === type) {
        quantityTransaction += transaction.amount;
      }
    }
      return quantityTransaction;
  },
};

account.deposit(500);
account.deposit(250);
account.withdraw(500);
account.withdraw(500);


console.log(account.transactions);

console.log(account.getBalance());
account.getTransactionDetails(3);

console.log(account.getTransactionTotal('deposit'));
