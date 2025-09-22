interface AirPlane {
  fly(): void;
  speed: number;
}

class Planes implements AirPlane {
  fly(): void {
    console.log("flying");
  }
  speed = 300;
}
const planes = new Planes();
planes.fly();
