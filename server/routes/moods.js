import express from 'express';
import { getMoods, createMoods } from '../controller/moods.js';

const moodsRouter = express.Router();

moodsRouter.get('/', getMoods);
moodsRouter.post('/', createMoods);

export default moodsRouter;
