import express, { json } from 'express';
import morgan from 'morgan';


// Importing Routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

// Initialization
const app = express();

// middleware
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);

export default app;