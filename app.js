const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem('todos'));

//Save our "todos" to local Storage
if(todos){
    todos.forEach((todo) => {
        addTodo(todo);    
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;
    if (todo) {
        todoText = todo.text;
    }
    // Build LIs Items
if(todoText){
    const todoEL = document.createElement("li");
    if (todo && todo.completed) {
    todoEL.classList.add("completed");
    }
    todoEL.innerText = todoText;

    //mark as completed
    todoEL.addEventListener("click", () => {
        todoEL.classList.toggle("completed");
        updateLS();
    });

    //Delete
    todoEL.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        todoEL.remove();
        updateLS();
    });

    //Add it to the DOM
    todosUL.appendChild(todoEL);
    input.value = "";
    }
}


function updateLS() {
    todoEL = document.querySelectorAll('li');

    const todos = [];

    todosEL.forEach((todosEL) => {
        todos.push({
            text: todoEL.innerText,
            completed: todoEL.classList.contains('completed')
        });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}