import App from './app';
const PORT = 8080 || process.env.PORT;

const expressAPI = new App();
expressAPI.startListening(PORT);
