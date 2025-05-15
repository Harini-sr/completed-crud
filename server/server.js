const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4500;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (using environment variable)
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/userDetails';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Schema and Model
const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  number: Number
});
const Employee = mongoose.model('user', employeeSchema);

// Routes
app.get('/userDetails', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

app.get('/userDetails/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'User not found' });
    res.json(employee);
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
  const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedEmployee);
});

app.delete('/userDetails/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted successfully' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

