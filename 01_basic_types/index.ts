
// Basic Types
const bool: boolean = true;
const num: number = 10;
const str: string = "Hello";
//
// Array
const arr: boolean[] = [true, false, false];
//
// Tuples
const tuple: [number, string] = [num, str];
//
// Enum
enum Flavor {
  BBQ,
  SOUR_CREAM_ONION,
  CHEDDAR_BACON
}
let chips: Flavor = Flavor.CHEDDAR_BACON;
//
// Any (can be any type; essentially disable ts)
let anything: any = { a: 1, b: [2, "hi", false, {}] };
//
// Void (returns nothing)
function main(): void { }
//
// Type assertion
const someVar: any = "This is string";
let length: number = (<string>someVar).length;
length = (someVar as string).length;

