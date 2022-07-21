import { Database } from "../infra/Database.js";

class DicasMetodos {
    static criaDicas(dicas) {
        return Database.Dicas = [...Database.Dicas, dicas]
    }

    static randomizaDicas() {
        let random = parseInt(Math.random() * (Database.Dicas.length))

        return Object.values(Database.Dicas[random])
    }

} 

export default DicasMetodos