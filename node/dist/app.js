"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
var express_1 = __importDefault(require("express"));
var todo_1 = __importDefault(require("./routes/todo"));
var body_parser_1 = require("body-parser");
var app = express_1.default();
app.use(body_parser_1.json());
app.use('/todos', todo_1.default);
app.use(function (err, req, res, next) {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
