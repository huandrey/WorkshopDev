//usei o express p config e criar meu servidor 
const express = require("express")

const server = express()
// configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))
//criei uma rota "/"
// e capturo o pedido do cliente para responder 

//conf do nunjucks

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
})



server.get("/", function(req, res) {
    return res.sendFile(__dirname + "/backup/index.html")
})

//liguei meu servidor na porta 3000
server.listen(3000)