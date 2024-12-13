import React, { useState } from 'react';

const EditingTask = ({ task, onddit }) => {
  const [value, setvalue] = useState(task.task); // Set initial input value

  const handleInput = (e) => {
    setvalue(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onddit(value, task.id); // Call onedit to update the task
  };

  return (
    <div>
      <div className='main'>        
        <div className='input-field'>
          <input 
            type="text"  
            value={value} 
            onChange={handleInput} 
            placeholder='Update Your Task' 
          />
          <button onClick={handleUpdate}>Update task</button> 
          {/* ⬆️ Removed the form and added onClick instead of onSubmit */}
        </div>
      </div>
    </div>
  );
};

export default EditingTask;
