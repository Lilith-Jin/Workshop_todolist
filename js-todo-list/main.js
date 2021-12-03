// TO DO
document.addEventListener("DOMContentLoaded",()=>{
  //1.點擊任務標記是否完成
  //點擊任務 list 可以切換 checked class
  const allclick = document.querySelector("ul")
  const click = document.querySelector("li")
    // console.log(aa);
    allclick.addEventListener("click",(e)=>{
      const event = e.target
      console.log(e.target);//點擊事件
      console.log(e.target.nodeName);//節點名稱
      if(event && event.nodeName =="LI"&& event.className == "checked"){
        event.classList.remove("checked");
        } 
          else {event.classList.add("checked")
        };
    //2.點擊 x 刪除任務
    //點擊 x 可移除任務
      if (event.nodeName = "SPAN"){
        event.parentNode.remove()
      }
  })
})
