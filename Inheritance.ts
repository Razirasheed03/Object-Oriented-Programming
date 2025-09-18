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
const an = new Animall();
an.breath();
