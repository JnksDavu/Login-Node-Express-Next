import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './Routes/usersRoutes.js'; 
import tokenRoutes from './Routes/tokenRoutes.js'
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = 5000;


app.use(bodyParser.json());


app.use('/users', userRoutes);

app.use('/token', tokenRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
