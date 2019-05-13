import Server from "./classes/server";
import router from "./routes/router";
import bodyParser from "body-parser";
import cors from 'cors';

const server = new Server();

//bodyParser 
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json);

//CORS permite que cualquier persona pueda consumir nuestros servicios
server.app.use(cors({origin:true, credentials: true}));

server.app.use('/', router)

server.start(() => {
    console.log(`Servidor corriendo en el puerto; ${server.port}`);
});


