"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, title, description, dueDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = 'pending'; // A tarefa começa com o status "pending"
    }
    // Método para atualizar o status da tarefa
    updateStatus(newStatus) {
        this.status = newStatus;
    }
    // Método para obter os detalhes da tarefa
    getDetails() {
        return `Tarefa ${this.title} - Status: ${this.status} - Prazo: ${this.dueDate.toISOString()}.`;
    }
}
exports.Task = Task;
