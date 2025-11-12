// import { useState } from "react"

// function App() {

//   const [todos, setTodos] = useState([])
//   const [value, setValue] = useState("")

//   function addTodo(){
//     if(!value.trim()){
//       setValue("")
//       return
//     }
//     setTodos([...todos, {id:Date.now(), text:value, completed:false}])
//     setValue("")

//   }
//   console.log(todos)

//   return (
//     <>
//      <h1>Todo App</h1>
//      <input type="text" value={value} placeholder="Enter a task" onChange={(e)=>setValue(e.target.value)} />
//      {/* {console.log(value)} */}
//      <button onClick={addTodo}>Add</button>
//      <ul>
//       {
//         (()=>{
//           let item = []
//           for(let i=0; i<todos.length; i++){
//             item.push(<li key={todos[i].id}>{todos[i].text}</li>)
//           }
//           return item
//         })()
//       }
//      </ul>
//     </>
//   )
// }

// export default App

//using map
// import { useState } from "react"

// function App() {

//   const [todos, setTodos] = useState([])
//   const [value, setValue] = useState("")

//   function addTodo(){
//     if(!value.trim()){
//       setValue("")
//       return
//     }
//     setTodos([...todos, {id:Date.now(), text:value, completed:false}])
//     setValue("")

//   }
//   console.log(todos)

//   return (
//     <>
//      <h1>Todo App</h1>
//      <input type="text" value={value} placeholder="Enter a task" onChange={(e)=>setValue(e.target.value)} />
//      {/* {console.log(value)} */}
//      <button onClick={addTodo}>Add</button>
//      <ul>
//       {
//         todos.map((item)=>(
//           <li key={item.id}>
//             {item.text}
//           </li>
//         ))
//       }
//      </ul>
//     </>
//   )
// }

// export default App

//seperate files

// import { useState } from "react"
// import TodoForm from "./components/TodoForm"
// import TodoList from "./components/TodoList"
// function App() {
//    const [todos, setTodos] = useState([])

//    function addTodo(text){
//     setTodos([...todos, {id:Date.now(), text, completed:false}])
//   }

//   return (
//     <>
//     <h1>Todo List</h1>
//     <TodoForm addTodo={addTodo}/>
//     <TodoList todos={todos}/>
//     </>
//   )
// }

//export default App

//Local Storage

import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  //const [todos, setTodos] = useState([])

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("task");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(todos));
  },[todos]);

  console.log(todos);

  function addTodo(text) {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
