import express from 'express';
import { applyMiddleware } from './utils/applyMiddlware';
import middleware from './middleware';
import routes from './routes';

class App{

	router: express.Application;

	constructor(){
        this.router = express();
		this.addMiddleware();
		this.initRoutes();
	}

	initRoutes(){
		this.router.use('/v1', routes);
    }

	addMiddleware(){
		applyMiddleware(middleware, this.router);
	}

	startListening(PORT: number){
		this.router.listen(PORT, () => {
			console.log(`Server listening on PORT: ${PORT}`);	
		})
	}

}

export default App;