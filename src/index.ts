import Express from 'express';
import dotenv from 'dotenv';
import { weatherRouter } from './routes/weather';

dotenv.config();
const PORT = process.env.PORT || 3000;

class App {
    private app: Express.Application;

    constructor() {
        this.app = Express();

        this.app.use('/api', weatherRouter)

        this.app.all('*', (req: Express.Request, res: Express.Response) => {
            res.sendStatus(404);
        })

        this.app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
}

new App();