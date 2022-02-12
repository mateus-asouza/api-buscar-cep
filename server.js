const express = require('express');
const res = require('express/lib/response');
const Correios = require('node-correios');
const correio = new Correios;
const app = express();
const PORT = 3001;

//configura a porta que o servidor ira receber requisições e mostra uma
//mensagem informado a porta no console.
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));

//mapea endereço da requisição e tipo, faz a consulta pelo metodo consultaCEP
// passando o cep recebido na requisição e retorna as informações.
app.get('/', (req, res) => {
    const { cep } = req.query;

    correio.consultaCEP({ cep: cep })
        .then(result => {
            res.header("Access-Control-Allow-Origin", "*");
            res.send(result);
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
});