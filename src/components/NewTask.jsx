import React, { useContext } from 'react';
import TodoContext from './../context/TodoContext';

const NewTask = () => {

   const context = useContext(TodoContext);

   const { setTask, newTask, handleNewTask } = context;

   return (
      <form className="c-new-task" onSubmit={handleNewTask}>
         <div className="c-new-task__col">
            <label className="c-new-task__label">کارتو بنویس
               <input type="text" className="c-new-task__input"
                  value={newTask}
                  onChange={event => setTask(event)}
                  id="exampleInputEmail1" placeholder="کارتو بنویس" />
            </label>
         </div>
         <button type="submit" className="c-new-task__submit" >
            +
         </button>
      </form>
   );
}

export default NewTask;