import React from "react";
import '../stylesheets/task.css'
import {useState} from 'react'
import Report from "./report";

function Task({text, deleteTask, position, createReport, reportText}){

  return(
    <div className='task-container'>
      <div className='task-header'>
        <div className='task-text' >
      {text}
        </div>
        <div className='task-container-icon report-button'
      onClick={()=> createReport(position)}
        >
        Reporte
        </div>
        <div className='task-container-icon delete-button'
      onClick={()=> deleteTask(position)}
        >
        Eliminar
        </div>
      </div>
      <div className='task-reports'>
        <Report 
        reportText={'Poniendo reporte'}
        />
        <Report 
        reportText={'Poniendo reporte'}
        />
        <Report
        reportText={'Poniendo reporte'}
        />
      </div>
           
    </div>
  )
}

export default Task;