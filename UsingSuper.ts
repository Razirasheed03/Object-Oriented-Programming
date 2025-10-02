////// example for using super keyword : super keyword is used for accessing method from the parent class in child class
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
}

const d = new Dog("Bruno", "Labrador");
console.log(d.name); // Bruno
console.log(d.breed); // Labrador
