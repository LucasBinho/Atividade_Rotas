import DicasMetodos from "../utils/DicasMetodos.js"
import DicaModel from "../models/DicasModel.js"

class Dicas {
    static rotas(app) {
        app.get("/dicas", (req, res)=>{
            const response = DicasMetodos.tips()
            res.status(200).json(response)
        })

        app.post("/dicas", (req, res)=>{
            const dica =  new DicaModel(...Object.values(req.body))
            const response = DicasMetodos.create(dica)
            res.status(201).json(response)
        })
    }
}


export default Dicas