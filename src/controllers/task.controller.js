import Task from '../models/Task'

export async function createTask(req, res) {
    try {
        const { name, done, projectid } = req.body
        const newTask = await Task.create({
            name,
            done,
            projectid
        });
        res.json(
            { message: 'new task created',
              data: newTask }, 
              { fields: ['name','done','projectid'] } )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export async function getTask(req, res) {
    try {
        const tasks =  await Task.findAll({
            attributes : ['id', 'projectid', 'name', 'done'],
            order:[
                ['id', 'DESC']
            ]
        });
        res.json({
            data: tasks
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export function updateTask(req, res) {
    
}

export async function deleteTask(req, res){
    try {
        const { id } = req.params;
        const deleteRowCount =  await Task.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Task Deleted succesfully',
            count: deleteRowCount,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export function getOneTask(req, res) {
    
}

export function getTaskByProject(req, res) {
    
}