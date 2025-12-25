import express from "express";
import {
  getCharacters,
  getCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter
} from './controller.js';

const router = express.Router();

router
  .route('/')
  .get(getCharacters)
  .post(createCharacter);

router
  .route('/:id')
  .get(getCharacter)
  .put(updateCharacter)
  .delete(deleteCharacter);

export default router;