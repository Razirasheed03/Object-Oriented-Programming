class Bank {
  private balance: number;

  constructor(Initialbalance: number) {
    this.balance = Initialbalance;
  }
  deposit(value: number) {
    if (value > 0) {
      this.balance += value;
    } else {
      console.log("invalid");
    }
  }
  getBalance() {
    console.log(this.balance);
  }
}
const bank = new Bank(100);
// bank.balance()
bank.deposit(100);
bank.getBalance();
