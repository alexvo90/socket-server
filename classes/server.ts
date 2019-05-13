
import express from 'express';
import { SERVER_PORT } from '../global/environment';

//export -> se va a exportar esta clasa para ocuparla en oro lugar
//default -> porque se va a exportar unicamente esta clase
export default class Server{
    public app: express.Application;
    public port: number;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;

    }

    start(callback:Function){
        this.app.listen(this.port, callback);
    }

    
}