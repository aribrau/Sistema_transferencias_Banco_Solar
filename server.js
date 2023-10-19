import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';


const app = express();
const PORT = 3000;

//middleware para parsear el body de las request
app.use(express.json());
//moddleware de seguridad CORS
app.use(cors());

//usamos la carpeta public como landing de nuestra app
app.use(express.static('public'))
//ruta raiz
app.use('/', routes);


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

