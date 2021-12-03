// TO DO
document.addEventListener("DOMContentLoaded",()=>{
  //先把所有元素const起來，不用的再刪掉
  const ul = document.querySelector("ul")
  const li = document.querySelector("li")
  const text = document.querySelector("#input")
  const addBtn = document.querySelector(".addBtn")

    //3.輸入新任務名稱， 按下 + 新增任務
      //取得 input 輸入的文字
      //按下 + 可以新增任務
      //新增的任務也須具有 標記完成 / 刪除功能
      
      
      addBtn.addEventListener("click",()=>{
        // console.log(text.value);//輸入框的值
        if (text.value!==""){
        const todo = document.createElement("li")//create的tag名
        // todo.className = 'todoItem'
        todo.innerHTML = `${text.value}<span class=\"close\">x</span>`
        // console.log(task);
        ul.appendChild(todo)
        text.value = " "//清除輸入框的值
        }
      })
    
  //1.點擊任務標記是否完成
    //點擊任務 list 可以切換 checked class
    // console.log(aa);
    ul.addEventListener("click",(e)=>{
      const event = e.target
      console.log(e.target);//點擊事件
      console.log(e.target.nodeName);//節點名稱
      if(event && event.nodeName ==="LI"&& event.className === "checked")
      {
        event.classList.remove("checked");
        } 
          else {event.classList.add("checked")
        };
    //2.點擊 x 刪除任務
    //點擊 x 可移除任務
      if (event.nodeName === "SPAN"){
        event.parentNode.remove()
      }
  })
     
      
        //4.將 To Do List 用 localStorage 改寫
        //所有新增修改刪除都需要更新 localStorage
      // })
})
