import {Request, Response} from 'express';

export const history = (req: Request, resp: Response) => {
	console.log("GOT REQUEST:", req);
	resp.status(200).json({
		message: "Successful"
	})
}