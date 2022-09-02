const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const firstSecondBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");
/* Todoları seçme  */

eventListeners();


function eventListeners() {
    form.addEventListener('submit',addTodo);
}
function addTodo(e) {
    const newTodo = todoInput.value.trim();


    if(newTodo === ""){
    showAlert("danger","Lütfen bir mesaj giriniz");
    }
  else {
    showAlert("success","to-do başarılı bir şekilde eklendi");
    addTodoToUI(newTodo);
  }



  function showAlert(type,message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`
    alert.textContent = message;
    firstCardBody.appendChild(alert);
    
    console.log(alert)


    setTimeout(() => {
        alert.remove()
    }, 1000);
}
    

    



    e.preventDefault();
}
function addTodoToUI(newTodo) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";  
    listItem.className= "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    todoList.appendChild(listItem);

    todoInput.value = "";



}
