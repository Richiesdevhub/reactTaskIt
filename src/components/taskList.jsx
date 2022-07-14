import React, { useState } from 'react';
import TaskForm from './taskForm';
import Task from './task';
import '../stylesheets/taskList.css';

function TaskList() {

  const [tasks, setTasks] = useState([]);
  const [reports, setReports] = useState([]);

  const addTask = task => {
    console.log(task.text.trim());
    task.text=task.text.trim();
    const updatedTask =[task, ...tasks]
    console.log(tasks);
    setTasks(updatedTask);
  }

  const deleteTask = (position) => {
    console.log(position);
    const updateTasks = tasks.filter((task, index)=>index!==position)
    setTasks(updateTasks)
  }

  const createReport = () => {
   
  }
  const completeTask = () => {
   
  }
  
  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-container'>
        {
          tasks.map((task, position) =>
            <Task
              position={position}
              text={task.text}
              deleteTask={deleteTask}
              createReport={createReport}
            />
          ) 
        }
      </div>
    </>
  );    
}

export default TaskList;