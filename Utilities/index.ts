interface person {
  name: string;
  age: number;
  address: string;
  email: string;
}

// Omit in TypeScript is a utility type that creates a new type by omitting certain properties from an existing type.
interface personWithoutEmail extends Omit<person, "email"> {}

const person1: personWithoutEmail = {
  name: "omar",
  age: 22,
  address: "123 street",
  //   email: will not be allowed here
};

// Pick in TypeScript is a utility type that creates a new type by picking certain properties from an existing type.
interface personWithNameOnly extends Pick<person, "name"> {}

const person2: personWithNameOnly = {
  name: "omar",
};

// Partial in TypeScript is a utility type that makes all properties of a type optional.
interface optionalPerson extends Partial<person> {}

const person3: optionalPerson = {
  // all properties are optional
};

// Required in TypeScript is a utility type that makes all properties of a type required.
interface requiredPerson extends Required<person> {}

const person4: requiredPerson = {
  name: "omar",
  age: 22,
  address: "123 street",
  email: "email@gmail.com",
};

// Readonly in TypeScript is a utility type that makes all properties of a type read-only.
interface readOnlyPerson extends Readonly<person> {}

const person5: readOnlyPerson = {
  name: "omar",
  age: 22,
  address: "123 street",
  email: "",
};
// person5.name="ali" // will not be allowed here because name is read-only



// You can combine these utility types to create more complex types.
