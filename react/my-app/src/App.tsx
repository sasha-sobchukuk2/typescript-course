import React, {useCallback} from 'react';
import './App.css';
import ToDoList from "./components/ToDoList";
import NewDodo from "./components/NewDodo";
import {useState} from "react";

interface todo {
    id:string;
    text:string
}

function App() {

    const [todos,setTodos]= useState<todo[]>([])

    const todoAddHandler = (text:string)=>{
        setTodos((prevTodo)=>[
            ...prevTodo,
            {id:Math.random().toString(),text,}
        ])
        console.log(text)
    }
    const deleteHandler = useCallback((todoId:string) => {
      setTodos((prev)=>[...prev.filter(todo=>todo.id !==todoId)])
    },[])
    return (
        <div className="App">
            <NewDodo todoAddHandler={todoAddHandler} />
            <ToDoList deleteHandler={deleteHandler} items={todos}/>
        </div>
    );
}

export default App;
