const { obterPessoas } = require('./service')

async function main(){
    try {
        const {
            results  
        } = await obterPessoas('a')

        const pesos = results.map(item => parseInt(item.height))
        const total = results.reduce((anterior,proximo)=>
        {
            return anterior + proximo
        })

        console.log('total= ', total)
    } catch (error) {
        console.error('deu erro', error)
    }
}

main()