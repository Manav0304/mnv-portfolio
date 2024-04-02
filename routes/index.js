/*Manav Patel-301297156
Social Media Portfolio
Entrepreneurship - The Mindset- GNED 420*/

const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res , next) => {
  res.render('home', { title: 'Home' });
});

module.exports = router;
