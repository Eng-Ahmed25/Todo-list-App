import React from 'react'
import '../App.css'
const TasksList = ({task , update , deletes , ondelete , id , item ,handleComeleteitem, onupdateitems}) => {
  return (
       <li onClick={()=>handleComeleteitem(id)}>
        <p className={item.picked ? 'line-throught' : ''}>{task}</p>
        <div className='icons'>
        <p onClick={()=> onupdateitems(id)}>{update}</p>
        <p onClick={() => ondelete(id)}>{deletes}</p>
        </div>
  
        </li>
  
  )
}

export default TasksList