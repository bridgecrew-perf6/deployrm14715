module.exports=(app)=>{
    //definir a rota para a requisição /contato
    app.get("/contato",(req,res)=>{
        res.render('contato.ejs')
    })
}