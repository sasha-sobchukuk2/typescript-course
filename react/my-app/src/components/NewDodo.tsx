import React,{useRef} from 'react';


interface NewDodoProps {
    todoAddHandler:(text:string)=>void
}

const NewDodo:React.FC<NewDodoProps> = ({todoAddHandler}) => {
    const textInputRef = useRef<HTMLInputElement>(null)

    const todoSubmitHandler   = (event:React.FormEvent)=>{
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        todoAddHandler(enteredText)
    }



    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-tex">
                    <input type="text" id='todo-text' ref={textInputRef}/>
                </label>
            </div>
            <button  type='submit'>add todo</button>
        </form>
    );
};

export default NewDodo;