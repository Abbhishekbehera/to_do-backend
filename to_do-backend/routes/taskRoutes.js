const express=require('express')
const {createTask,getTask,updateTask,deleteTask}=require('../controllers/taskController')

const router=express.Router()

//Tasks Routes
router.post('/todo',createTask)

router.get('/todo',getTask)

router.put('/todo/:id',updateTask)

router.delete('/todo/:id',deleteTask)



module.exports=router