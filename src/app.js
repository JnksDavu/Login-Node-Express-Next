import express from 'express';
import bodyParser from 'body-parser';
import { Sequelize } from 'sequelize';
import userRoutes from './Routes/users.js'; // Importa as rotas

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Conexão com o banco de dados
const sequelize = new Sequelize('postgres://postgres:1596753258@localhost:5432/AHGORA');

// Sincroniza o modelo com o banco de dados
sequelize.sync();

// Usa as rotas para '/usuarios'
app.use('/usuarios', userRoutes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor Node escutando na porta ${port}`);
});
