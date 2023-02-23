const Empregados = require ('../models/empregadosModel')

exports.postEmpregados = async (req,res) => {
    const{name, contact, service, salar, adm}= req.body

    const empregadoss= {    
        name,
        contact,
        service,
        salar,
        adm,
    }

    if(!name){
        return res.status(422).json({message: 'Campos obrigatórios faltantes'})
    }
    try {
        await Empregados.create(empregadoss)
        res.status(201).json({message: 'sucesso'})
    } 
    catch (error) {
        res.status(500).json({error: error})
     }

};

exports.getEmpregados = async (req, res) => {
    try {
        const empregadoss= await Empregados.find()
        res.status(200).json(empregadoss)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};


exports.getOneEmpregados = async (req, res) => {
    const id = req.params.id

    try {
        const empregadoss= await Empregados.findOne({ _id: id})

        if(!empregadoss){
            res.status(422).json({message:'Usuario nao encontrado'})
        }


        res.status(200).json(empregadoss)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};


exports.patchEmpregados = async (req, res) => {
    const id = req.params.id

    const{name, contact, service, salar, adm}= req.body

    const empregadoss= {    
        name,
        contact,
        service,
        salar,
        adm,
    }


    try {
        const updateEmpregados= await Empregados.updateOne({ _id: id}, empregadoss)
        res.status(200).json(empregadoss)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};

exports.deleteEmpregados = async (req, res) => {
    const id = req.params.id

    const empregadoss= await Empregados.findOne({ _id: id})

    if(!empregadoss){
        res.status(422).json({message:'Usuario nao encontrado'})
    }

    try {
        await Empregados.deleteOne({ _id: id})
        res.status(200).json({message:'Usuario removido com sucesso'})
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};