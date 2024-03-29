const express = require('express')
const app = express()
const todoRouter = require('./routes/todoRouter')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/todos', todoRouter)

module.exports = app