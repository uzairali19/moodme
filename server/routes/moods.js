import express from 'express';
import { getMoods } from '../controller/moods.js';

const moodsRouter = express.Router();

moodsRouter.get('/', getMoods);
// moodsRouter.post('/', createMoods);

export default moodsRouter;
