function addTask() {
    let taskInput = document.getElementById('myInput');
    let taskText = taskInput.value.trim(); // Remove leading/trailing spaces

    if (taskText === '') { 
        alert('Please enter a task'); 
        return;
    }

    let taskList = document.getElementById('taskList');

    // Create new list item
    let li = document.createElement('li');
    li.textContent = taskText;

    // Create Delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Add event listener to remove task
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Append button to the list item
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field after adding
    taskInput.value = "";
}
