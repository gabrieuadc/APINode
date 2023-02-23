const Despesas = require ('../models/despesasModel')

exports.postDespesa = async (req,res) => {
    const{name, contact, service, value, date}= req.body

    const despesass= {    
        name,
        contact,
        service,
        value,
        date,
    }

    if(!name){
        return res.status(422).json({message: 'Campos obrigatórios faltantes'})
    }
    try {
        await Despesas.create(despesass)
        res.status(201).json({message: 'sucesso'})
    } 
    catch (error) {
        res.status(500).json({error: error})
     }

};

exports.getDespesa = async (req, res) => {
    try {
        const despesass= await Despesas.find()
        res.status(200).json(despesass)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};


exports.getOneDespesa = async (req, res) => {
    const id = req.params.id

    try {
        const despesass= await Despesas.findOne({ _id: id})

        if(!despesass){
            res.status(422).json({message:'Usuario nao encontrado'})
        }


        res.status(200).json(despesass)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};


exports.patchDespesa = async (req, res) => {
    const id = req.params.id

    const{name, contact, service, value, date}= req.body

    const despesass= {    
        name,
        contact,
        service,
        value,
        date,
    }


    try {
        const updateDespesa= await Despesas.updateOne({ _id: id}, despesass)
        res.status(200).json(despesass)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};

exports.deleteDespesa = async (req, res) => {
    const id = req.params.id

    const despesass= await Despesas.findOne({ _id: id})

    if(!despesass){
        res.status(422).json({message:'Usuario nao encontrado'})
    }

    try {
        await Despesas.deleteOne({ _id: id})
        res.status(200).json({message:'Usuario removido com sucesso'})
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};