function enableGesture(ele){
  //console.log(1)
//  console.log(ele.addEventListener
/*   ele.addEventListener("onmusedown",()=>{
    console.log("onmousedown")
  }) */

  ele.addEventListener("touchstart",()=>{
    onStart()
    console.log("touchstart")
  })
  ele.addEventListener("touchmove",()=>{
    console.log("touchmove")
  })
  ele.addEventListener("touchstart",()=>{
    console.log("touchend")
  })
 
  let onStart = () => {
    ele.dispatchEvent(new CustomEvent("start"))
  };

  
  
}