const mongoose = require('mongoose')

require('dotenv').config()

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        require:true
    },
    completed: {
        type: Boolean,
        default: false
    },
},{ timestamps: true })

const task = new mongoose.model('task', taskSchema)

module.exports = {task}