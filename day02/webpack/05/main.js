import {foo} from "./foo"
import "./style.css"
const div = document.createElement("div");
div.classList.add("red");
div.innerText = "hello world"
document.body.append(div)
console.log("main")
console.log(foo())