export class TaskModel {
    private task: {
        task: string; 
        description: string;
        done: boolean;
    }[] = [];

    private history: { task: string; description: string; done: boolean }[][] = [];
    private historyPointer: number = -1;

    addTask(task: string, description: string) {
        this.saveToHistory();
        this.task.push({ task, description, done: false });
        this.saveToLocalStorage();
    }

    updateTask(index: number, updatedTask: { task: string; description: string ; done: boolean}) {
        this.saveToHistory();
        this.task[index] = { ...this.task[index], ...updatedTask };
        this.saveToLocalStorage();
    }

    deleteTask(index: number) {
        this.saveToHistory();
        this.task.splice(index, 1);
        this.saveToLocalStorage();
    }

    toggleTaskDone(index: number) {
        this.saveToHistory();
        this.task[index].done = !this.task[index].done;
        this.saveToLocalStorage();
    }

    undo() {
        if (this.historyPointer > 0) {
            this.historyPointer--;
            this.task = [...this.history[this.historyPointer]];
            this.saveToLocalStorage();
        }
    }

    redo() {
        if (this.historyPointer < this.history.length - 1) {
            this.historyPointer++;
            this.task = [...this.history[this.historyPointer]];
            this.saveToLocalStorage();
        }
    }

    private saveToHistory() {
        const currentTaskState = JSON.parse(JSON.stringify(this.task));
        this.history = this.history.slice(0, this.historyPointer + 1);
        this.history.push(currentTaskState);
        this.historyPointer++;
    }

    getsTask() {
        return this.task;
    }

    private saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.task));
    }

    loadFromLocalStorage() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            this.task = JSON.parse(storedTasks);
        }
    }
}
