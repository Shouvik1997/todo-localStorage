import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  function handleTodo(){
    if(!value){
        setValue("")
        return
    }
    addTodo(value)
    setValue("")
  }
  return (
    <div>
     <input type="text" value={value} placeholder="Enter a task" onChange={(e)=>setValue(e.target.value)} />
     <button onClick={handleTodo}>Add</button>
    </div>
  )
}

export default TodoForm