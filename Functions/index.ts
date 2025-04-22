const fun = (val) => {
  // implicitly has an 'any' type
  console.log(val);
};

const fun2 = (val: any) => {
  return val;
};

const v = fun2("hello");

console.log(v);

const fun3 = (str: string) => { //(str: string) => (string | boolean)[]
  return ["hello", str, true];
};
