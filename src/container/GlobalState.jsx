import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

import TodoContext from "../context/TodoContext";

const GlobalState = ({ children }) => {
   const [newTask, setNewTask] = useState("");
   const [tasks, setTasks] = useState([]);

   const setTask = (event) => {
      let data = event.target.value;
      if (data.trim() !== "" || data.trim() !== " ") {
         setNewTask(data);
      }
   };

   const handleNewTask = (event) => {
      event.preventDefault();
      if (newTask.trim().length > 0) {
         const allTasks = [...tasks];
         const addnewTask = {
            id: uuidv4(),
            todo: newTask,
            completed: false,
         };
         allTasks.push(addnewTask);
         setTasks(allTasks);
         setNewTask("");
         toast.success("تسک جدید با موفقیت اضافه شد")
      } else {
         toast.warn("ورودی خالیست");
      }
   };

   const handleCheckTodo = (id) => {
      const todos = [...tasks];
      let todoIndex = todos.findIndex((t) => t.id === id);
      const thisTodo = todos[todoIndex];
      thisTodo.completed = !thisTodo.completed;
      todos[todoIndex] = thisTodo;
      setTasks(todos);
   };

   const handleDeleteTodo = (id) => {
      const todos = [...tasks];
      const filtered = todos.filter((todo) => todo.id !== id);
      setTasks(filtered);
      toast.success("تسک با موفقیت حذف گردید");
   };

   return (
      <TodoContext.Provider
         value={{
            tasks: tasks,
            newTask: newTask,
            setTask: setTask,
            handleNewTask: handleNewTask,
            handleCheckTodo: handleCheckTodo,
            handleDeleteTodo: handleDeleteTodo,
         }}
      >
         <>
            {children}
            <ToastContainer />
         </>
      </TodoContext.Provider>

   );
}

export default GlobalState;