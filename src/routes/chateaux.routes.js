import { Router } from 'express';
import { chateauxController } from '../controllers/chateaux.controller.js';
import { serviceMiddleware, authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

// Service token requis pour TOUTES les routes
router.use(serviceMiddleware);

// Routes avec service token uniquement (lecture)
router.get('/', chateauxController.list);
router.get('/:id', chateauxController.get);

// Routes avec service token + JWT (écriture)
router.post('/', authMiddleware, chateauxController.create);
router.put('/:id', authMiddleware, chateauxController.update);
router.delete('/:id', authMiddleware, chateauxController.delete);

export default router;