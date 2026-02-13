import { chateauxService } from '../services/chateaux.service.js';

export const chateauxController = {
  list: async (req, res, next) => {
    try {
      const data = await chateauxService.list();
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
  },

  get: async (req, res, next) => {
    try {
      const data = await chateauxService.get(req.params.id);
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
  },

  create: async (req, res, next) => {
    try {
      const data = await chateauxService.create(req.body);
      res.status(201).json(data);
    } catch (e) {
      next(e);
    }
  },

  update: async (req, res, next) => {
    try {
      const data = await chateauxService.update(req.params.id, req.body);
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
  },

  delete: async (req, res, next) => {
    try {
      const data = await chateauxService.delete(req.params.id);
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
  },
};
