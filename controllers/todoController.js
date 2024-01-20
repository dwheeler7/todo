const Todo = require('../models/todo')

exports.index = async function(req, res) {    
    try {
        const todos = await Todo.find({})
        res.status(200).json(todos)
    } catch(err) {
        res.status(400).json({msg: err.message})
    }
}

exports.create = async function(req, res) {    
    try {
        const todo = await Todo.create(req.body)
        res.status(201).json(todo)
    } catch(err) {
        res.status(400).json({msg: err.message})
    }
}

exports.update = async function(req, res) {
    try {
        const updatedTodo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.status(200).json(updatedTodo)
    } catch(err) {
        res.status(400).json({msg: err.message})
    }
}

exports.destroy = async function(req, res) {    
    try {
        await Todo.findOneAndDelete({ _id: req.params.id })
        res.sendStatus(204)
    } catch(err) {
        res.status(400).json({msg: err.message})
    }
}

exports.show = async function(req, res) {    
    try {
        const foundTodo = await Todo.findOne({ _id: req.params.id })
        res.status(200).json(foundTodo)
    } catch(err) {
        res.status(400).json({msg: err.message})
    }
}