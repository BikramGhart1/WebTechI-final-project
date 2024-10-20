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
        note: taskNote,
        completed: false
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

    const taskClass = task.completed ? 'completed' : 'notCompleted';
    const taskStatus = task.completed ? 'Mark as undone' : 'Mark as done';
    card.innerHTML = `
    <div class="leftPart ${taskClass}">
    <h3>${task.name}</h3>
    <p>Assigned to: ${task.assignedTo}</p>
    <p class="due-date">Due Date: ${task.dueDate}</p>
    <p>Priority: ${task.priority}</p>
    <p>${task.note}</p>
    </div>
    <div class="rightPart">
     <p class="toolkit-toggle">...</p>
     <div class="toolkitMenu toolkitMenuHide">
       <button class="edit">Edit</button>
       <button class="remove">Remove</button>
       <button class="done">${taskStatus}</button>
    </div>
    </div>
    `;


    const toggleButton = card.querySelector('.toolkit-toggle');
    const toolkitMenu = card.querySelector('.toolkitMenu');

    toggleButton.addEventListener('click', toggleDisplay)

    card.querySelector('.remove').addEventListener('click', function () {
        remove(task)
        toggleDisplay();
    });

    card.querySelector('.done').addEventListener('click', function () {
        markAsDone(task);
        toggleDisplay();
    })
    card.querySelector('.edit').addEventListener('click', function () {
        editTask(task);
        toggleDisplay();
    })
    displayTasks.appendChild(card);

    function toggleDisplay() {
        toolkitMenu.classList.toggle('toolkitMenuHide')
    }
}

const asideBarButton = document.getElementById('asideBar');
asideBarButton.addEventListener('click', function () {
    console.log("Aside bar click");
    document.querySelector('.showAside').classList.toggle('aside')
})

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

function markAsDone(clickedTask) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const updatedTasks = tasks.map((task) => {
        if (task.id === clickedTask.id) {
            task.completed = !task.completed;

        }
        return task;
    })
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    renderTasks();
}

function editTask(taskToEdit) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    // Find the task to edit and populate the form with its details
    const task = tasks.find(t => t.id === taskToEdit.id);
    if (task) {
        // Populate form fields with task data
        document.getElementById('task-name').value = task.name;
        document.getElementById('priority').value = task.priority;
        document.getElementById('task-due-date').value = task.dueDate;
        document.getElementById("task-assigned").value = task.assignedTo;
        document.getElementById("note").value = task.note;

        // Show the form to edit
        toggleAddTaskBtn();
        remove(task);
        addNewTask();
    }
}

document.addEventListener('DOMContentLoaded', asynchronousRequest);

function asynchronousRequest() {
    const asideButtonsAll=document.querySelectorAll('.asideButtons');

    asideButtonsAll.forEach(button=>{

        button.addEventListener('click', function () {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById('displayTasks').innerHTML = xhr.responseText;
                }
            }
            xhr.open("GET", "../html/404.html", true);
            xhr.send();
        })
    })
}
