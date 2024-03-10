
const Sample = require('../models/sampleModel')


// Endpoint para recuperar información de la colección
const getTodos = async (req, res) => {
    try {
      const todos = await Sample.find();
      res.json(todos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener ejemplos de la base de datos' });
    }
};

module.exports = {
    getTodos
}