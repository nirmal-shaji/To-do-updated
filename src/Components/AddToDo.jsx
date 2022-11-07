import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';




function AddToDo({toDo,setToDo,newTask,setNewTask}) {

       
  const addTask= () => {
    if (newTask) {
      let num = toDo.length + 1;
      console.log(num);
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  }

return(<>
        {/* add task */}
      <div className='row'>
        <div className='col'>
          <input value={newTask} onChange={(e) => {
            setNewTask(e.target.value)
          }} className='form-control form-control-lg'>

          </input>

        </div>
        <div className='col-auto'>
          <button onClick={addTask} className='btn btn-lg btn-success'>
            Add Task
          </button>
        </div>
      </div>
            <br />
            </> )
    
}



export default AddToDo;