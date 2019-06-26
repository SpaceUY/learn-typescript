"use strict";
// Basic Types
const bool = true;
const num = 10;
const str = "Hello";
//
// Array
const arr = [true, false, false];
//
// Tuples
const tuple = [num, str];
//
// Enum
var Flavor;
(function (Flavor) {
    Flavor[Flavor["BBQ"] = 0] = "BBQ";
    Flavor[Flavor["SOUR_CREAM_ONION"] = 1] = "SOUR_CREAM_ONION";
    Flavor[Flavor["CHEDDAR_BACON"] = 2] = "CHEDDAR_BACON";
})(Flavor || (Flavor = {}));
let chips = Flavor.CHEDDAR_BACON;
//
// Any (can be any type; essentially disable ts)
let anything = { a: 1, b: [2, "hi", false, {}] };
//
// Void (returns nothing)
function main() { }
//
// Type assertion
const someVar = "This is string";
let length = someVar.length;
length = someVar.length;
