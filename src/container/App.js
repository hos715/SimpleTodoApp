import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import NewTask from "../components/NewTask";
import Tasks from "../components/tasks";
import TodoContext from "../context/TodoContext";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const setTask = (event) => {
    let data = event.target.value;
    if (data.trim() !== "" || data.trim() !== " ") {
      setNewTask(data);
      console.log(data);
    }
  };

  const handleNewTask = (event) => {
    event.preventDefault();
    if (newTask.trim().length > 0) {
      const allTasks = [...tasks];
      const addnewTask = {
        id: Math.floor(Math.random() * 100),
        todo: newTask,
        completed: false,
      };
      allTasks.push(addnewTask);
      setTasks(allTasks);
      console.log(newTask);
      setNewTask("");
      console.log(tasks);
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
    console.log(todos);
    console.log(thisTodo);
  };

  const handleDeleteTodo = (id) => {
    const todos = [...tasks];
    const filtered = todos.filter((todo) => todo.id !== id);
    setTasks(filtered);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks:tasks,
        newTask: newTask,
        setTask: setTask,
        handleNewTask: handleNewTask,
        handleCheckTodo: handleCheckTodo,
        handleDeleteTodo: handleDeleteTodo,
      }}
    >
      <>
        <Tasks />
        {/* <Tasks
          todos={tasks}
          checkIt={handleCheckTodo}
          deleteIt={handleDeleteTodo}
        /> */}
        <NewTask
          setTask={setTask}
          inputValue={newTask}
          addNewTask={handleNewTask}
        />

        <ToastContainer />
      </>
    </TodoContext.Provider>
  );
};

export default App;
