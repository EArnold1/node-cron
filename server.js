const express = require('express');
const app = express();

// middleware
app.use(express.json({ extended: true }))

app.use('/todos', require('./routes/todo'));

// const PORT = 5000;


// app.listen(PORT, () => console.log('api working'));

module.exports = app;