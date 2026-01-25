import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

  function TodoItem( { todoName, todoDate /*, onDeleteClick */} ) {

    const { deleteItem } = useContext(TodoItemsContext);

  let item='Buy Milk';
  let date='4/10/2023';
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            {todoName}
          </div>
          <div className="col-4">
            {todoDate}
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger"
            onClick={()=> deleteItem(todoName)}
            >Delete</button>
          </div>
        </div>
      </div>

    </>

  )
}

export default TodoItem;