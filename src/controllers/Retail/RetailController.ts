import {Request, Response} from 'express';

export const history = (req: Request, resp: Response) => {
	resp.status(200).json({
		message: "Successful"
	})
}