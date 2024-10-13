const TodoList =  function( { todoList } ){
    const displayTodoList = todoList.map((todo) => {
        return <li key={ todo.id}> {todo.item} </li>
    })
    
    return <>{displayTodoList}</>
}

export default TodoList;