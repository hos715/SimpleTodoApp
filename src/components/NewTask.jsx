import React from 'react';

const NewTask = ({ inputValue, setTask, addNewTask }) => {

   return (
      <form className="c-new-task" onSubmit={addNewTask}>
         <div className="c-new-task__col">
            <label className="c-new-task__label">کارتو بنویس
               <input type="text" className="c-new-task__input"
                  value={inputValue}
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