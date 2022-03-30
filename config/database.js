const mongoose = require('mongoose')

const conexao = async() =>{
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/SITE1)'
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://userAdmin:thi020206@cluster0.s3hds.mongodb.net/test')
}

module.exports = conexao