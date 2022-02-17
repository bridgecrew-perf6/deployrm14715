//importar as configurações do servidor
const { application } = require('express')
const servidor = require('./config/servidor')

//carregar o valor da variável app do servidor
const app = servidor.app

//carregar o valor da variável porta
const porta = servidor.porta

//ligar o servidor com express
app.listen(porta,()=>{
    console.log('Servidor em http://localhost:'+porta)
})
