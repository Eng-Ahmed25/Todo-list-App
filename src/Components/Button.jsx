import React from 'react'
import "../App.css"
const Button = ({main , btn , ondeleteAll , combtn , onCompelete}) => {
  return (
    
    <div className={main}>
    <button onClick={ondeleteAll} className={btn}>Delete All</button>
    <button onClick={onCompelete} className={combtn}>Complete All</button>
    </div>
  )
}

export default Button