const ICrud = require('./interfaces/interfaceCrud')

class Postgres extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log("item foi salvo no postgres")
    }
}

module.exports = Postgres