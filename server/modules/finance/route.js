import express from "express";
import {
  getFinances,
  getFinance,
  createFinance,
  updateFinance,
  deleteFinance
} from './controller.js';

const router = express.Router();

router
  .route('/')
  .get(getFinances)
  .post(createFinance);

router
  .route('/:id')
  .get(getFinance)
  .put(updateFinance)
  .delete(deleteFinance);

export default router;