
document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    
    // Get the value from the input
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.className = 'task-item';
        li.textContent = taskText;

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        // Add event listener to the delete button
        deleteBtn.addEventListener('click', function() {
            // Remove the list item from the task list
            const taskList = document.getElementById('task-list');
            taskList.removeChild(li);
        });

        // Append the button to the list item
        li.appendChild(deleteBtn);

        // Append the new list item to the task list
        const taskList = document.getElementById('task-list');
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

// Allow adding tasks with Enter key
document.getElementById('task-input').addEventListener('keypress', function(event) {
   if (event.key === 'Enter') {
       document.getElementById('add-task-btn').click();
   }
});
