const mongoose = require('mongoose')

const employeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const employeModel = mongoose.model('employes', employeSchema)
module.exports = employeModel