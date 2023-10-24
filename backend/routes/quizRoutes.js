import express from 'express';
import {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz,
} from '../controllers/quizController.js';

const router = express.Router();

router.post('/', createQuiz); 
router.get('/', getAllQuizzes); 
router.get('/:quizId', getQuizById); 
router.put('/:quizId', updateQuiz); 
router.delete('/:quizId', deleteQuiz); 

export default router;
