const Custo = require ('../models/custoModel')

exports.postCusto = async (req,res) => {
    const{mpd, mod, cif, cpp, date}= req.body

    const custoss= {    
        mpd,
        mod,
        cif,
        cpp,
        date,
    }

    if(!mpd){
        return res.status(422).json({message: 'Campos obrigatórios faltantes'})
    }
    try {
        await Custo.create(custoss)
        res.status(201).json({message: 'sucesso'})
    } 
    catch (error) {
        res.status(500).json({error: error})
     }

};

exports.getCusto = async (req, res) => {
    try {
        const custoss= await Custo.find()
        res.status(200).json(custoss)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};


exports.getOneCusto = async (req, res) => {
    const id = req.params.id

    try {
        const custoss= await Custo.findOne({ _id: id})

        if(!custoss){
            res.status(422).json({message:'Custo nao encontrado'})
        }


        res.status(200).json(custoss)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};


exports.patchCusto = async (req, res) => {
    const id = req.params.id

    const{mpd, mod, cif, cpp, date}= req.body

    const custoss= {    
        mpd,
        mod,
        cif,
        cpp,
        date,
    }


    try {
        const updateCusto= await Custo.updateOne({ _id: id}, custoss)
        res.status(200).json(custoss)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};

exports.deleteCusto = async (req, res) => {
    const id = req.params.id

    const custoss= await Custo.findOne({ _id: id})

    if(!custoss){
        res.status(422).json({message:'Custo nao encontrado'})
    }

    try {
        await Custo.deleteOne({ _id: id})
        res.status(200).json({message:'Custo removido com sucesso'})
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};