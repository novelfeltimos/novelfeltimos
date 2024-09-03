document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("textInput");
    const addTaskButton = document.getElementById("addTaskBtn"); 
    const taskList = document.getElementById("taskList"); 

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim(); 

        if (taskText !== "") { 
            const li = document.createElement("li");
            li.textContent = taskText;

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'Edit-button';
            li.appendChild(editButton);

            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-btn";
            deleteButton.addEventListener("click", () => {
                taskList.removeChild(li); 
            });

            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value = ''; 
        }
    });

    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTaskButton.click();
        }
    });
});
