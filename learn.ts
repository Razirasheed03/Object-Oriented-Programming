//This code defines an interface AirPlane that requires a fly() method and a speed property.
//The class Planes implements it by defining fly() and assigning speed, then an object calls fly() to print “flying”.


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
