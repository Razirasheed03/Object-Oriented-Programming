abstract class Animals {
  abstract MakeSounds(): void;
}

class Dogs extends Animal {
  MakeSound(): void {
    console.log("bow bow");
  }
}
class Cat extends Animal {
  MakeSounds(): void {
    console.log("mew mew");
  }
}

// function MakeAnimalSound(s: Animal) {
//   s.MakeSou();
// }

const dog = new Dogs();
const cat = new Cats();

MakeAnimalSound(dog);
MakeAnimalSound(cat);
