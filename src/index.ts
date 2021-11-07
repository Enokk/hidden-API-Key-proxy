import Express from 'express';

const PORT = process.env.PORT || 3000;

class App {
    private app: Express.Application;

    constructor() {
        this.app = Express();
        this.app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
}

new App();