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

export const getTasksInitialState = (): TaskState => {
  return {
    todos: [],
    length: 0,
    completedTodos: 0,
    pendingTodos: 0
  };
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
