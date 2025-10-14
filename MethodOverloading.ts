//Method overloading means defining multiple methods with the same name but different parameters (number or type) in the same class.
//It helps perform similar tasks with different inputs.

class calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}
const calc = new calculator();

console.log(calc.add(2, 2));
console.log(calc.add("hello", "world"));
