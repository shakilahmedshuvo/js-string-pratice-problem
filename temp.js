let first = 5;
let secend = 7;
console.log(first, secend);

// value exchange.....

// wrong
// first = secend;
// screen = first;

// approach:1
const temp = first;
first = secend;
secend = temp;
console.log(first, secend);

// approach:2----->Destructuring<----------
[first, secend] = [secend, first];
console.log("this is the new one:", first, ":", secend);