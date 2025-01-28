import { TaskStatus } from '../types';

export class Task {
  status: TaskStatus;

  constructor(
    public id: number,
    public title: string,
    public description: string,
    public dueDate: Date
  ) {
    this.status = 'pending'; // A tarefa começa com o status "pending"
  }

  // Método para atualizar o status da tarefa
  updateStatus(newStatus: TaskStatus): void {
    this.status = newStatus;
  }

  // Método para obter os detalhes da tarefa
  getDetails(): string {
    return `Tarefa ${this.title} - Status: ${
      this.status
    } - Prazo: ${this.dueDate.toISOString()}.`;
  }
}
