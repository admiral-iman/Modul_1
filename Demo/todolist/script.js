let todos = [];

// Fungsi untuk menambahkan to-do baru
function addTodo() {
    const todoInput = document.getElementById("todo-input").value;
    if (todoInput !== "") {
        todos.push(todoInput);
        document.getElementById("todo-input").value = ""; // Kosongkan input setelah tambah
        displayTodos();
    } else {
        alert("Harap masukkan pekerjaan terlebih dahulu!");
    }
}

// Fungsi untuk menampilkan to-do
function displayTodos() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = ""; // Hapus daftar sebelum menampilkan ulang
    todos.forEach((todo, index) => {
        todoList.innerHTML += `
            <li>
                <input type="text" id="todo-${index}" value="${todo}" onblur="updateTodo(${index})" class="todo-item"> 
                <div>
                    <button class="edit" onclick="enableEditing(${index})">Edit</button>
                    <button class="delete" onclick="deleteTodo(${index})">Hapus</button>
                </div>
            </li>
        `;
    });
}

//
function deleteTodo(index) {
    todos.splice(index, 1); // Remove the selected to-do
    displayTodos();
}
