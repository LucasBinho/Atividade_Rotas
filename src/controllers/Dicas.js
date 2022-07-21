import DicasMetodos from "../utils/DicasMetodos.js"
import DicaModel from "../models/DicasModel.js"

class Dicas {
    static rotas(app) {
        app.get("/tips", (req, res)=>{
            const response = DicasMetodos.randomizaDicas()
            res.status(200).json(response)
        })

        app.post("/create", (req, res)=>{
            const dica =  new DicaModel(...Object.values(req.body))
            const response = DicasMetodos.criaDicas(dica)
            res.status(201).json(response)
        })
    }
}


export default Dicas