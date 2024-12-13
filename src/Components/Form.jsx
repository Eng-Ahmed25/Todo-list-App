import React, { useState } from 'react'
import Task from "./Task"
 

const Form = ({onAddItems , items , ondelete , onUpdateItems , setItems , handleComeleteitem , handleComeleteALL}) => {
  const [task , setTask] = useState("")
  const x = items.length > 0
 
  const handleInput = (e) => {
    setTask(e.target.value); // No need to return this
  };
  const handleSubmit = (e)=>
  {
     e.preventDefault()
    if(task === "") return
    
    const newtask = {
      task , 
      update : <i class="fa-solid fa-pen-to-square"></i>,
      delete :  <i class="fa-solid fa-trash"></i> , 
      id: Date.now() , 
      picked : false , 
      isEditing : false
    }
    onAddItems(newtask)
    setTask("")
  }
 
 
  return (
    <div className='app'> 
        <form onSubmit={handleSubmit}>
            <div className='main'>
                <h2>Get Things Done !</h2>            
                <div className='input-field'>
                    <input type="text"  value={task} onChange={handleInput} placeholder='What is the task today?'  />
                    <button>Add task</button>
                 </div>
            </div>
            {x ?  <Task handleComeleteALL={handleComeleteALL} setItems={setItems}  ondelete={ondelete} handleComeleteitem={handleComeleteitem} items={items} onUpdateItems={onUpdateItems} /> :
              
            (
              <div className='no-tasks'>
              <p >No Tasks To Show</p>
              </div>
            )
            }
        </form>
      
    </div>
  )
}

export default Form