import logo from './logo.svg';
import './App.css';
import { TodoForm1 , TodoForm2 }  from "./todo-components/todo-form";
import TodoList from "./todo-components/todo-list"
import { useState } from 'react';

function App() {

  const [todoList , setTodoList] = useState([
    {
      id: 1 , item : "First Todo work"
    },
    {
      id: 2 , item : "Second Todo work"
    }
  ]);

  const addTodoItem = (todoItem)=> {
    setTodoList([ ...todoList ,   { ...todoItem , id : todoList.length + 1  } ])  ;
  }

  
  return (
    <>
      <TodoForm1 addTodoItem={addTodoItem} />
      <hr/>
      <TodoList todoList={ todoList }/> 
    </>
  );
}

export default App;
