import { payment } from "./payment"; // import the payment interface from payment.ts
const payment1: payment = {
  status: "paid",
  amount: 100,
};
console.log(payment1.amount); // 100

interface Person {
  name: string;
  age: number;
  address?: string; // optional property
}

const omar: Person = {
  // notifies u if any attribute is missing
  name: "Omar",
  age: 22,
  address: "cairo",
};
const omar2: Person = {
  name: "Omar",
  age: 22,
  address: "cairo",
  //   email:"omar@gmail.com"  -> this will not work because email is not a property of Person
};
