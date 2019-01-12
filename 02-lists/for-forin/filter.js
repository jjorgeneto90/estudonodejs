//import de uma única função. Caso seja necessário outras, separar por vírgula
const { obterPessoas } = require('./service')

Array.prototype.meuFilter = function (callback) {
    const lista = []
    for (index in this) {
        const item = this[index]
        const result = callback(item, index, this)

        if (!result) continue;
        lista.push(item)
    }

    return lista;
}

Array.prototype.meuFilter2 = function (callback) {
    const lista = []
    for (pessoa of this) {

        //resultado da função que foi passada no main
        const result = callback(pessoa, this)

        if (!result) continue;
        lista.push(pessoa.name)
    }
    return lista;
}

async function main() {
    try {
        const {
            results
        } = await obterPessoas(`a`)

        //exemplo 1
        // const familiaLars = results.filter(function (item) {
        //     //caso não tenha encontrado, o resultado é -1
        //     //por padrão retorna um boolean
        //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1
        //     return result;
        // })

        //exemplo 2
        // const familiaLars = results.meuFilter((item, index, lista) => {
        //     console.log(`index - ${index}`, lista.length)
        //     return item.name.toLowerCase().indexOf('lars') !== -1
        // })

        //exemplo 3
        const familiaLars = results.meuFilter2((item, lista) => {
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        // const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(familiaLars)
    } catch (error) {
        console.error('error', error)
    }
}

main()