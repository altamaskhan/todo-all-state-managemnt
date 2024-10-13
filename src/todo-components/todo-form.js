import { useState } from "react";

export function TodoForm1({addTodoItem}){

    const [ item , setItem] = useState("");
    const [ userName , setuserName] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        addTodoItem( { item, userName });
    }

    return <div>
        <center>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Todo" value={item} onChange={ (e)=> setItem(e.target.value)}/>
                <input type="text" placeholder="Your Name" value={userName} onChange={ (e)=> setuserName(e.target.value)}/> 
                <br/>
                <button>Submit</button>
            </form>
        </center>
    </div>
}



export function TodoForm2(){
    return <h1>Todo Form 2</h1>
}