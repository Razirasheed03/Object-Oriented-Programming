// class Bird {
//   fly() {
//     console.log("Flying...");
//   }
// }

// class Penguin extends Bird {
//   fly() {
//     // Penguins can't fly ❌
//     throw new Error("Penguins can't fly!");
//   }
// }

// function makeBirdFly(bird: Bird) {
//   bird.fly(); // expects all birds to fly
// }

// const penguin = new Penguin();
// makeBirdFly(penguin); // 💥 Error — violates LSP


class Bird {
  eat() {
    console.log("Eating...");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("Flying...");
  }
}

class Penguin extends Bird {
  swim() {
    console.log("Swimming...");
  }
}

function makeFlyingBirdFly(bird: FlyingBird) {
  bird.fly();
}

const sparrow = new FlyingBird();
makeFlyingBirdFly(sparrow); // ✅ Works fine

const penguin = new Penguin();
// makeFlyingBirdFly(penguin); ❌ won't compile — correct behavior
