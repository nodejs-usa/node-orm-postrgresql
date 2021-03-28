import { Router  } from 'express';
const router = Router();

import { createProject, getProject, getOneProject, deleteProject, updateProject } from '../controllers/project.controller'

// /api/projects/
router.post('/',createProject );
router.get('/',getProject );

// /api/projects/:projectId
// Give me one Project
router.get('/:id',getOneProject );
// Delete
router.delete('/:id',deleteProject);
// Update
router.put('/:id',updateProject);

export default router;