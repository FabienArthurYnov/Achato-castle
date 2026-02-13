import { chateauxRepository } from '../repositories/chateaux.repository.js';
import { env } from '../config/env.js';

const toImageDto = (img) => ({
  id: img.Image_Id,
  name: img.Image_Name,
  link: `${env.fileServiceUrl}${img.Image_Link}`,
  alt: img.Image_Alt,
});

const toChateauDto = (c) => ({
  id: c.Chateau_Id,
  name: c.Chateau_Name,
  price: c.Chateau_Price,
  adresse: c.Chateau_Adresse,
  size: c.Chateau_Size,
  rate: c.Chateau_Rate,
  userId: c.User_Id,
  image: c.image ? toImageDto(c.image) : null,
});

export const chateauxService = {
  async list() {
    const rows = await chateauxRepository.findAll();
    return rows.map(toChateauDto);
  },

  async get(id) {
    const row = await chateauxRepository.findById(id);
    if (!row) {
      const err = new Error('Château introuvable');
      err.statusCode = 404;
      throw err;
    }
    return toChateauDto(row);
  },

  async create(data) {
    const row = await chateauxRepository.create(data);
    return { id: row.Chateau_Id, message: 'Château créé' };
  },

  async update(id, data) {
    const [updated] = await chateauxRepository.update(id, data);
    if (!updated) {
      const err = new Error('Château introuvable');
      err.statusCode = 404;
      throw err;
    }
    return { message: 'Château mis à jour' };
  },

  async delete(id) {
    const deleted = await chateauxRepository.delete(id);
    if (!deleted) {
      const err = new Error('Château introuvable');
      err.statusCode = 404;
      throw err;
    }
    return { message: 'Château supprimé' };
  },
};
