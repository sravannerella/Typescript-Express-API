import express from 'express';

const router = express();
const {PORT = 8080} = process.env;

router.listen(PORT, () => {
	console.log(`Server listening on PORT: ${PORT}`);
})