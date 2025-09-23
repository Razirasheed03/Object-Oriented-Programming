class Animals {
  MakeSound(): void {
    console.log("some general sounds");
  }
}
class Cats extends Animals {
  MakeSound(): void {
    console.log("mew mew");
  }
}

const animals: Animals = new Cats();
animals.MakeSound();
