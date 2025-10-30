import { Button } from '@/common/components/ui/button';

interface QuizFeedHeaderProps {
  isAuthenticated: boolean;
  onCreateQuiz: () => void;
}

const QuizFeedHeader: React.FC<QuizFeedHeaderProps> = ({ isAuthenticated, onCreateQuiz }) => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4'>
      <div>
        <h1 className='text-3xl font-bold'>Discover Quizzes</h1>
        <p className='text-gray-600'>Find and join public quizzes on various topics</p>
      </div>
      {isAuthenticated && (
        <Button className='bg-quiz-primary hover:bg-quiz-secondary' onClick={onCreateQuiz}>
          Create New Quiz
        </Button>
      )}
    </div>
  );
};

export default QuizFeedHeader;
