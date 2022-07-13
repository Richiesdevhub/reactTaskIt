import './App.css';
import Task from './components/task.jsx'
import TaskList from './components/taskList';
function App() {
  return (

    <div className='app-task'>
      
      <div className='task-list-main'>
        <h1>Tareas pendientes</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
