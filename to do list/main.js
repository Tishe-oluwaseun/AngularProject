document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value.trim();
    const errorMessage = document.getElementById('error-message');
    if (taskText) {
        addTask(taskText);
        document.getElementById('new-task').value = '';
        if (errorMessage) {
            errorMessage.textContent = '';
        }
    } else {
        displayError('Please input a task');
    }
});

function addTask(text) {
    const li = document.createElement('li');
    li.className = 'task';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = text;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'task-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function() {
        editTask(li, taskSpan);
        console.log(li)
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        deleteTask(li);
    });

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(actionsDiv);

    li.addEventListener('click', function(event) {
        if (event.target.tagName !== 'BUTTON') {
            li.classList.toggle('completed');
        }
    });

    document.getElementById('task-list').appendChild(li);
}

function editTask(li, taskSpan) {
    const newText = prompt('Edit your task:', taskSpan.textContent);
    if (newText !== null && newText.trim()) {
        taskSpan.textContent = newText.trim();
    } else {
        displayError('Task cannot be empty');
    }
}

function deleteTask(li) {
    li.remove();
}

function displayError(message) {
    let errorMessage = document.getElementById('error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('div');
        errorMessage.id = 'error-message';
        document.querySelector('.to-do-list').insertBefore(errorMessage, document.getElementById('task-list'));
    }
    errorMessage.textContent = message;
}
