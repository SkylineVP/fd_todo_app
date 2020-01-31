import express from 'express';
import {getTask, createTask} from '../controllers/task.controller.js';


const taskRouter = express.Router();

taskRouter.post('/', createTask);
/*
 * only owner
 * */
taskRouter.get('/:taskId', getTask);
/*
 * only owner
 * */
taskRouter.patch( '/:taskId', );
/*
 * only owner
 * */
taskRouter.delete( '/:taskId', );

export default taskRouter;

