// Compose starts right to left
const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

// pipe starts left to right
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

// we want to add 1 to a number and then double it.
const add1 = (n) => n + 1;
const double = (n) => n * 2;

let addOneThenDoubleIt;

// With compose(), that would be:
addOneThenDoubleIt = compose(double, add1);

console.log("compose ==>", addOneThenDoubleIt(2)); // 6
// ((2 + 1 = 3) * 2 = 6)

//With pipe we can start left to right improving better understanding, like this:
addOneThenDoubleIt = pipe(add1, double);
console.log("pipe ==>", addOneThenDoubleIt(2)); // 6
// ((2 + 1 = 3) * 2 = 6)
