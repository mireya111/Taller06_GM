// Incluimos el modulo de express
const express = require('express');

// Incluimos el modulo de path
const path = require('path');

// Creamos la aplicación de express con la función express()
const app = express();

// Establecemos un puerto en el cual nuestro servidor estará escuchando
const PORT = process.env.PORT || 3000;

// Servimos los archivos que se encuentran en el directorio public
app.use(express.static(path.join(__dirname, 'public')));

// Indicamos que serviremos el archivo index.html cuando accedamos a esta ruta

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/informacionGeneral', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'informacionGeneral.html'));
});

app.get('/integrantes', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'integrantes.html'));
});

app.get('/productos', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'productos.html'));
});

const paraIntegrantes = [
    {
        id: 1,
        nombre: "Paul Cabrera", 
        fechaNacimiento: "el 29 de abril del año 2004", 
        universidad: "Escuela Politecnica Nacional",
        carreraUniversitaria: "Desarrollo de Software"
    }, 

    {
        id: 2,
        nombre: "García Mireya", 
        fechaNacimiento: "el 8 de septiembre del año 2004", 
        universidad: "Escuela Politecnica Nacional",
        carreraUniversitaria: "Desarrollo de Software"
    }, 

    {
        id: 3,
        nombre: "Torres Mateo", 
        fechaNacimiento: "el 13 de septiembre del año 2004", 
        universidad: "Escuela Politecnica Nacional",
        carreraUniversitaria: "Desarrollo de Software"
    }, 

    {
        id: 4,
        nombre: "Terán Mathías", 
        fechaNacimiento: "el 23 de abril del año 2003", 
        universidad: "Escuela Politecnica Nacional",
        carreraUniversitaria: "Desarrollo de Software"
    }, 

    {
        id: 5,
        nombre: "Catucuamba Ariel", 
        fechaNacimiento: "el 28 de diciembre del año 2004", 
        universidad: "Escuela Politecnica Nacional",
        carreraUniversitaria: "Desarrollo de Software"
    }, 

    {
        id: 6,
        nombre: "Astudillo Anthony", 
        fechaNacimiento: "el 5 de noviembre del año 2004", 
        universidad: "Escuela Politecnica Nacional",
        carreraUniversitaria: "Desarrollo de Software"
    }, 

];

//Cabe recalcar que se 
app.get('/integrantes/:id', function (req, res) {
    const idRecibido = parseInt(req.params.id);
    const resultadoBusquedaIntegrante = paraIntegrantes.find(i => i.id === idRecibido);
    if (resultadoBusquedaIntegrante) {
        res.json(resultadoBusquedaIntegrante);
    } else {
        res.status(404).json({ mensaje: 'No se ha encontrado el integrante' });
    }
});

// Nuestra aplicación estará escuchando en el puerto que definimos previamente
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});