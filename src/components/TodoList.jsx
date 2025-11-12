import React from 'react'

const TodoList = ({todos , delToDo}) => {
  
  return (
    <ul>
        {todos.map((item)=>(
          <li key={item.id}>
            {item.text}
            <button onClick={() => delToDo(item.id)}>DEL</button>
          </li>
        ))}
    </ul>
  )
}

export default TodoList