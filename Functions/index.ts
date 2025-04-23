const fun = (val) => {
  // implicitly has an 'any' type
  console.log(val);
};

const fun2 = (val: any) => {
  return val;
};

const v = fun2("hello");

console.log(v);

const fun3 = (str: string) => {
  // accepts (str: string) => returns (string | boolean)[]
  return ["hello", str, true];
};

const sum = (n1: number, n2: number): number => {
  // returns a number
  return n1 + n2;
};
