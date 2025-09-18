interface AirPlane {
  fly(): void;
  speed: number;
}

class Planes implements AirPlane {
  fly(): void {
    console.log("flyiing");
  }
  speed = 300;
}
const planes = new Planes();
planes.fly();
