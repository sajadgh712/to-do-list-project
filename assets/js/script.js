let inputElem = document.querySelector("input");
let addToDoForm = document.querySelector(".add");
let todoUlElem = document.querySelector(".todos");
let modal = document.querySelector(".modal");
let closeModal = document.getElementById("closeModal");
let noBtn  =document.getElementById("noBtn");
let yesBtn  =document.getElementById("yesBtn");


function addNewTodo(newToDoValue) {
  let newTodoLi = document.createElement("li");
  newTodoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";

  let newTodoTitleSpan = document.createElement("span");
  newTodoTitleSpan.innerHTML = newToDoValue;

  let newTodoTrash = document.createElement("i");
  newTodoTrash.className = "delete";
  newTodoTrash.innerHTML = "ClickForDelete"

  closeModal.addEventListener("click",function(){
    modal.style.display = "none"
  });

  newTodoTrash.addEventListener("click", function (event) {
    if (modal.style.display = "none") {
      modal.style.display = "block"
    }
    
   

  });
  
  // yesBtn.addEventListener("click",function(event){
  //   event.target.parentElement.remove();
  // })
  


  noBtn.addEventListener("click",function(){
    modal.style.display = "none"
  })
  // console.log(newTodoTrash);

  newTodoLi.append(newTodoTitleSpan, newTodoTrash);

  todoUlElem.append(newTodoLi);

  console.log(newTodoLi);
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
