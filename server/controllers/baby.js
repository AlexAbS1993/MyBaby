import Baby from '../models/Baby.js'


const babyController = {
    getBaby: async (req, res) => {
        try{
            const {name} =  req.query
            const baby = await Baby.find({
                firstName: name
            })
            res.json(baby[0])
        }
        catch(e){
            res.status(400).json({

            })
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