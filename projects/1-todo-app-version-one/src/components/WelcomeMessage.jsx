import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function WelcomeMessage(/*{ todoItems }*/) {
  /*const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;*/
    const { todoItems } = useContext(TodoItemsContext);
    // both the above are same only thing is that we have destructured the objects
  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}>Enjoy Your Day Bitch</p>
    )
  );
}

export default WelcomeMessage;
