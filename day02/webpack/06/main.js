import {foo} from "./foo"
console.log("main")
console.log(foo())
const btn = document.createElement("button");
btn.innerText = "button"
btn.onclick = async () => {
  //加载bar.js
  
  //webpack语法
  //懒加载,只有触发点击事件才会加载bar.js
  const {bar} =await import("./bar.js")
  console.log(bar());
}
document.body.append(btn)