import React from 'react';

const SingleTask = ({ todo, checked, deleted, isCompleted }) => {
   return (
      <li className={`c-show-tasks__item ${isCompleted? "is-completed":""}`}>
         {isCompleted? (<del>{todo}</del>):(todo)}
         <div className="c-tasks-item__options">
            <button className="c-show-tasks__item--check" onClick={checked}>✔</button>
            <button className="c-show-tasks__item--delete" onClick={deleted}>🗑</button>
         </div>
      </li>
   );
}

export default SingleTask;