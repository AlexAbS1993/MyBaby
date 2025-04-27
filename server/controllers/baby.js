import Baby from '../models/Baby.js'


const babyController = {
    getBaby: async (req, res) => {
        try{
            const {name} =  req.query
            const baby = await Baby.find({
                firstName: name
            })
            if (!baby){
                throw new Error('Такого ребёнка нет')
            }
            res.json(baby[0])
        }
        catch(e){
            if (e.message === 'Такого ребёнка нет'){
                res.status(404).json({
                    message: e.message
                })
            }
            else{
                res.status(400).json({
                    message: e.message
                })
            }
        }
    },
    createBaby: async (req, res) => {
        try{
            const baby = new Baby({
                ...req.body
            })
            await baby.save()
            res.json(baby)
        }
        catch(e){
            res.status(400).json({

            })
        }
    }
}

export default babyController