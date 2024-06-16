// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const app = express();
const PORT = process.env.PORT || 5000;

// Credenciales para mongo Atlas
const dbURL = 'mongodb+srv://dbUserIFC:dbPassword@cluster0.6dqlugp.mongodb.net/db_arbolEdu?retryWrites=true&w=majority';

// Conectar a MongoDB Atlas
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas connected successfully'))
  .catch(err => console.log('Failed to connect to MongoDB Atlas', err));

// Middleware
//app.use(cors());
app.use(express.json());

// Importar rutas
const userRoutes = require('./routes/usuarioRoute');
app.use('/api/usuarioRoute', userRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Escuchar el puerto
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
