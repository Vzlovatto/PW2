const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Teste teste');
});

function verificarToken(req, res, next){
    const token = req.headers['token'];

    if(!token || token !== '123'){
        return res.status(401).json(
            {erro: 'Não atorizado. token inválido'}
        );
    }
    next();
}

app.get('/home', (req, res) => {
    res.send('rota publica');
});

app.get('/rotasecreta', verificarToken, (req, res) =>{
    res.send("Você está na area restrita");
});


app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});