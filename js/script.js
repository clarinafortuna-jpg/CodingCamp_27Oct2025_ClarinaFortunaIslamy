
/// Local array to store todo items
let todos = [];

function validateform(todo, date) {
    if (todo.trim() === '' || date === '') {
        return false;
    }
    return true;
}


function addTodo() {
    const todoInput = document.getElementById( 'todo-input' ).value;
    const todoDate = document.getElementById( 'todo-date' ).value;

    if (!validateform(todoInput, todoDate)) {   
        alert('Form validation invalid. Please check your inputs.');
    } else {
        //Add todo to local array
        todos.push({ task: todoInput, dueDate: todoDate }) ;

        renderTodos();
    }
} 

function deleteTodo() {

}

function filterTodo() {
    
}

function renderTodos() {
    const todoList = document.getElementById('todo-list');

    // Clear existing list
    todoList.innerHTML += '';

    // Render each todo item
    todos.forEach((todo, index) => {
        todoList.innerHTML += `<li>
            <span>${todo.task} - ${todo.dueDate}</span>
        </li>`;
    });
} 