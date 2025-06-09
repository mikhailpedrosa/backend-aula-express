const express = require('express');
const PrivateRoutes = require('./routes/PrivateRoutes');
const PublicRoutes = require('./routes/PublicRoutes');

const app = express();

const HOST = '127.0.0.1';
const PORT = 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');

})

app.use(PublicRoutes);
app.use(PrivateRoutes);



app.get('/teste/:id', (req, res) => {
    const params = req.params;
    let dados = `<br> Params: ${params.id}`;

    const query = req.query;

    dados += `<br> Query: ${query.nome} - ${query.sobrenome}`;

    const body = req.body;

    dados += `<br> Body: ${JSON.stringify(body)}`;
    
    return res.send(dados);

})

app.listen(PORT, HOST, () =>{
    console.log(`Servidor escutando em http://${HOST}:${PORT}`);
})