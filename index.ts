// ----> Explicit - writing out the type:
let firstName: string = 'Bola';

// ----> Implicit - TypeScript will "guess" the type, based on the assigned value:
let lastName = 'Conner';

// Note: Having TypeScript "guess" the type of a value is called infer.

// ----> Type: any
// any is a type that disables type checking and effectively allows all types to be used.
// Setting any to the special type any disables type checking:

let  room : any = 1;

// ----> Type: unknown
// unknown is a similar, but safer alternative to any.

// TypeScript will prevent unknown types from being used, as shown in the below example:
let w: unknown = 1;

// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.

// Casting is when we use the "as" keyword to say property or variable is of the casted type.

// ----> Type: undefined & null
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.

let y: undefined = undefined;
let z: null = null;


// -----TypeScript Arrays-----

const names: string[] = [];
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
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.


// -----TypeScript Object Types-----

const car: {type: string, model: string, year: number } = {
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
const motor: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
motor.mileage = 2000;

// ----> Index Signatures
// Index signatures can be used for objects without a defined list of properties.
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; Error: Type 'string' is not assignable to type 'number'.


// -----TypeScript Enums-----

// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.

// ----> Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
// currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.

// ----> Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:
enum CardinalDirections {
  front = 1,
  right,
  down,
  left
}
// logs 1
console.log(CardinalDirections.front);
// logs 4
console.log(CardinalDirections.left);

// ----> Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// ----> String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
enum CardinalDirections {
  _North = 'North',
  _East = "East",
  _South = "South",
  _West = "West"
};
// logs "North"
console.log(CardinalDirections._North);
// logs "West"
console.log(CardinalDirections._West);


// -----TypeScript Type Aliases and Interfaces-----

// TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.

// ----> Type Aliases
// Type Aliases allow defining types with a custom name (an Alias). 
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const kar: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

// ----> Interfaces
// Interfaces are similar to type aliases, except they only apply to object types.
interface Rectangle {
  length: number,
  side: number
}

const rectangle: Rectangle = {
  length: 20,
  side: 40
}
console.log(rectangle)

// ----> Extending Interfaces
// Interfaces can extend each other's definition.
// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
interface ColouredRectangle extends Rectangle {
  color: string
}

const redRectangle: ColouredRectangle = {
  length: 30,
  side: 50,
  color: 'red'
};
console.log(redRectangle);


// -----TypeScript Union Types-----

// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

// ----> Union | (OR)
// Using the | we are saying our parameter is a string or number:
const printStatusCode = (code: string | number) => {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');

// ----> Union Type Errors
// Note: you need to know what your type is when union types are being used to avoid type errors:
// const printStatusCode = (code: string | number) => {
//   console.log(`My status code is ${code.toUpperCase()}.`) error: Property 'toUpperCase' does not exist ontype 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'
// }


// -----TypeScript Functions-----

// ----> Return Type
// The type of the value returned by the function can be explicitly defined.
// the `: number` here specifies that this function returns a number
const getTime = (): number => {
  return new Date().getTime();
}

// If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

// ----> Void Return Type
// The type void can be used to indicate a function doesn't return any value.
const printHello = (): void => {
  console.log('Hello!');
}

// ----> Parameters
// Function parameters are typed with a similar syntax as variable declarations.
const multiply = (a: number, b: number) => {
  return a * b;
}

// If no parameter type is defined, TypeScript will default to using any, unless additional type information is available as shown in the Default Parameters and Type Alias sections below.

// ----> Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
// the `?` operator here marks parameter `c` as optional
const add = (a: number, b: number, c?: number) => {
  return a + b + (c || 0);
}

// ----> Default Parameters
// For parameters with default values, the default value goes after the type annotation:
const pow = (value: number, exponent: number = 10) => {
  return value ** exponent;
}
console.log(pow(3, 2));
console.log(pow(3));

// ----> Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.
const divide = ({ dividend, divisor }: { dividend: number, divisor: number }) => {
  return dividend / divisor;
}

// ----> Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
const addition = (a: number, b: number, ...rest: number[]) => {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

// ----> Type Alias
// Function types can be specified separately from functions with type aliases.
// These types are written similarly to arrow functions, read more about arrow functions here.
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunc: Negate = (value) => value * -1;


// -----TypeScript Casting-----

// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
// Casting is the process of overriding a type.

// ----> Casting with as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
let x: unknown = 'hello';
console.log((x as string).length);

// ----> Casting with <>
// Using <> works the same as casting with as.
let o: unknown = 'hello';
console.log((<string>o).length);

// This type of casting will not work with TSX, such as when working on React files.

// ----> Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.


// -----TypeScript Classes-----

// TypeScript adds types and visibility modifiers to JavaScript classes.

//---->  Members: Types
// The members of a class (properties & methods) are typed using type annotations, similar to variables.
class Person {
  mame: string | undefined;
}

const person = new Person();
person.mame = 'tola';

// ----> Members: Visibility
// Class members also be given special modifiers which affect visibility.

// There are three main visibility modifiers in TypeScript.
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class Human {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    console.log(this.name);
    return this.name;
  }

}

const human = new Human("Jane");
console.log(human.getName()); // person.name isn't accessible from outside the class since it's private

// ----> Parameter Properties
// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.

class Persin {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const persin = new Persin("Payne");
console.log(persin.getName());

// ----> Readonly
// Similar to arrays, the readonly keyword can prevent class members from being changed.
class Bird {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const parrot = new Bird("Yvonne");
console.log(parrot.getName());

// ----> Inheritance: Implements
// Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.
interface Shape {
  getArea: () => number;
}

class Box implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

// A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {
 
// ----> Inheritance: Extends
// Classes can extend each other through the extends keyword. A class can only extends one other class.

interface Shape {
  getArea: () => number;
}

class Polygon implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Polygon {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Polygon
}

// ----> Override
// When a class extends another class, it can replace the members of the parent class with the same name.
// Newer versions of TypeScript allow explicitly marking this with the override keyword.

interface Shape {
  getArea: () => number;
}

class Rhombus implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Rhombus
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rhombus[width=${this.width}, height=${this.height}]`;
  }
}

class Kite extends Rhombus {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Kite[width=${this.width}]`;
  }
}

// ----> Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. 
// This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.

abstract class Polygone {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Triangle extends Polygone {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

// Abstract classes cannot be directly instantiated, as they do not have all their members implemented.


// -----TypeScript Basic Generics-----

// Generics allow creating 'type variables' which can be used to create classes, 
// functions & type aliases that don't need to explicitly define the types that they use.
// Generics makes it easier to write reusable code.

// ----> Functions
// Generics with functions help make more generalized methods which more accurately represent the types used and returned.
const createPair = <S, T>(v1: S, v2: T): [S, T] => {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

// TypeScript can also infer the type of the generic parameter from the function parameters.

// ----> Classes
// Generics can be used to create generalized classes, like Map.
class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10

// ----> Type Aliases
// Generics in type aliases allow creating types that are more reusable.
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };

// This also works with interfaces with the following syntax: interface Wrapped<T> {

// ----> Default Value
// Generics can be assigned default values which apply if no other value is specified or inferred.
class NamedVal<T = string> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setVal(value: T) {
    this._value = value;
  }

  public getVal(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let val = new NamedVal('myNumber');
val.setVal('myValue');
console.log(val.toString()); // myNumber: myValue

// ----> Extends
// Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.
const createLoggedPair = <S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] => {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}


// -----TypeScript Utility Types-----

// TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.

// ----> Partial
// Partial changes all the properties in an object to be optional.
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

// ----> Required
// Required changes all the properties in an object to be required.
interface Carr {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Carr> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};

// ----> Record
// Record is a shortcut to defining an object type with a specific key type and value type.
const nameNAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};
// Record<string, number> is equivalent to { [key: string]: number }

// ----> Omit
// Omit removes keys from an object type.
interface Being {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Being, 'age' | 'location'> = {
  name: 'Bob'
  // `Omit` has removed age and location from the type and they can't be defined here
};

// ----> Pick
// Pick removes all but the specified keys from an object type.
interface Persn {
  name: string;
  age: number;
  location?: string;
}

const tob: Pick<Persn, 'name'> = {
  name: 'Tob'
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

// ----> Exclude
// Exclude removes types from a union.
type Primitive = string | number | boolean
const valiu: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.

// ----> ReturnType
// ReturnType extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

// ----> Parameters
// Parameters extracts the parameter types of a function type as an array.
type PointPrinter = (p: { x: number; y: number; }) => void;
const poynt: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};


// -----TypeScript Keyof-----

// keyof is a keyword in TypeScript which is used to extract the key type from an object type.

// ----> keyof with explicit keys
// When used on an object type with explicit keys, keyof creates a union type with those keys.
interface Peson {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
const printPersonProperty = (person: Peson, property: keyof Peson) => {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let peson = {
  name: "Max",
  age: 27
};
printPersonProperty(peson, "age"); // Printing person property name: "Max"

// ----> keyof with index signatures
// keyof can also be used with index signatures to extract the index type.
type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}
