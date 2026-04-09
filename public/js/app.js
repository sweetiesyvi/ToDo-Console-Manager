const API = '/api/tasks';

async function loadTasks() {
    const res = await fetch(API);
    const tasks = await res.json();

    const list = document.getElementById('taskList');
    list.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task.completed ? '<s>' + task.title + '</s>' : task.title}
            <button onclick="deleteTask('${task._id}')">❌</button>
            <button onclick="completeTask('${task._id}')">✔</button>
        `;
        list.appendChild(li);
    });
}

async function addTask() {
    const input = document.getElementById('taskInput');
    if (!input.value) return;
    await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: input.value })
    });
    input.value = '';
    loadTasks();
}

async function deleteTask(id) {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    loadTasks();
}

async function completeTask(id) {
    await fetch(`${API}/${id}`, { method: 'PUT' });
    loadTasks();
}

loadTasks();