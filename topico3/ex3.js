const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bem vindo ao meu site');
});

app.get('/sobre', (req, res) => {
    res.send('sou estudante de desenvolvimento de sistemas');
});

app.get('/contato', (req, res) => {
    res.send('Contato: vzlovatto@gmail.com');
});

app.post('/usuarios', (req, res) => {
    const { nome, email } = req.body;

    res.status(201).json({
        mensagem: "Usuário criado com sucesso!",
        usuario: {
            nome,
            email
        }
    });
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});