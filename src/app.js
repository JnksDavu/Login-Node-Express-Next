import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Obter o caminho do arquivo atual e o diretório
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definir o caminho para o diretório de templates
const basePath = path.join(__dirname, 'Templates');

const app = express();
const port = 3000;

const checkAuth = function(req,res,next){

    req.authstatus = true

    if(req.authstatus){
        console.log('logado')
        next()
    }else{
        console.log('deslogado')
        next()
    }
}

//app.use(checkAuth)

app.get('/hello', (req, res) => {
    // Enviar o arquivo HTML
    res.sendFile(`${basePath}/index.html`);

});

app.get('/users/:id', (req, res) => {
    // Enviar o arquivo HTML

    const id = req.params.id

    console.log(`procurando o usuario ${id}`)

    res.sendFile(`${basePath}/index.html`);

});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
