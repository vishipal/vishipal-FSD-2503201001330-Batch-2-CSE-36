
const express = require('express');

const app = express();


app.use(express.json());


let students = [
    { id: 1, name: "Vishi", course: "CSE" },
    { id: 2, name: "Rahul", course: "IT" }
];


app.get('/students', (req, res) => {
    res.status(200).json(students);
});


app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});


app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.course = req.body.course;

    res.status(200).json({
        message: "Student updated successfully",
        student: student
    });
});


app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.status(200).json({
        message: "Student deleted successfully"
    });
});


app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
