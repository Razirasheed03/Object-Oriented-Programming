abstract class Animal {
  abstract MakeSound(): void;
}

class Dog extends Animal {
  MakeSound(): void {
    console.log("bow bow");
  }
}
class Cat extends Animal {
  MakeSound(): void {
    console.log("mew mew");
  }
}

function MakeAnimalSound(s: Animal) {
  s.MakeSound();
}

const dog = new Dog();
const cat = new Cat();

MakeAnimalSound(dog);
MakeAnimalSound(cat);
