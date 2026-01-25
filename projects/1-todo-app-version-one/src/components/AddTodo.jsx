import { useState , useRef, useContext } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo(/*{ onNewItem }*/) {

  const {addNewItem} = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  /* const [todoName, setTodoName] = useState(``);
  const [dueDate, setDueDate] = useState(``); 

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  }; */

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate= dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    //onNewItem(todoName, dueDate);
    addNewItem(todoName, dueDate);
   /* setTodoName("");
    setDueDate(""); */
  };
  return (
    <div className="container text-center">
      <form className="row kg-row"
      onSubmit={handleAddButtonClicked}
      >
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            /* value={todoName} */
            /* onChange={handleNameChange} */
          />
        </div>
        <div className="col-4">
          <input type="date" 
          ref={dueDateElement}
           /* value={dueDate} onChange={handleDateChange} *//>
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success kg-button"
            /* onClick={()=> onNewItem(todoName,dueDate)} */
            /*onClick={handleAddButtonClicked}*/
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
