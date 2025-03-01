// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Selecting DOM elements
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    // Array to store todos
    let todos = [];
  
    // Function to render todos in the DOM
    function renderTodos() {
      // Clear the existing list
      todoList.innerHTML = '';
      // Loop through todos and create list items
      todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
  
        // Create span to display the todo text
        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = todo;
  
        // Container for action buttons
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'todo-actions';
  
        // Edit button
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editTodo(index));
  
        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTodo(index));
  
        // Append buttons to the actions container
        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);
  
        // Append todo text and actions to the list item
        li.appendChild(span);
        li.appendChild(actionsDiv);
  
        // Append the list item to the todo list
        todoList.appendChild(li);
      });
    }
  
    // Create: Add a new todo
    function addTodo(todoText) {
      todos.push(todoText);
      renderTodos();
    }
  
    // Update: Edit an existing todo
    function editTodo(index) {
      const newTodo = prompt('Edit your todo:', todos[index]);
      if (newTodo && newTodo.trim() !== '') {
        todos[index] = newTodo;
        renderTodos();
      }
    }
  
    // Delete: Remove a todo
    function deleteTodo(index) {
      if (confirm('Are you sure you want to delete this todo?')) {
        todos.splice(index, 1);
        renderTodos();
      }
    }
  
    // Event listener for form submission to add a new todo
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTodo = todoInput.value.trim();
      if (newTodo) {
        addTodo(newTodo);
        todoInput.value = ''; // Clear input field after adding
      }
    });
  });
  