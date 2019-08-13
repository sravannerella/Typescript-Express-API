import { Router } from 'express';

type Middleware = ((router: Router) => void);

export const applyMiddleware = (middlwares: Middleware[], router: Router) => {
	middlwares.forEach(middleware => middleware(router));
}