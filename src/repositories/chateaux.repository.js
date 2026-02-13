import { Chateau } from '../models/chateau.model.js';
import { Image } from '../models/image.model.js';

export const chateauxRepository = {
  findAll() {
    return Chateau.findAll({
      include: [{ model: Image, as: 'image' }],
      order: [['Chateau_Id', 'ASC']],
    });
  },

  findById(id) {
    return Chateau.findByPk(id, {
      include: [{ model: Image, as: 'image' }],
    });
  },

  create(data) {
    return Chateau.create(data);
  },

  update(id, data) {
    return Chateau.update(data, { where: { Chateau_Id: id } });
  },

  delete(id) {
    return Chateau.destroy({ where: { Chateau_Id: id } });
  },
};
