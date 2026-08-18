const express =  require('express');
const rotasUsuarios = require('./routes/rotasUsuarios');

const app = express();

app.use(express.json());

app.use('/api', rotasUsuarios.router);

app.listen(3000, () =>{
    console.log('Servidor rodando em http://localhost:4000');
});
