import React from 'react';


interface ToDoListProps{
    items:{id:string,text:string}[]
    deleteHandler:(todoId:string)=>void
}

const ToDoList:React.FC<ToDoListProps> = (props) => {

    return (
        <ul>
            {props.items.map(todo=>(
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={()=>props.deleteHandler(todo.id)}>delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ToDoList