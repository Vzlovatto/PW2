module.exports = {
    listar(req,res){
        res.send('Listando usuarios');
    },

    criar(req,res){
        const {nome} = req.body;
        return res.status(201).json(
            {mensagen: `Usuario ${nome} criado com sucesso`}
        );
    }
}