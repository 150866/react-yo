import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Купити хліб'},
    {id: 2, completed: false, title: 'Купити масло'},
    {id: 3, completed: false, title: 'Купити молоко'}

  ])
  

 function toggleTodo(id) {
   setTodos(
     todos.map(todo => {
       if (todo.id === id) {
          todo.completed = !todo.completed
       }
       return todo
     })
   )
 }

  return (
    <div className='wrapper'>
      <h1>React tutorial</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
       
  ); 
}

export default App;
 