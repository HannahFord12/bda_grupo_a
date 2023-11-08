const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Conexión a la base de datos MongoDB local
mongoose.connect('mongodb://localhost/animales', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a MongoDB establecida');
    // Iniciar el servidor después de establecer la conexión a la base de datos
    app.listen(port, () => {
      console.log(`API escuchando en el puerto ${port}`);
    });
  })
  .catch(err => console.error('Error de conexión a MongoDB:', err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Definir el modelo de datos para "especies"
const Schema = mongoose.Schema;
const especiesSchema = new Schema({
  name: String,
  description: String,
});

const Especie = mongoose.model('Especie', especiesSchema); // Modelo para la colección "especies"

// Definir rutas de la API para "especies"
app.get('/especies', (req, res) => {
  Especie.find()
    .then(especies => res.json(especies))
    .catch(err => res.send(err));
});

//Crea nueva especie
app.post('/especies', (req, res) => {
  const nuevaEspecie = new Especie(req.body);

  nuevaEspecie.save()
    .then(especie => res.json(especie))
    .catch(err => res.send(err));
});

//Busaca especie por id
app.get('/especies/:especie_id', (req, res) => {
  Especie.findById(req.params.especie_id)
    .then(especie => res.json(especie))
    .catch(err => res.send(err));
});

//Actualiza una especie
app.put('/especies/:especie_id', (req, res) => {
  Especie.findByIdAndUpdate(req.params.especie_id, req.body)
    .then(especie => res.json(especie))
    .catch(err => res.send(err));
});

//Elimina una especie
app.delete('/especies/:especie_id', (req, res) => {
  Especie.deleteOne({ _id: req.params.especie_id })
    .then(result => {
      if (result.deletedCount === 1) {
        res.json({ message: 'Especie eliminada satisfactoriamente' });
      } else {
        res.json({ message: 'La especie no fue encontrada o ya ha sido eliminada' });
      }
    })
    .catch(err => res.send(err));
});


