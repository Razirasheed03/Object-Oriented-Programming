// Polymorphism allows the same method to behave differently and has two types: compile-time (method overloading) and runtime (method overriding).

abstract class Animal1 {
  abstract MakeSound1(): void;
}

class Dog1 extends Animal1 {
  MakeSound1(): void {
    console.log("bow bow");
  }
}
class Cat1 extends Animal1 {
  MakeSound1(): void {
    console.log("mew mew");
  }
}

function MakeAnimalSound(s: Animal1) {
  s.MakeSound1();
}

const dog = new Dog1();
const cat = new Cat1();

MakeAnimalSound(dog);
MakeAnimalSound(cat);
