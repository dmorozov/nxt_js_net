export interface ToDoItem {
  id: number;
  text: string;
  isComplete: boolean;
}

export type TodoListFilter = 'Show All' | 'Show Completed' | 'Show Uncompleted';
