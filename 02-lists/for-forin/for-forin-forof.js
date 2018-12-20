const service = require('./service')

async function main() {

    try {
        // console.time('for')
        const result = await service.obterPessoas('a')
        const names = []
        // for (let i = 0; i <= result.results.length - 1; i++) {
        //     const pessoa = result.results[i];
        //     names.push(pessoa.name)            
        // }

        // console.timeEnd('for')

        // for (let i in result.results) {
        //     const pessoa = result.results[i]
        //     names.push(pessoa.name)
        // }

        for (pessoa of result.results) {
            names.push(pessoa.name)
        }

        console.log(`names`, names)
    } catch (error) {
        console.error('erro interno', error)
    }
}

main()