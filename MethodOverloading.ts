class calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}
const calc = new calculator();

console.log(calc.add(2, 2));
console.log(calc.add("review", "pass"));
