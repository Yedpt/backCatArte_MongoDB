import conectionDB from './database/conectionDB'; // Import database connection
import catMeme from './models/catModel';  // Import model from table Meme
import express from 'express';
import cors from 'cors';
import { router } from './routers/catRouter';
import {PORT} from './config';

export const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // el localhost donde esta corriendo el front
}));
app.use(express.json());

app.use('/api/memes', router);

  try {
    conectionDB.authenticate();  // Autheticas the database
    console.log('Conexión a la base de datos exitosa');

    // Fetch all memes
   catMeme.sync({ force: false });
   console.log('Tabla de memes creada');

  } catch (error) {
    console.error('Error al conectar o consultar la base de datos 😒:', error);
  }


export const server = app.listen((PORT || 3000), () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}/`);;
});

