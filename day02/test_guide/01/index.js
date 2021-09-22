const {add} = require("./add.js");
//import {add} from "./add.js"
ctest('two plus two is four', () => {
  expect(add(2,2)).toBe(4);
});
