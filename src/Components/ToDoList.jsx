import React from 'react';

import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';


function ToDoList({ value, index, updateTask, setUpdateTask,toDo,setToDo }) {
    
  const deleteTask = (id) => {
   
    let newList = toDo.filter((value) => value.id !== id);
    
    setToDo(newList);
    
  }
  const taskDone = (id) => {
    let newList = toDo.map((value) => {
      if (value.id === id) {
        return ({...value, status: !value.status});
      }
      return(value)
    })
    setToDo(newList);
    
    
  }
 


   return(<React.Fragment key={value.id}  >
    <div className='col taskBg'>
      <div className={value.status ? 'done' : ''}>
        <span className="taskText">{index + 1}</span>
        <span className="taskText">{value.title}</span>
        <div className="iconsWrap">
          
          <span onClick={() => {
            taskDone(value.id);
          }} title="Completed / Not completed">
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
          {value.status ? null : (<span onClick={() => {
            
            setUpdateTask({
              id: value.id,
              title: value.title,
              status:value.status?true:false
            })
          } 
          } title="edit">
          <FontAwesomeIcon icon={faPen} />
          </span>) }
         
          <span onClick={() => { 
           deleteTask(value.id)
          } } title="delete">
          <FontAwesomeIcon icon={faTrashCan} />
          </span>

        </div>
      </div>
    </div>

  </React.Fragment>)
}


export default ToDoList