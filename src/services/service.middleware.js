const SERVICE_TOKEN = process.env.SERVICE_TOKEN || 'your_auth_service_secret';

export const serviceMiddleware = (req, res, next) => {
    const serviceToken = req.headers['x-service-token'];

    if (serviceToken === SERVICE_TOKEN) {
        req.isServiceCall = true;
        return next();
    }

    return res.status(403).json({ message: 'Service non autorisé' });
};