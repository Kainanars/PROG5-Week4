"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskService_1 = require("./services/TaskService");
// Criando uma instância do serviço de tarefas
const taskService = new TaskService_1.TaskService();
// Criando tarefas
const task1 = taskService.createTask('Desenvolver Capstone PROG5', 'Estudar conceitos básicos de TypeScript para implementar o Capstone PROG5', new Date('2025-01-29'));
const task2 = taskService.createTask('Fazer exercício de POO', 'Criar um exemplo de CRUD utilizando POO', new Date('2025-01-28'));
// Atualizando o status de uma tarefa
taskService.updateTaskStatus(task2.id, 'in-progress');
// Deletando uma tarefa
taskService.deleteTask(task1.id);
// Exibindo todas as tarefas
console.log('Tarefas restantes:');
taskService.getAllTasks().forEach((task) => console.log(task.getDetails()));
// Tentando obter uma tarefa deletada
console.log('Tarefa deletada:', taskService.getTaskById(task1.id));
