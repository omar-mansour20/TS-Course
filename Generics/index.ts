// generics in typescript
// Generics allow you to create reusable components that can work with any data type
// Generics are often used in functions, classes, and interfaces to create components that can work with any data type.

const compare = <T>(parameter1: T, parameter2: T) => {
  return parameter1 === parameter2 ? true : false;
};

const compareString = compare<string>("hello", "hello"); // true
const compareNumber = compare<number>(1, 2); // false
const compareBoolean = compare<boolean>(true, false); // false
