import express, { Router, Request, Response, NextFunction } from 'express';

const PORT = process.env.PORT;

const app = express();
const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({
        data: 'Hello world'
    });
});

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`received ${req.method} request on '${req.path}'`);
    next();
});
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});
