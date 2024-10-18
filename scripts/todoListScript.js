const form = document.getElementById('newTaskForm');
const displayTasks = document.getElementById('displayTasks');
const dropdownButton = document.getElementById('newTaskBtn');
const dropdownContent = document.getElementById('newTaskForm');

document.addEventListener("DOMContentLoaded", renderTasks)


form.addEventListener('submit', addNewTask)

dropdownButton.addEventListener('click', toggleAddTaskBtn)

function toggleAddTaskBtn() {
    dropdownContent.classList.toggle('hidden');

}

function addNewTask(event) {
    event.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const taskPriority = document.getElementById('priority').value;
    const taskDueDate = document.getElementById('task-due-date').value;
    const taskAssignedTo = document.getElementById("task-assigned").value;
    const taskNote = document.getElementById("note").value;

    const newTask = {
        id: Date.now(),
        name: taskName,
        priority: taskPriority,
        dueDate: taskDueDate,
        assignedTo: taskAssignedTo,
        note: taskNote
    }
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Name: " + taskName);

    renderNewTask(newTask);

    toggleAddTaskBtn()
    form.reset();

}
function renderNewTask(task) {
    const card = document.createElement("div");
    card.classList.add('card');
    card.id = `${task.id}`
    card.innerHTML = `
    <div class="leftPart">
    <h3>${task.name}</h3>
    <p>Assigned to: ${task.assignedTo}</p>
    <p>Due Date: ${task.dueDate}</p>
    <p>Priority: ${task.priority}</p>
    <p>${task.note}</p>
    </div>
    <div class="rightPart">
     <p class="toolkit-toggle">...</p>
     <div class="toolkitMenu toolkitMenuHide">
       <button class="edit">Edit</button>
       <button class="remove">Remove</button>
       <button class="done">Mark as done</button>
    </div>
    </div>
    `;


    const toggleButton = card.querySelector('.toolkit-toggle');
    const toolkitMenu = card.querySelector('.toolkitMenu');

    toggleButton.addEventListener('click', toggleDisplay)

    card.querySelector('.remove').addEventListener('click', function () {
        remove(task)
        toggleDisplay
    });
    displayTasks.appendChild(card);

    function toggleDisplay() {
        toolkitMenu.classList.toggle('toolkitMenuHide')
    }
}



function renderTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    displayTasks.innerHTML = '';
    tasks.forEach(renderNewTask);
}

function remove(taskToRemove) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const updatedTasks = tasks.filter(task => taskToRemove.id !== task.id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    renderTasks();
}

// function openToolkit(task) {
//     const tasks = JSON.parse.parse(localStorage.getItem("tasks"));
//     const selectedTask = tasks.filter(id => task.id === id);
//     selectedTask.classList.toggle('hidden');
// }