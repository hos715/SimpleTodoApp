import React, { useContext } from 'react';

import SingleTask from './SingleTask';

import TodoContext from './../context/TodoContext';

const Tasks = () => {

   const context = useContext(TodoContext);
   const { tasks:todos, handleCheckTodo, handleDeleteTodo } = context;
   return (
      <ul className="c-show-tasks">
         {todos.length > 0 ? (
            todos.map(task => (
               <SingleTask key={task.id} todo={task.todo}
                  checked={() => handleCheckTodo(task.id)}
                  deleted={() => handleDeleteTodo(task.id)}
                  isCompleted={task.completed} />
            ))
         ) : (
            <p className="c-show-tasks__empty">
               هیچی ننوشتی هنوز که
            </p>
         )}
      </ul>
   );
}

export default Tasks;