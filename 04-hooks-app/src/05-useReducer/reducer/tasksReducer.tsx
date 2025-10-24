import * as z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completedTodos: number;
  pendingTodos: number;
}

export type TaskAction =
| { type: 'ADD_TODO'; payload: string }
| { type: 'TOGGLE_TODO'; payload: number }
| { type: 'DELETE_TODO'; payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean()
});

const TaskStateSchema = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completedTodos: z.number(),
  pendingTodos: z.number()
});

export const getTasksInitialState = (): TaskState => {
  const defaultState = {
    todos: [],
    length: 0,
    completedTodos: 0,
    pendingTodos: 0
  };
  const localStorageState = localStorage.getItem('tasks-state');

  if (!localStorageState) {
    return defaultState;
  }

  const validation = TaskStateSchema.safeParse(JSON.parse(localStorageState));

  if (validation.error) {
    return defaultState;
  }

  return JSON.parse(localStorageState);
};

export const tasksReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch(action.type) {
    case 'ADD_TODO': {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.trim(),
        completed: false
      };

      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pendingTodos: state.pendingTodos + 1
      };
    }

    case 'TOGGLE_TODO': {
      const updatedTodos = state.todos.map(todo => {
        if (todo.id !== action.payload) return todo;

        return {
          ...todo,
          completed: !todo.completed
        };
      });

      const completedTodos = updatedTodos.filter(todo => todo.completed === true);
      const pendingTodos = updatedTodos.filter(todo => todo.completed === false);

      return {
        ...state,
        todos: updatedTodos,
        completedTodos: completedTodos.length,
        pendingTodos: pendingTodos.length
      };
    }

    case 'DELETE_TODO': {
      const updatedTodos = state.todos.filter(todo => todo.id !== action.payload);

      const completedTodos = updatedTodos.filter(todo => todo.completed === true);
      const pendingTodos = updatedTodos.filter(todo => todo.completed === false);

      return {
        ...state,
        todos: updatedTodos,
        length: updatedTodos.length,
        completedTodos: completedTodos.length,
        pendingTodos: pendingTodos.length
      };
    }

    default:
      return state;
  }
};
