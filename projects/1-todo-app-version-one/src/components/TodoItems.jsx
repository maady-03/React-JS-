import TodoItem from "./TodoItem"

const TododItems= function({todoItems}){
    return(
        <div className="item-container">
            {todoItems.map((item) =>(
                <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
            ))}
        </div>
    )
}

export default TododItems;