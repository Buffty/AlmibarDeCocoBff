var Express = require("express");
var cors = require("cors");

const mongoose = require('mongoose');
const port = 5038;
const sampleController = require('./controller/sampleController')

var app = Express();
app.use(cors());

const DATABASENAME = "todoappdb";

const uri = "mongodb+srv://admin:admin@cluster0.34ps432.mongodb.net/" + DATABASENAME+ "?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(uri);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

app.get('/todos', sampleController.getTodos);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});