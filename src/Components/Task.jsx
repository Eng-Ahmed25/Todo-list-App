import React from 'react'
import TasksList from './TasksList'
import EditingTask from './EditingTask'
const Task = ({items , ondelete  ,handleComeleteitem, setItems , handleComeleteALL}) => {

  const handleEdit = (updatedValue, id) => {
    setItems((items) => 
      items.map((task) => 
        task.id === id ? { ...task, task: updatedValue, picked:false, isEditing: false } : task
      )
    );
  };


  const handleUpdateItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };
  
  return (
    
      <ul>
       {items.map((item) =>
        
       ( 
      
          item.isEditing ? 
          (
            <EditingTask  task={item} onddit={handleEdit} key={item.id} />
         )
          :
       (
         <TasksList handleComeleteALL={handleComeleteALL} handleComeleteitem={handleComeleteitem}  item={item} onupdateitems={handleUpdateItem} ondelete={ondelete} task={item.task} update={item.update} deletes ={item.delete} id = {item.id }key={item.id} pick={item.picked}/>
         )
       ))
       
       }
  
    </ul>
    
  )
}

export default Task