import { Router } from 'express';
import { chateauxController } from '../controllers/chateaux.controller.js';

const router = Router();

router.get('/', chateauxController.list);
router.get('/:id', chateauxController.get);
router.post('/', chateauxController.create);
router.put('/:id', chateauxController.update);
router.delete('/:id', chateauxController.delete);

export default router;