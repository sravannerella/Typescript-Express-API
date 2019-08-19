import {Router} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import lusca from 'lusca';

export const handleCors = (router: Router) => {
	router.use(cors({
		credentials: true,
		origin: true
	}));
}

export const handleBodyParser = (router: Router) => {
	router.use(bodyParser.urlencoded({ extended: true }));
	router.use(bodyParser.json());
}

export const handleLusca = (router: Router) => {
    router.use(lusca.xframe("SAMEORIGIN"));
    router.use(lusca.csrf());
    router.use(lusca.xssProtection(true));
}