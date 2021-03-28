import { Router  } from 'express';
const router = Router();

import { createTask, getTask, deleteTask} from '../controllers/task.controller'

// /api/tasks/
router.post('/',createTask );
router.get('/',getTask );

router.delete('/:id',deleteTask);


export default router;