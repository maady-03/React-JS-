import './App.css'
import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'
import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import { TodoItemsContext } from './store/todo-items-store'


function App() {


  const initialTodoItems= [
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

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  /* const onNewItem = (itemName, itemDueDate) =>{
   setTodoItems([...todoItems, {name: itemName, dueDate: itemDueDate}]);
  } */ /* The above shit is absolutely ok but we have 
   a more optimal and will reduce the chances of giving an error */

   const addNewItem = (itemName, itemDueDate) =>{

    setTodoItems((currValues)=>{
      const newTodoItems = [
        ...currValues,
        {name: itemName, dueDate: itemDueDate}
      ];
      return newTodoItems;
    });
   };

  const deleteItem= (todoItemName)=>{
    /*filter method*/
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item deleted: ${todoItemName}`);
  }

  return (
    <TodoItemsContext.Provider value={{
      todoItems: todoItems,
      addNewItem: addNewItem,
      deleteItem: deleteItem
      }}>
    <center
      className='todo-container'>
      <AppName></AppName>

      <AddTodo /*addNewItem={addNewItem}*/></AddTodo>

      <WelcomeMessage /*todoItems={todoItems}*/></WelcomeMessage>

      <TodoItems /*todoItems={todoItems} onDeleteClick={deleteItem}*/></TodoItems>
    </center>
    </TodoItemsContext.Provider>
  )
}

export default App
