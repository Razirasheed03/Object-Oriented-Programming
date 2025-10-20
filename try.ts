
class Animals2 {
  MakeSound2(): void {
    console.log("some general sounds");
  }
}
class Cats2 extends Animal2 {
  MakeSound2(): void {
    console.log("mew mew");
  }
}

const animals2: Animal2 = new Cat2();
animal2.MakeSound2();
