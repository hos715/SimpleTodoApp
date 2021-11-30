import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTask } from '../actions/task';
import { addNewTodo } from './../actions/tasks';

const NewTask = () => {


   const todo = useSelector(state => state.task);
   const dispatch = useDispatch();

   return (
      <form className="c-new-task" onSubmit={event => event.preventDefault()}>
         <div className="c-new-task__col">
            <label className="c-new-task__label">کارتو بنویس
               <input type="text" className="c-new-task__input"
                  value={todo}
                  onChange={event => dispatch(setTask(event))}
                  id="exampleInputEmail1" placeholder="کارتو بنویس" />
            </label>
         </div>
         <button type="submit" className="c-new-task__submit" onClick={() => dispatch(addNewTodo(todo))} >
            +
         </button>
      </form>
   );
}

export default NewTask;