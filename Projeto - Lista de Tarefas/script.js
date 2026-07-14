const inputElement = document.querySelector('.new-task-input');
const addTaskButton = document.querySelector('.new-task-button');
const tasksContainer = document.querySelector('.tasks-container');

// Função para validar o input
const validateInput = () => {
    return inputElement.value.trim().length > 0;
};

// Função para adicionar uma nova tarefa
const handleAddTask = () => {
    if (!validateInput()) {
        inputElement.classList.add('error');
        return;
    }

    const taskContent = inputElement.value;
    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const taskText = document.createElement('p');
    taskText.innerText = taskContent;

    const deleteItem = document.createElement('i');
    deleteItem.classList.add('delete-task-button', 'far', 'fa-trash-alt');

    taskItemContainer.appendChild(taskText);
    taskItemContainer.appendChild(deleteItem);
    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = ''; // Limpa o input
    updateLocalStorage(); // Atualiza o Local Storage
};

// Delegação de eventos: o kit do Font Awesome substitui o <i> por um <svg>
// em tempo de execução, então o listener precisa ficar num elemento
// estável (o container), não no ícone em si.
tasksContainer.addEventListener('click', (event) => {
    const taskItemContainer = event.target.closest('.task-item');
    if (!taskItemContainer) return;

    if (event.target.tagName === 'P') {
        event.target.classList.toggle('completed');
        updateLocalStorage();
        return;
    }

    taskItemContainer.remove();
    updateLocalStorage();
});

// Função para atualizar o Local Storage
const updateLocalStorage = () => {
    const tasks = tasksContainer.childNodes;
    const tasksArray = Array.from(tasks).map(task => {
        const content = task.firstChild;
        return {
            description: content.innerText,
            isCompleted: content.classList.contains('completed')
        };
    });
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
};

// Função para recuperar tarefas do Local Storage
const refreshTasksUsingLocalStorage = () => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
    if (!tasksFromLocalStorage) return;

    tasksFromLocalStorage.forEach(task => {
        const taskItemContainer = document.createElement('div');
        taskItemContainer.classList.add('task-item');

        const taskText = document.createElement('p');
        taskText.innerText = task.description;
        if (task.isCompleted) {
            taskText.classList.add('completed');
        }

        const deleteItem = document.createElement('i');
        deleteItem.classList.add('delete-task-button', 'far', 'fa-trash-alt');

        taskItemContainer.appendChild(taskText);
        taskItemContainer.appendChild(deleteItem);
        tasksContainer.appendChild(taskItemContainer);
    });
};

addTaskButton.addEventListener('click', handleAddTask);

inputElement.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleAddTask();
    }
});

inputElement.addEventListener('input', () => {
    inputElement.classList.remove('error');
});

refreshTasksUsingLocalStorage();
