import './App.css'
import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'


function App() {


  const todoItems= [
    { 
      name: "Buy Milk",
       dueDate: "1/10/25",
    }  
    , 
    
    { 
      name: "Go to College",
       dueDate: "1/10/25",
    },

    {
      name: "Watch TV",
      dueDate: "1/10/25", 
    }
  ];


  return (
    <center
      className='todo-container'>
      <AppName></AppName>

      <AddTodo></AddTodo>

      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  )
}

export default App
