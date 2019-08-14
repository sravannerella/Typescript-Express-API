import App from './app';
import dotenv from 'dotenv';

dotenv.config();
const PORT = 8080 || process.env.PORT;
const expressAPI = new App();
expressAPI.startListening(PORT);
