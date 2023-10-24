import Quiz from '../models/quiz.js';

export const createQuiz = async (req, res) => {
  try {
    const { course, topic, dueDate } = req.body;
    const quiz = new Quiz({ course, topic, dueDate });
    const savedQuiz = await quiz.save();
    res.json(savedQuiz);
  } catch (error) {
    res.status(500).json({ error: 'Error creating the quiz' });
  }
};

export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching quizzes' });
  }
};

export const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching the quiz' });
  }
};

export const updateQuiz = async (req, res) => {
  try {
    const { course, topic, dueDate } = req.body;
    const updatedQuiz = await Quiz.findByIdAndUpdate(
      req.params.quizId,
      { course, topic, dueDate },
      { new: true }
    );
    res.json(updatedQuiz);
  } catch (error) {
    res.status(500).json({ error: 'Error updating the quiz' });
  }
};

export const deleteQuiz = async (req, res) => {
  try {
    await Quiz.findByIdAndRemove(req.params.quizId);
    res.json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the quiz' });
  }
};
