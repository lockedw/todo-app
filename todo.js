const form = document.querySelector("#todo-form");
const todoInput = document.querySelector('#todo');
const todoList = document.querySelector('.list-group');
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();
const newTodo = todoInput.value.trim();
function eventListeners() {
    form.addEventListener("submit", addTodo);
    
}
// ! todo add fonksiyonu

function addTodo(e) {
    const newTodo = todoInput.value.trim();
    AddToDoUi(newTodo);
    e.preventDefault();
}
function AddToDoUi(e) {

    const listitem = document.createElement("li");
    const link = document.createElement("a");
    // ? link oluşturma işlemi
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listitem.className = "list-group-item d-flex justify-content-between";
    listitem.appendChild(link);

    listitem.

    todoList.appendChild(listitem);
    console.log(listitem);
}

