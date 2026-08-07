const express = require('express');
const app = express();

app.get('/produtos/:id', (req, res) => {
    const { id } = req.params;

    if (id === '10') {
        res.send('Produto: Notebook');
    } else {
        res.send('Produto não encontrado');
    }
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
}); 