

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4500;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/userDetails')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  number: Number
});

const Employee = mongoose.model('user', employeeSchema);


app.get('/userDetails', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});
app.get('/userDetails/:id', async (req, res) => {
  try {
    const employeeId = req.params.id; // Extract ID from URL
    const employee = await Employee.findById(employeeId); // Fetch employee by ID

    if (!employee) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(employee); // Return the specific employee details
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

app.post('/userDetails', async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.status(201).json(newEmployee);
});


app.put('/userDetails/:id', async (req, res) => {
  const { id } = req.params;
  const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedEmployee);
});
app.delete('/userDetails/:id', async (req, res) => {
  const { id } = req.params;
  await Employee.findByIdAndDelete(id);
  res.json({ message: 'Employee deleted successfully' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


