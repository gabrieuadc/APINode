const Servicess = require ('../models/Servicess')

exports.postService = async (req,res) => {
    const{name, contact, service, value, date, status}= req.body

    const servicess= {    
        name,
        contact,
        service,
        value,
        date,
        status
    }

    if(!name){
        return res.status(422).json({message: 'Campos obrigatórios faltantes'})
    }
    try {
        await Servicess.create(servicess)
        res.status(201).json({message: 'sucesso'})
    } 
    catch (error) {
        res.status(500).json({error: error})
     }

};

exports.getService = async (req, res) => {
    try {
        const servicess= await Servicess.find()
        res.status(200).json(servicess)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};


exports.getOneService = async (req, res) => {
    const id = req.params.id

    try {
        const servicess= await Servicess.findOne({ _id: id})

        if(!servicess){
            res.status(422).json({message:'Usuario nao encontrado'})
        }


        res.status(200).json(servicess)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};


exports.patchService = async (req, res) => {
    const id = req.params.id

    const{name, contact, service, value, date, status}= req.body

    const servicess= {    
        name,
        contact,
        service,
        value,
        date,
        status
    }


    try {
        const updateService= await Servicess.updateOne({ _id: id}, servicess)
        res.status(200).json(servicess)
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};

exports.deleteService = async (req, res) => {
    const id = req.params.id

    const servicess= await Servicess.findOne({ _id: id})

    if(!servicess){
        res.status(422).json({message:'Usuario nao encontrado'})
    }

    try {
        await Servicess.deleteOne({ _id: id})
        res.status(200).json({message:'Usuario removido com sucesso'})
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
};