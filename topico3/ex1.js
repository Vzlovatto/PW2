const express = require('express');
const app = express();

app.get('/saudacao', (req, res) => {
    const { nome } = req.query;

    if (nome) {
        res.send(`Olá ${nome}!`);
    } else {
        res.send('Olá, convidado!!');
    }
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
}); 