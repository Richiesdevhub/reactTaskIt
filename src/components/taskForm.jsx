import React from "react";
import {useState} from 'react'
import '../stylesheets/taskForm.css'

function TaskForm(props){
  
  const[input, setInput]=useState('');
  
  const handleChange = e =>{
    setInput(e.target.value); 
  }
  
  const handleSend = e =>{
    e.preventDefault()
    const sendTask ={
      text: input
    }
    console.log(sendTask);
    props.onSubmit(sendTask)
  }
  
  return(
    <form className="task-form" onSubmit={handleSend}>
      <input 
        className='task-input'
        type='text'
        placeholder='Write a task'
        name='text'
        onChange={handleChange}
        />
      <button className='task-button'>
        Agregar tarea
      </button>
    </form>
  )
}

export default TaskForm;