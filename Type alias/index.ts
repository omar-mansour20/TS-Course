type myType = string | number | boolean;
// This is a type alias for a union type that can be either a string, number, or boolean.

const x: myType = 123;
// This is a variable of type myType, which can be a number.
const y: myType = "Hello";
// This is a variable of type myType, which can be a string.
const z: myType = true;
// This is a variable of type myType, which can be a boolean.
// All three variables are valid because they match the type alias myType.