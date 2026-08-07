const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem vindo ao meu site');
});

app.get('/sobre', (req, res) => {
    res.send('sou estudante de desenvolvimento de sistemas');
});

app.get('/contato', (req, res) => {
    res.send('Contato: vzlovatto@gmail.com');
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
}); 