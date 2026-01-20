import dotenv from 'dotenv';
dotenv.config();

export const env = {
    port: process.env.PORT || 4004,
    nodeEnv: process.env.NODE_ENV || 'development',
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || '3306',
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
    fileServiceUrl: process.env.FILE_SERVICE_URL || 'http://localhost:4003',
};