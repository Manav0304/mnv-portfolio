/*Manav Patel-301297156
Social Media Portfolio
Entrepreneurship - The Mindset- GNED 420*/


const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8001;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
