const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const employeModel = require('./Models/Employe.js')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/employe')

app.post('/register', (req, res) => {
    const { email } = req.body;
    // Check if the email already exists in the database
    employeModel.findOne({ email })
        .then(existingEmployee => {
            if (existingEmployee) {
                // If the email exists, send an error response
                return res.status(400).json({ message: 'Email already exists' });
            }
            // If email does not exist, create the new employee
            employeModel.create(req.body)
                .then(employee => res.status(201).json({ message: 'User Created', employee }))
                .catch(err => res.status(500).json({ message: 'Server error', error: err }));
        })
        .catch(err => res.status(500).json({ message: 'Server error', error: err }));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body
    employeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ message: 'Success' })

                } else {
                    res.json({ message: 'Invalid Email or Password' })
                }
            } else {
                res.json({ message: 'No record found' })
            }
        })
})

app.listen(3001, () => {
    console.log('server is running on port 3001')
})