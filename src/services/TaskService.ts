import { Task } from '../models/Task';
import { TaskStatus } from '../types';

export class TaskService {
  private readonly tasks: Task[] = [];

  // Criar uma nova tarefa
  createTask(title: string, description: string, dueDate: Date): Task {
    const newTask = new Task(
      this.tasks.length + 1, // ID
      title,
      description,
      dueDate
    );
    this.tasks.push(newTask);
    return newTask;
  }

  // Obter todas as tarefas
  getAllTasks(): Task[] {
    return this.tasks;
  }

  // Obter uma tarefa por ID
  getTaskById(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  // Atualizar o status de uma tarefa
  updateTaskStatus(id: number, newStatus: TaskStatus): Task | undefined {
    const task = this.getTaskById(id);
    if (task) {
      task.updateStatus(newStatus);
    }
    return task;
  }

  // Deletar uma tarefa
  deleteTask(id: number): boolean {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex > -1) {
      this.tasks.splice(taskIndex, 1);
      return true;
    }
    return false;
  }
}
