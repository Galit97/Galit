export class TaskView {
    private appElement: HTMLDivElement | null;

    constructor() {
        this.appElement = document.querySelector<HTMLDivElement>('#app');
    }

    renderForm() {
        if (this.appElement) {
            this.appElement.innerHTML = `
              <h1>Tasks Manager</h1>
              <form id="task-form">
                <label for="task">Task:</label>
                <input type="text" id="task" required />
                <label for="description">Description:</label>
                <textarea id="description" required></textarea>
                <button type="submit">Add task</button>
              </form>
                 <div id="undo-redo-buttons">
        <button id="undo-button">Undo</button>
        <button id="redo-button">Redo</button>
    </div>
              <div id="task-list"></div>
            `;
        }
    }

    renderTaskList(tasks: { task: string; description: string; done: boolean }[]) {
        const taskListElement = document.querySelector<HTMLDivElement>('#task-list');
        if (taskListElement) {
            taskListElement.innerHTML = tasks.map((task, index) => `
                <div class="Task ${task.done ? 'done' : ''}">
                    <input type="checkbox" class="task-done" data-index="${index}" ${task.done ? 'checked' : ''}/>
                    <h3>${task.task}</h3>
                    <p>Description: ${task.description}</p>
                    <button data-index="${index}" class="edit-task">Edit</button>
                    <button data-index="${index}" class="delete-task">Delete</button>
                </div>
            `).join('');
        }
    }

    getFormData() {
        const task = (document.querySelector<HTMLInputElement>('#task')!).value;
        const description = (document.querySelector<HTMLInputElement>('#description')!).value;
        return { task, description };
    }

    clearForm() {
        (document.querySelector<HTMLInputElement>('#task')!).value = '';
        (document.querySelector<HTMLInputElement>('#description')!).value = '';
    }

    fillFormData(task: { task: string; description: string }) {
        (document.querySelector<HTMLInputElement>('#task')!).value = task.task;
        (document.querySelector<HTMLInputElement>('#description')!).value = task.description;
    }
}
