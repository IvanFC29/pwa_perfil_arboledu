// routes/users.js
const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Ruta de registro
router.post('/register', async (req, res) => {
  const { nombre, clave, correo } = req.body;
  try {
    const newUsuario = new Usuario({ nombre, clave, correo });
    await newUsuario.save();
    res.status(201).send('Usuario registrado correctamente');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
