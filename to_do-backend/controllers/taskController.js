const {task} = require('../models/task')

//Create Task
async function createTask(req, res) {
    try {
        const tasks = req.body
        if (!tasks) {
            return res.status(400).json({ message: "Fill the task" })
        }
        const result = await task.create({
            taskName: tasks.taskName
        })
        console.log("Task:", result)
        return res.status(201).json({ message: "Created Successfully", data: result })
    }
    catch (e) {
        return res.status(500).json({ error: "Server Error" })
    }
}
//Get Task
async function getTask(req, res) {
    try {
        const allTasks = await task.find({})
        console.log(allTasks)
        return res.status(200).json(allTasks)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Server Error" })
    }
}
//Update Task
async function updateTask(req, res) {
    try {
        const taskUpdate = req.params.id
        const updatedTask=await task.findByIdAndUpdate(taskUpdate, req.body,{
            new:true //returns the updated data
        })
        if (!updatedTask) {
            return res.status(404).json({ message: "Task Not Found" })
        }
        console.log(updatedTask)
        return res.status(202).json({ message: "Updated Successfully", data: updatedTask })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Server Error" })
    }
}
//Delete Task
async function deleteTask(req, res) {
    try {
        const taskDelete = req.params.id
        const deletedTask=await task.findByIdAndDelete(taskDelete,{
            new:true //return the updated data
        })
        if (!deletedTask) {
            return res.status(404).json({ message: "Task Not Found" })
        }
        console.log(deletedTask)
        return res.status(202).json({ message: "Deleted Successfully", data: deletedTask })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Server Error" })
    }
}

module.exports = {
    createTask,
    getTask,
    updateTask,
    deleteTask
}