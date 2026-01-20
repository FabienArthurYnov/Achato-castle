import express from 'express';
    import cors from 'cors';
    import chateauxRoutes from './routes/chateaux.routes.js';
    import { errorHandler } from './middlewares/error.middleware.js';

    export const createApp = () => {
        const app = express();
        app.use(cors());
        app.use(express.json());

        app.use('/api/chateaux', chateauxRoutes);
        app.use(errorHandler);
        return app;
    };