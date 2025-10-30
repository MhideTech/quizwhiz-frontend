import { Button } from '@/common/components/ui/button';
import QuizFeedCard from './QuizFeedCard';

interface Quiz {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  questions: number;
  creator: string;
  createdAt: string;
  playersJoined: number;
  thumbnail?: string;
}

interface QuizFeedGridProps {
  quizzes: Quiz[];
  onPlay: (quizId: string) => void;
  onLoadMore: () => void;
  formatDate: (dateString: string) => string;
  getDifficultyColor: (difficulty: string) => string;
  showLoadMore?: boolean;
}

const QuizFeedGrid: React.FC<QuizFeedGridProps> = ({
  quizzes,
  onPlay,
  onLoadMore,
  formatDate,
  getDifficultyColor,
  showLoadMore = true,
}) => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {quizzes.map((quiz) => (
          <QuizFeedCard
            key={quiz.id}
            quiz={quiz}
            onPlay={onPlay}
            formatDate={formatDate}
            getDifficultyColor={getDifficultyColor}
          />
        ))}
      </div>

      {showLoadMore && (
        <div className='mt-10 text-center'>
          <Button variant='outline' className='px-8' onClick={onLoadMore}>
            Load More Quizzes
          </Button>
        </div>
      )}
    </>
  );
};

export default QuizFeedGrid;
