let inputElem = document.querySelector("input");
let addToDoForm = document.querySelector(".add");
let todoUlElem = document.querySelector(".todos");
let modal = document.querySelector(".modal");
let closeModal = document.getElementById("closeModal");
let noBtn  =document.getElementById("noBtn");
let yesBtn  =document.getElementById("yesBtn");
let selectedTodo = null;

function addNewTodo(newToDoValue) {
  let newTodoLi = document.createElement("li");
  newTodoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";

  let newTodoTitleSpan = document.createElement("span");
  newTodoTitleSpan.innerHTML = newToDoValue;

  let newTodoTrash = document.createElement("button");
  newTodoTrash.className = "delete btn btn-outline-danger btn-sm";
  newTodoTrash.innerHTML = "ClickForDelete"

  closeModal.addEventListener("click",function(){
    modal.style.display = "none"
  });

  newTodoTrash.addEventListener("click", function () {
    if (modal.style.display = "none") {
      modal.style.display = "block"
      selectedTodo = this.parentElement;
    }
  });
  
  yesBtn.addEventListener("click",function(){
    if(selectedTodo) selectedTodo.remove();
    
    modal.style.display = "none";
    selectedTodo = "null"
  })

  noBtn.addEventListener("click",function(){
    modal.style.display = "none"
  })

  newTodoLi.append(newTodoTitleSpan, newTodoTrash);

  todoUlElem.append(newTodoLi);

  console.log(newTodoLi);

  yesBtn.addEventListener("click", () =>{
    modal.style.toggle("closeModal")
  })
}

addToDoForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

inputElem.addEventListener("keydown", function (event) {
  let newTodoValue = event.target.value.trim();

  if (event.keyCode === 13) {
    if (newTodoValue) {
      inputElem.value = "";
      addNewTodo(newTodoValue);
    }
  }
});
