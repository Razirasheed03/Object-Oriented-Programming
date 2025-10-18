// Inheritance allows a class to use properties and methods of another class, promoting code reuse and hierarchy.
// Here, Animall inherits breath() from LivingBeing, so it can call that method directly.

class LivingBeing {
  breath(): void {
    console.log("breath");
  }
}
class Animall extends LivingBeing {
  eat(): void {
    console.log("eating");
  }
}
const animal = new Animall();
animal.breath();
