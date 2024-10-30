const darkBtn = document.getElementById("dark-btn");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const send = document.getElementById("add-btn");
const inputText = document.getElementById("input-text");
const todoList = document.getElementById("todo-list");






darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.length > 0) {
        sun.style.display = "block";
        moon.style.display = "none";
       
    } else {
        sun.style.display = "none";
        moon.style.display = "block";
    }
});



send.addEventListener("click",()=>{
    if (inputText.value.trim().length<1) {
        alert("Nimadir narsa yozing")
    }else{
        const li =document.createElement("li")
        li.innerHTML=`            
        <div>
        <input type="checkbox" id="check" onClick="toggleStrikethrough(this)">

        <h2 class="todo-text">  ${inputText.value}</h2></div>
        <div class="btn-box">
            <button class="change-btn" id="change-btn" onClick="editTodo(this)"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete-btn" id="delete-btn" onClick="deleteTodo(this)"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;


    todoList.appendChild(li)
    inputText.value="";
    }
})



function toggleStrikethrough(checkbox) {
    const todoText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        todoText.classList.add("strikethrough");
    } else {
        todoText.classList.remove("strikethrough");
    }
}








11

function deleteTodo(e) {
  
    todoList.removeChild(e.parentNode.parentNode)
}

function editTodo(e) {

    let yozuv =e.parentNode.parentNode.children[0].children[1].textContent;
       inputText.value=yozuv;
       deleteTodo(e)
  
}



