//instrução de rota
module.exports = (app)=>{
    app.get("/",(req,res)=>{
        res.render("index.ejs")
    })

}