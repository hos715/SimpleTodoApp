import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
export const addNewTodo = (todo) => {
   return async (dispatch, getState) => {
      
      if (todo.trim().length > 0) {
         const allTasks = [...getState().tasks];
         const addnewTask = {
            id: uuidv4(),
            todo,
            completed: false,
         };
         allTasks.push(addnewTask);
         await dispatch({type: 'SET_TODO', payload: ""});
         await dispatch({type: 'ADD_TODO', payload: allTasks});
         toast.success("تسک جدید با موفقیت اضافه شد")
      } else {
         toast.warn("ورودی خالیست");
      }
   }
}
export const checkTodo = (todoId) => {
   return async (dispatch, getState) => {
      const todos = [...getState().tasks];
      let todoIndex = todos.findIndex((todo) => todo.id === todoId);
      const thisTodo = todos[todoIndex];
      thisTodo.completed = !thisTodo.completed;
      todos[todoIndex] = thisTodo;
      await dispatch({type: 'CHECK_TODO', payload: todos});
      toast.success("تسک مورد نظر ویرایش شد");
   }
}

export const deleteTodo = (todoId) => {
   return async (dispatch,getState) => {
      const todos = [...getState().tasks];
      const filtered = todos.filter((todo) => todo.id !== todoId);
      await dispatch({type: 'DELETE_TODO', payload: filtered});
      toast.success("تسک با موفقیت حذف گردید");
   }
}