const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUserByEmail, createUser } = require('../models/userModel');

exports.register = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, (err, results) => {
    if (results.length) return res.status(400).json({ error: 'Email already registered' });

    const hashedPassword = bcrypt.hashSync(password, 8);
    createUser(email, hashedPassword, (err) => {
      if (err) return res.status(500).json({ error: 'Database error' });

      res.json({ message: 'Registration successful' });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, (err, results) => {
    if (!results.length) return res.status(401).json({ error: 'User not found' });

    const user = results[0];

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Incorrect password' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
};
