class Bird {
  fly() {
    console.log("Flying...");
  }
}

class Penguin extends Bird {
  fly() {
    // Penguins can't fly ❌
    throw new Error("Penguins can't fly!");
  }
}

function makeBirdFly(bird: Bird) {
  bird.fly(); // expects all birds to fly
}

const penguin = new Penguin();
makeBirdFly(penguin); // 💥 Error — violates LSP
