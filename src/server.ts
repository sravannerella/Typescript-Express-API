import App from './app';
import dotenv from 'dotenv';

dotenv.config();
const PORT = Number(process.env.PORT) || 8080;
const expressAPI = App;
expressAPI.startListening(PORT);
