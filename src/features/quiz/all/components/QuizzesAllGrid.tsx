
import QuizzesAllCard from './QuizzesAllCard';

interface Quiz {
  id: string;
  title: string;
  createdAt: string;
  visibility: string;
  questionCount: number;
  participants: number;
  status: string;
}

interface QuizzesAllGridProps {
  quizzes: Quiz[];
  handleEditQuiz: (quizId: string) => void;
  handleAddQuestions: (quizId: string) => void;
  handleDeleteQuiz: (quizId: string) => void;
  formatDate: (dateString: string) => string;
}

const QuizzesAllGrid: React.FC<QuizzesAllGridProps> = ({ quizzes, handleEditQuiz, handleAddQuestions, handleDeleteQuiz, formatDate }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {quizzes.map((quiz) => (
        <QuizzesAllCard
          key={quiz.id}
          quiz={quiz}
          handleEditQuiz={handleEditQuiz}
          handleAddQuestions={handleAddQuestions}
          handleDeleteQuiz={handleDeleteQuiz}
          formatDate={formatDate}
        />
      ))}
    </div>
  );
};

export default QuizzesAllGrid;
