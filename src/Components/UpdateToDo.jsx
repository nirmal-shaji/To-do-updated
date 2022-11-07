import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';







  


function UpdateToDo({updateTask,setUpdateTask,toDo,setToDo}) {
   
    const updateTasks = () => {
        let newList = toDo.filter((value) => {
          if (updateTask.id !== value.id) {
            return updateTask
          }
       
        });
        setToDo([...newList,updateTask]);
     
        setUpdateTask('');
      }
      const changeTask = (event) => {
        let newList = {
          id: updateTask.id,
          title: event.target.value,
          status: updateTask.status ? true : false
        } 
       
        setUpdateTask(newList);
      }

    return(<>
    <div className='row'>
    <div className='col'>
      <input onChange={(e) => {
       
        changeTask(e);
       
      }}  className='form-control form-control-lg' value={updateTask && updateTask.title}>

      </input>

    </div>
    <div className='col-auto'>
      <button onClick={
        updateTasks
      } className='btn btn-lg btn-success mr-20'>
      Update
      </button>
      <button onClick={() => {
      
        setUpdateTask('');
      }
        
      } className='btn btn-lg btn-warning '>
      Cancel
      </button>
      </div>
  </div>
      <br />
      </>)
    
}

export default UpdateToDo;