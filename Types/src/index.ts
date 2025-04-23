const x = 10; // Implicit Type
const y: number = 50; // Explicit Type
const sum = x + y;

const num: number = 10;
const str: string = "hello";

// any
let v: any = 10;
v = "hello";
v = true;

// Arrays
const arrNum: number[] = [1, 2, 3, 4, 5];
const arrStr: string[] = ["a", "b", "c", "d", "e"];
const arr = [1, 2, 3, "sss", true];

// Enum
// Enum allows u to define a set of named constants.
// Enums are a special "class" that represents a group of constants (unchangeable variables).
enum BookingStatus {
  Pending = "pending",
  paid = "paid",
  cancelled = "cancelled",
}

let bookingStatus: BookingStatus = BookingStatus.Pending;
console.log(bookingStatus); // Output: pending

if (bookingStatus === BookingStatus.Pending) {
  bookingStatus = BookingStatus.paid;
}
console.log(bookingStatus); // Output: paid

// Union Types
let unionType: number | string = 10;
unionType = "hello"; // valid
// unionType = true; // invalid

// Intersection Types
type Person = {
  name: string;
  age: number;
};
type Employee = {
  employeeId: number;
  department: string;
};

type Manager = Person & Employee;

const manager: Manager = {
  name: "omar",
  age: 22,
  employeeId: 1,
  department: "cs",
};

// unknown type
function checkTypes(input: unknown): void {
  if (typeof input === "string") {
    input.toUpperCase(); // accepts string
  }
  if (typeof input === "number") {
    input.toFixed(); // accepts number
  }
  if (typeof input === "boolean") {
    input.valueOf(); // accepts boolean
  }
}


