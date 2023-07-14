/*const matematica = require ('./matematica')
matematica.somar(8,3)*/

const express = require ('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send ('ola Sandro, não altere o package')
})


app.listen (port, () => {
    console.log (`App rodando na porta ${port}`)
})
