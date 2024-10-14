import { TaskModel } from './model';
import { TaskView } from './view';

export class TaskController {
    private model: TaskModel;
    private view: TaskView;
    private editingIndex: number | null = null;

    constructor(model: TaskModel, view: TaskView) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.model.loadFromLocalStorage();
        this.view.renderForm();
        this.view.renderTaskList(this.model.getsTask());
        this.setupFormListener();
        this.setupTaskActions();
        this.setupUndoRedoActions(); // Ensure undo/redo actions are set up
    }

    setupFormListener() {
        const formElement = document.querySelector<HTMLFormElement>('#task-form');
        if (formElement) {
            formElement.addEventListener('submit', (event) => {
                event.preventDefault();
                const { task, description } = this.view.getFormData();

                if (this.editingIndex !== null) {
                    this.model.updateTask(this.editingIndex, { task, description, done: false });
                    this.editingIndex = null;
                } else {
                    this.model.addTask(task, description);
                }

                this.view.renderTaskList(this.model.getsTask());
                this.view.clearForm();
                this.setupTaskActions();
            });
        }
    }

    setupTaskActions() {
        const editButtons = document.querySelectorAll<HTMLButtonElement>('.edit-task');
        const deleteButtons = document.querySelectorAll<HTMLButtonElement>('.delete-task');
        const doneCheckboxes = document.querySelectorAll<HTMLInputElement>('.task-done');

        editButtons.forEach(button => {
            button.addEventListener('click', () => {
                const index = Number(button.getAttribute('data-index'));
                const profile = this.model.getsTask()[index];
                this.view.fillFormData(profile);
                this.editingIndex = index;
            });
        });

        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const index = Number(button.getAttribute('data-index'));
                this.model.deleteTask(index);
                this.view.renderTaskList(this.model.getsTask());
                this.setupTaskActions();
            });
        });

        doneCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const index = Number(checkbox.getAttribute('data-index'));
                this.model.toggleTaskDone(index);
                this.view.renderTaskList(this.model.getsTask());
                this.setupTaskActions();
            });
        });
    }

    setupUndoRedoActions() {
        const undoButton = document.querySelector<HTMLButtonElement>('#undo-button');
        const redoButton = document.querySelector<HTMLButtonElement>('#redo-button');

        if (undoButton) {
            undoButton.addEventListener('click', () => {
                this.model.undo();
                this.view.renderTaskList(this.model.getsTask());
                this.setupTaskActions();
            });
        }

        if (redoButton) {
            redoButton.addEventListener('click', () => {
                this.model.redo();
                this.view.renderTaskList(this.model.getsTask());
                this.setupTaskActions();
            });
        }
    }
}
