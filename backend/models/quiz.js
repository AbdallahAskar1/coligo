import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  course: String,
  topic: String,
  dueDate: Date,
});

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;
