module.exports = {
    listar(req,res){
        return res.json([
            {id: 1, nome: 'Vitor'},
            {id: 2, nome: 'Liro'}
        ]);
    },

    criar(req,res){
        const {nome} = req.body;
        return res.status(201).json(
            {mensagen: `Usuario ${nome} criado com sucesso`}
        );
    }
}