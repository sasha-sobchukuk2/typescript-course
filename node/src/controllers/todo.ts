import {Request,Response,NextFunction,RequestHandler} from "express";
import {Todo } from "../models/todo";
import todo from "../routes/todo";

const TODOS: Todo[] = [];

export const createTodo:RequestHandler = (req, res)=>{
        console.log('22222')
       const text = (req.body as {text:string}).text;

        const newTodo = new Todo(Math.random().toString(),text)
        TODOS.push(newTodo)
        res.status(201).json({message:'created the todo ',createdTodo:newTodo})
}

export const getTodos:RequestHandler = ((req, res) => {
         res.json({todos:TODOS})
})

export const updateTodo:RequestHandler<{id:string}>=((req,res)=>{
        const dotoId = req.params.id;

        const updateText = (req.body as {text:string}).text

        const todoIndex = TODOS.findIndex(todo=>todo.id===dotoId)
        if(todoIndex <0){
                throw  new Error('could not find todo!');
        }
        TODOS[todoIndex] =  new Todo(TODOS[todoIndex].id, updateText);
        res.json({message:'updated', updatedTodo:TODOS[todoIndex]})
})

export const deleteTodo:RequestHandler = ((req, res) => {
        const dotoId = req.params.id;

        const todoIndex = TODOS.findIndex(todo=>todo.id===dotoId)
        if(todoIndex <0){
                throw  new Error('could not find todo!');
        }
        TODOS.splice(todoIndex ,1)
        res.json({message:'todo was deleted'})
})