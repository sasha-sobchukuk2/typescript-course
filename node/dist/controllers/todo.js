"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_1 = require("../models/todo");
var TODOS = [];
exports.createTodo = function (req, res) {
    console.log('22222');
    var text = req.body.text;
    var newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'created the todo ', createdTodo: newTodo });
};
exports.getTodos = (function (req, res) {
    res.json({ todos: TODOS });
});
exports.updateTodo = (function (req, res) {
    var dotoId = req.params.id;
    var updateText = req.body.text;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === dotoId; });
    if (todoIndex < 0) {
        throw new Error('could not find todo!');
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updateText);
    res.json({ message: 'updated', updatedTodo: TODOS[todoIndex] });
});
exports.deleteTodo = (function (req, res) {
    var dotoId = req.params.id;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === dotoId; });
    if (todoIndex < 0) {
        throw new Error('could not find todo!');
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: 'todo was deleted' });
});
