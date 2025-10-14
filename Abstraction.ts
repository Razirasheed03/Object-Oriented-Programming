//The Flyable interface defines a contract that any class implementing it must have fly(), speed, and height.
interface Flyable {
  fly(): void;
  speed: number;
  height: number;
}
class Plane implements Flyable {
  speed = 30;
  height = 30;
  fly(): void {
    console.log("plane flying");
  }
}
const airPlane = new Plane();
airPlane.fly();
console.log(airPlane.speed);
