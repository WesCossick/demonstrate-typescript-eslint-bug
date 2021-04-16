import fs from "fs";

console.log(fs.existsSync("./index.ts"));

const promise = Promise.resolve('value');

if (promise) {
  // Trigger no-misused-promises rule
}
