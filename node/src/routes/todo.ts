import {Router} from 'express'

import {createTodo, getTodos,updateTodo} from "../controllers/todo";

const router = Router();

router.post('/',createTodo)
router.get('/',getTodos)
router.patch('/:id',updateTodo)
router.delete('/:id')

export default router


