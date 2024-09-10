const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

// Leer datos del archivo JSON
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/clientes', (req, res) => {
    res.json(data.clientes);
});

app.get('/productos', (req, res) => {
    res.json(data.productos);
});

// Cambia 'localhost' a '0.0.0.0' para escuchar en todas las interfaces
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});

