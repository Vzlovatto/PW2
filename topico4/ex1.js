const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next)=> {
    const dataAtual = new Date().toISOString();
    console.log(`[${dataAtual}] Método: ${req.method} | URL: ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Teste teste');
});


app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});