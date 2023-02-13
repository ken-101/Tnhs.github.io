const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-input");
const todoAdd = document.querySelector("#todo-add");

todoAdd.addEventListener("click", function() {
  const todoText = todoInput.value;
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoItem.innerHTML = `
    <div class="todo-text">${todoText}</div>
    <div class="todo-remove">Remove</div>
  `;
  todoList.appendChild(todoItem);
  todoInput.value = "";

  const todoRemove = todoItem.querySelector(".todo-remove");
  todoRemove.addEventListener("click", function() {
    todoItem.remove();
  });
});
