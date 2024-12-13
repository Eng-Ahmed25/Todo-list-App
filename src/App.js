import Form from './Components/Form'
import React, { useState }  from 'react'
import Button from './Components/Button'
 import './App.css'


 const App = () => {
 
  const [items , setItems] = useState([])

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  
  function handleDeleteItemss(seleted) {
    setItems((items) =>  items.filter((item)=>(
             item.id !== seleted
    )));
  }
  function handleDeleteitem() {
    setItems([])
  }
  function handleComeleteitem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, picked: !item.picked } : item
      )
    );
  }
  function handleComeleteALL() {
    setItems((items) =>
      items.map((item) => ({
        ...item, 
        picked: !item.picked // Toggle picked for each item
      }))
    );
  }
  
 

   return (
     <div>
      <Form setItems={setItems} handleComeleteitem={handleComeleteitem} handleComeleteALL={handleComeleteALL} onAddItems = {handleAddItems} ondelete={handleDeleteItemss}  items={items}/>
      {items.length > 0 && <Button onCompelete={handleComeleteALL} combtn='update-btn' ondeleteAll ={handleDeleteitem} main='delelte' btn='delete-btn'/>}    
    
    </div>
   )
 }
 
 export default App