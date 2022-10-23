//seclectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//Event Listeners
todoButton.addEventListener("click", addTodo);
//Functions
function addTodo(event) {
  //Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const todoLi = document.createElement("li");
  todoLi.innerText = todoInput.value;
  todoLi.classList.add("todo-item");
  todoDiv.appendChild(todoLi);

  //check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class = " fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //check Delete button
  const trashdButton = document.createElement("button");
  trashdButton.innerHTML = '<i class = " fas fa-trash"></i>';
  trashdButton.classList.add("trash-btn");
  todoDiv.appendChild(trashdButton);

  //Append to list
  todoList.appendChild(todoDiv);
  //clear todo input value
  todoInput.value = "";
  event.preventDefault();
}
