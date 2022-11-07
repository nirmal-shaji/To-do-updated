import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCircleCheck, faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';
import Title from './Components/Title.jsx';
import UpdateToDo from './Components/UpdateToDo.jsx';
import AddToDo from './Components/AddToDo.jsx';
import ToDoList from './Components/ToDoList.jsx'




function App() {
  //todolist state
  const [toDo, setToDo] = useState('');
  //temporary state for deletion and updation
  const [newTask, setNewTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');
 


 

  return (
    <div className="container App">
     
     <Title />
      {/* update task */}
      {updateTask && updateTask ? (
        <UpdateToDo updateTask={updateTask} setUpdateTask={setUpdateTask} setToDo={setToDo} toDo={toDo} />
          
      ):(
       
          <AddToDo toDo={toDo} setToDo={setToDo} newTask={newTask} setNewTask= {setNewTask} />
      )}
      
      
      {toDo && toDo.length ? '' : 'No tasks exist'}
      {toDo && toDo
        .sort((a,b)=>a.id>b.id ? 1:-1)
        .map((value, index) => {
        return (<ToDoList value={value} index={index} updateTask={updateTask} setUpdateTask={setUpdateTask} toDo={toDo} setToDo={setToDo} />);

      })}
    </div>
  );
}

export default App;
