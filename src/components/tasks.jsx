import React from 'react';
import SingleTask from './SingleTask';

const Tasks = ({ todos, checkIt, deleteIt }) => {
   return (
      <ul className="c-show-tasks">
         {todos.length > 0 ? (
            todos.map(task => (
               <SingleTask key={task.id} todo={task.todo}
                  checked={() => checkIt(task.id)}
                  deleted={() => deleteIt(task.id)}
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