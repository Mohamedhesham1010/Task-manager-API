
const task = require('../models/task.js')
const asyncWrapper = require("../middleware/async")

const getAllTasks = asyncWrapper(async(req,res)=>{
        const tasks = await task.find({});
        res.status(201).json(tasks);
}
)
const getTask = asyncWrapper(async(req,res)=>{
    // const {id:Taskid} = req.params.id
        const SingleTask = await task.findOne({_id: req.params.id});
        if(!SingleTask)
        {
            return res.status(404).json({msg:`no task with this given ${req.params.id}`})
        }
        res.status(201).json(SingleTask);
    
    }
)
const createTask = asyncWrapper(async(req,res)=>{
   // res.send(req.body)
                     const Task = await task.create(req.body);
    res.status(201).json(Task);

}
)
const updateTask = asyncWrapper(async(req,res)=>{

            const Task = await task.findOneAndUpdate({_id: req.params.id},req.body,{
                runValidators:true,
                new:true
            });
            if(!Task)
            {
                return res.status(404).json({msg:`no task with this given ${req.params.id}`})
            }
            res.status(201).json(Task);
       

}
)
const deleteTask = asyncWrapper(async(req,res)=>{
   
        // const {id:Taskid} = req.params.id
            const DeleteTask = await task.findOneAndDelete({_id: req.params.id});
            if(!DeleteTask)
            {
                return res.status(404).json({msg:`no task with this given ${req.params.id}`})
            }
            res.status(201).json(DeleteTask);
        
}
)

module.exports = {
    getAllTasks,getTask,createTask,updateTask,deleteTask
}