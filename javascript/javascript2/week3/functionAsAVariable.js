console.log("loaded");
/**
 * Create an array with 3 items.
 * All items should be functions.
 * Iterate through the array and call all the functions
 */

const functionArray = [
  () => {
    console.log("Hi I'm a first function in array");
  },
  () => {
    console.log("Hi I'm a second function in array");
  },
  () => {
    console.log("Hi I'm a third function in array");
  }
];

for (const func of functionArray) {
  func();
}

/**
 * Create a function as a const and
 * try creating a function normally.
 * Call both functions.
 */

const constFunc = () => {
  console.log("Hi I'm a const function");
};

normalFunc = () => {
  console.log("Hi I'm a normal function");
};
// NormalFunc = constFunc;
// constFunc = NormalFunc => error

constFunc();
normalFunc();

/**
 * Create an object that has a key whose value is a function.
 * Try calling this function.
 */

const objFunc = {
  key: () => {
    console.log("Hi I'm a key of this object");
  }
};
objFunc.key();
