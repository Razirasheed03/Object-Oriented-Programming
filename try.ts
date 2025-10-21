class Animals2 {
  MakeSound2(): void {
    console.log("some general sounds");
  }
}
class Cats2 extends Animals2 {
  MakeSound2(): void {
    console.log("mew mew");
  }
}

const animals2: Animals2 = new Cats2();
animals2.MakeSound2();
