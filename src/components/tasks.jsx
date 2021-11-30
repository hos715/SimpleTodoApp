import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkTodo } from '../actions/tasks';

import SingleTask from './SingleTask';

import { deleteTodo } from './../actions/tasks';

const Tasks = () => {

   const todos = useSelector(state => state.tasks);
   const dispatch = useDispatch();

   return (
      <ul className="c-show-tasks">
         {todos.length > 0 ? (
            todos.map(task => (
               <SingleTask key={task.id} todo={task.todo}
                  checked={() => dispatch(checkTodo(task.id))}
                  deleted={() => dispatch(deleteTodo(task.id))}
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