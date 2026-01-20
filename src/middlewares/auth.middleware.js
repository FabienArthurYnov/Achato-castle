import axios from 'axios';

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:4001';
const SERVICE_TOKEN = process.env.SERVICE_TOKEN || 'your_auth_service_secret';

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token manquant' });
    }

    try {
        const response = await axios.get(`${AUTH_SERVICE_URL}/api/auth/verify`, {
            headers: {
                'Authorization': authHeader,
                'X-Service-Token': SERVICE_TOKEN
            }
        });

        if (response.data.valid) {
            req.user = response.data.user;
            next();
        } else {
            return res.status(401).json({ message: 'Token invalide' });
        }
    } catch (error) {
        return res.status(401).json({ message: 'Erreur de vérification du token' });
    }
};