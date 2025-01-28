"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const Task_1 = require("../models/Task");
class TaskService {
    constructor() {
        this.tasks = [];
    }
    // Criar uma nova tarefa
    createTask(title, description, dueDate) {
        const newTask = new Task_1.Task(this.tasks.length + 1, // ID
        title, description, dueDate);
        this.tasks.push(newTask);
        return newTask;
    }
    // Obter todas as tarefas
    getAllTasks() {
        return this.tasks;
    }
    // Obter uma tarefa por ID
    getTaskById(id) {
        return this.tasks.find((task) => task.id === id);
    }
    // Atualizar o status de uma tarefa
    updateTaskStatus(id, newStatus) {
        const task = this.getTaskById(id);
        if (task) {
            task.updateStatus(newStatus);
        }
        return task;
    }
    // Deletar uma tarefa
    deleteTask(id) {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);
        if (taskIndex > -1) {
            this.tasks.splice(taskIndex, 1);
            return true;
        }
        return false;
    }
}
exports.TaskService = TaskService;
