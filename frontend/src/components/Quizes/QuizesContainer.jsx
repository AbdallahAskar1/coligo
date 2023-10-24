import Card from "../Card";
import { Avatar } from '@mui/material';
import { Person, Timer } from '@mui/icons-material';


 const QuizList = ({ quizzes }) => {
  return (
    <Card>
      <div className="quiz-list">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="quiz">
            <div className="quiz-info">
              <div className="quiz-details">
           
                <div className="quiz-name"><Timer style={{width:'3rem',height:'2rem'}}></Timer>{quiz.title}</div>
                <div className="quiz-category">Course: {quiz.course}</div>
                <div className="quiz-category">Topic: {quiz.topic}</div>
                <div className="quiz-category">Due to: {quiz.dueto}</div>
              </div>
              <button className="start-quiz-button">Start Quiz</button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
export default QuizList;