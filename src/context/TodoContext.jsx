import { createContext } from 'react';

const TodoContext = createContext({
   tasks: [],
   setTask: [],
   newTask: "",
   handleCheckTodo: () => { },
   handleDeleteTodo: () => { },
   handleNewTask: () => { },
});

export default TodoContext;