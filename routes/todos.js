const express= require("express");

const router= express.Router();

const {createTodo}= require('../controller/createTodo');
const { getAllTodos, getTodo } = require("../controller/getTodo");
const {updateTodo}= require("../controller/updateTodo");
const { deleteTodo } = require("../controller/deleteTodo");

router.post('/createtodo', createTodo);
router.get('/gettodos', getAllTodos);
router.get('/gettodo/:id', getTodo);
router.put('/updatetodo/:id', updateTodo);
router.delete('/deletetodo/:id', deleteTodo);

module.exports= router;