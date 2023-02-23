const Estoque = require ('../models/estoqueModel')

exports.postEstoque = async (req,res) => {
    const{prod, un, qtd, value, date}= req.body

    const estoquess= {    
        prod,
        un,
        qtd,
        value,
        date,
    }

    if(!estoquess){
        return res.status(422).json({message: 'Campos obrigatórios faltantes'})
    }
    try {
        await Estoque.create(estoquess)
        res.status(201).json({message: 'sucesso'})
    } 
    catch (error) {
        res.status(500).json({error: error})
     }

};

exports.getEstoque = async (req, res) => {
    try {
        const estoquess= await Estoque.find()
        res.status(200).json(estoquess)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};


exports.getOneEstoque = async (req, res) => {
    const id = req.params.id

    try {
        const estoquess= await Estoque.findOne({ _id: id})

        if(!despesass){
            res.status(422).json({message:'Usuario nao encontrado'})
        }


        res.status(200).json(estoquess)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};


exports.patchEstoque = async (req, res) => {
    const id = req.params.id

    const{prod, un, qtd, value, date}= req.body

    const estoquess= {    
        prod,
        un,
        qtd,
        value,
        date,
    }


    try {
        const updateEstoque= await Estoque.updateOne({ _id: id}, estoquess)
        res.status(200).json(estoquess)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};

exports.deleteEstoque = async (req, res) => {
    const id = req.params.id

    const estoquess= await Estoque.findOne({ _id: id})

    if(!estoquess){
        res.status(422).json({message:'Usuario nao encontrado'})
    }

    try {
        await Estoque.deleteOne({ _id: id})
        res.status(200).json({message:'Usuario removido com sucesso'})
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};