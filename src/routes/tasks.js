import { Router  } from 'express';
const router = Router();

import { createTask, getTask } from '../controllers/task.controller'

// /api/tasks/
router.post('/',createTask );
router.get('/',getTask );

export default router;