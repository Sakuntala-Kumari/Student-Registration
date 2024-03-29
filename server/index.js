const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const StudentModel = require('./models/Students')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.get("/", (req, res) => {
    StudentModel.find({})
    .then(students => res.json(students))
    .catch(err => res.json(err))
})

app.get("/getStudent/:id", (req, res) => {
    const id = req.params.id;
    StudentModel.findById({_id:id})
    .then(students => res.json(students))
    .catch(err => res.json(err))
})

app.post("/createStudent", (req, res) => {
    StudentModel.create(req.body)
    .then(students => res.json(students))
    .catch(err => res.json(err))
})

app.put("/updateStudent/:id", (req, res) => {
    const id = req.params.id;
    StudentModel.findByIdAndUpdate({_id:id},{
        name: req.body.name, 
        email: req.body.email, 
        age: req.body.age})
    .then(students => res.json(students))
    .catch(err => res.json(err))
})

app.delete("/deleteStudent/:id", (req, res) => {
    const id = req.params.id;
    StudentModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is running")
})