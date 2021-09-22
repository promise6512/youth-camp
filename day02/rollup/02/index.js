import { foo } from "./foo";
import data from "./data.json"
//tree-shaking 打包时忽略未调用的引入
import { bar } from "./bar";
console.log(foo());
console.log(data)