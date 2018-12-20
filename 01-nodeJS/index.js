const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'aladin',
                dataNascimento: new Date()
            })
        }, 1000);
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '222222222',
                ddd: '11'
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'rua dos bobos',
            numero: 0
        })
    }, 2000);
}

main()
//ao adicionar a palavra async automaticamente irá retornar uma promise 
async function main() {
    try {
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const  endereco = await obterEnderecoAsync(usuario.id)
        //não depende um do outro, apenas do usuário para obter seus resultados
        const resultado = await Promise.all(
            [
                obterTelefone(usuario.id),
                obterEnderecoAsync(usuario.id)
            ]
        )
        
        const endereco = resultado[1]
        const telefone = resultado[0]

                     console.log(`
                 Nome: ${usuario.nome},
                 Endereço: ${endereco.rua}, ${endereco.numero}
                 Telefone: (${telefone.ddd})${telefone.telefone}
             `)
        console.timeEnd('medida-promise')
    } catch (error) {
        console.error('deu ruim', error)
    }
}

//para manipular o sucesso usar o .then
//para erros .catch

// obterUsuario(function resolverUsuario(error, usuario) {

//     if (error) {
//         console.error('erro no usuário', error)
//         return;
//     }

//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {

//         if (error1) {
//             console.error('erro no telefone', error1)
//             return;
//         }


//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if (error2) {
//                 console.error('erro no endereço', error2)
//                 return;
//             }


//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereço: ${endereco.rua}, ${endereco.numero}
//                 Telefone: (${telefone.ddd})${telefone.telefone}
//             `)

//         })

//     })
// })
