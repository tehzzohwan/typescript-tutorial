"use strict";
// ----> Explicit - writing out the type:
let firstName = 'Bola';
// ----> Implicit - TypeScript will "guess" the type, based on the assigned value:
let lastName = 'Conner';
// Note: Having TypeScript "guess" the type of a value is called infer.
// ----> Type: any
// any is a type that disables type checking and effectively allows all types to be used.
// Setting any to the special type any disables type checking:
let room = 1;
// ----> Type: unknown
// unknown is a similar, but safer alternative to any.
// TypeScript will prevent unknown types from being used, as shown in the below example:
let w = 1;
// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
// Casting is when we use the "as" keyword to say property or variable is of the casted type.
// ----> Type: undefined & null
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
let y = undefined;
let z = null;
// -----TypeScript Arrays-----
const names = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// -----> Readonly
// The readonly keyword can prevent arrays from being changed.
// -----TypeScript Tuples-----
// ----> Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:
// define our tuple
let ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.
// -----TypeScript Object Types-----
const car = {
    type: 'Nissan',
    model: 'Xtera',
    year: 2000
};
// ----> Type Inference
// TypeScript can infer the types of properties based on their values.
const vehicle = {
    type: "Toyota",
};
vehicle.type = "Ford"; // no error
// vehicle.type = 2;  Error: Type 'number' is not assignable to type 'string'.
// ----> Optional Properties
// Optional properties are properties that don't have to be defined in the object definition.
const motor = {
    type: "Toyota"
};
motor.mileage = 2000;
// ----> Index Signatures
// Index signatures can be used for objects without a defined list of properties.
const nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; Error: Type 'string' is not assignable to type 'number'.
// -----TypeScript Enums-----
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
// ----> Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
// currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
// ----> Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["front"] = 1] = "front";
    CardinalDirections[CardinalDirections["right"] = 2] = "right";
    CardinalDirections[CardinalDirections["down"] = 3] = "down";
    CardinalDirections[CardinalDirections["left"] = 4] = "left";
})(CardinalDirections || (CardinalDirections = {}));
// logs 1
console.log(CardinalDirections.front);
// logs 4
console.log(CardinalDirections.left);
// ----> Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
// ----> String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
(function (CardinalDirections) {
    CardinalDirections["_North"] = "North";
    CardinalDirections["_East"] = "East";
    CardinalDirections["_South"] = "South";
    CardinalDirections["_West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
// logs "North"
console.log(CardinalDirections._North);
// logs "West"
console.log(CardinalDirections._West);
// -----TypeScript Type Aliases and Interfaces-----
// TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.
