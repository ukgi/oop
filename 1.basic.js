class Money {
  #amount;
  #currency;

  constructor(amount, currency) {
    this.#validateAmount(amount);
    this.#validateCurrency(currency);
    this.#amount = amount;
    this.#currency = currency;
  }

  getAmount() {
    return this.#amount;
  }

  add(other) {
    if (other instanceof Money) {
      const added = this.#amount + other.getAmount();

      return new Money(added, this.#currency);
    }

    throw new Error('금액만 더해주십시오.');
  }

  #validateAmount(amount) {
    if (amount < 0) {
      throw new Error('금액은 0 이상의 값을 지정해주세요.');
    }
  }

  #validateCurrency(currency) {
    if (currency === null) {
      throw new Error('통화 단위를 올바르게 지정해주세요.');
    }
  }
}

const money1 = new Money(500, 'korea');
const money2 = new Money(1000, 'korea');

const addedMoney = money1.add(money2);
console.log(addedMoney.getAmount());
