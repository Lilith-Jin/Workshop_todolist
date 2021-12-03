// TO DO
document.addEventListener("DOMContentLoaded",()=>{
  //1.點擊任務標記是否完成
  //點擊任務 list 可以切換 checked class
  const allclick = document.querySelector("ul")
  const click = document.querySelector("li")
    // console.log(aa);
    allclick.addEventListener("click",(e)=>{
      // console.log(e.target);
      if(e.target && e.target.nodeName =="LI")
        
       {e.target.classList.add("checked");}
        
      // else(e.target.classList == "checked");
      //   e.target.classList.remove("checked");
    // click.classList.add("checked");
  })
})
