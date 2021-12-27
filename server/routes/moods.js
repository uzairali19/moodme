import express from 'express';
import {
  getMoods,
  createMoods,
  deleteMood,
  likeMood,
} from '../controller/moods.js';

const moodsRouter = express.Router();

moodsRouter.get('/', getMoods);
moodsRouter.post('/', createMoods);
moodsRouter.delete('/:id', deleteMood);
moodsRouter.patch('/:id/likeMood', likeMood);

export default moodsRouter;
