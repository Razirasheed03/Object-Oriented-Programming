//Method overriding is when a subclass provides its own version of a method already defined in its parent class.
// It allows the subclass to change or extend the parent’s behavior.
class Animal2 {
  MakeSound2(): void {
    console.log("some general sounds");
  }
}
class Cat2 extends Animal2 {
  MakeSound2(): void {
    console.log("mew mew");
  }
}

const animal2: Animal2 = new Cat2();
animal2.MakeSound2();
