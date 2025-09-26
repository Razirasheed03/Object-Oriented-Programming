abstract class Animals {
  abstract MakeSounds(): void;
}

class Dogs extends Animal {
  MakeSound(): void {
    console.log("bow bow");
  }
}
class Cats extends Animal {
  MakeSounds(): void {
    console.log("mew mew");
  }
}

function MakeAnimalSound(s: Animals) {
  s.MakeSounds();
}

const dog = new Dogs("hi");
const cat = new Cats("hi");

// MakeAnimalSound(Dogs);
// MakeAnimalSound(cat);
