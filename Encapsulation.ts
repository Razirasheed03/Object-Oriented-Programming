// Encapsulation means keeping data private inside a class and allowing access only through specific methods.

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
// bank.balance() not work because balance is private
bank.deposit(100);
bank.getBalance();
