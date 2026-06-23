import express, { Router } from 'express';
import { authMiddleware } from '../middleware/auth';
import {
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard,
  duplicateCard,
  downloadCard,
} from '../controllers/cardController';

const router: Router = express.Router();

// Protected routes
router.get('/', authMiddleware, getAllCards);
router.get('/:cardId', getCardById);
router.post('/', authMiddleware, createCard);
router.put('/:cardId', authMiddleware, updateCard);
router.delete('/:cardId', authMiddleware, deleteCard);
router.post('/:cardId/duplicate', authMiddleware, duplicateCard);
router.get('/:cardId/download', authMiddleware, downloadCard);

export default router;
