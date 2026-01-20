import { Router } from 'express';
import { chateauxController } from '../controllers/chateaux.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

// Routes publiques
router.get('/', chateauxController.list);
router.get('/:id', chateauxController.get);

// Routes protégées
router.post('/', authMiddleware, chateauxController.create);
router.put('/:id', authMiddleware, chateauxController.update);
router.delete('/:id', authMiddleware, chateauxController.delete);

export default router;