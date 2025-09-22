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
