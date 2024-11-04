
////////////////////////////////
// Estrutura de um construtor //
////////////////////////////////

const express = require('express');
const app = express();

//////////////////////////////////////////////////////
// Metodos / verbos (get, post, put, delete, patch) //
//////////////////////////////////////////////////////

//app.METODO('rota/caminho', (req, res) => {})

app.get('/users', (req, res) => {
    res.send("Nessa rota vou retornar os usuários"); 
});

app.post('/users', (req, res) => {
    res.post("Rota usando post");
});

app.get('/users/:id', (req, res) => {
    res.send(`O parâmetro é ${req.params.id}`)
});

app.post('/user/:id1-:id2', (req, res) => {
    res.send(req.params);
});


/////////////////////////
//                     //
/////////////////////////

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor web ouvindo na porta ${PORT}`);
});






