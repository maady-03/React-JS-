import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

/* const TododItems= function({todoItems,onDeleteClick}){*/
const TodoItems = function (/*{ onDeleteClick }*/) {


  /*const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;*/ 
  const { todoItems } = useContext(TodoItemsContext);
  // both the above are same only thing is that we have destructured the objects
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          /* onDeleteClick={onDeleteClick} */
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
