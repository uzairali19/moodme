import express from 'express';
import { getMoods } from '../controllers/moodsController.js';

const moodsRouter = express.Router;

moodsRouter.get('/', getMoods);

export default moodsRouter;
