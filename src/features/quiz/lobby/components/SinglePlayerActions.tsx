import { Button } from '@/common/components/ui/button';
import { Card, CardContent } from '@/common/components/ui/card';
import { Play, RotateCcw, Target, TrendingUp } from 'lucide-react';

interface PersonalBest {
  score: number;
  time: string;
  date: string;
}

interface SinglePlayerActionsProps {
  onStartQuiz: () => void;
  onPracticeMode: () => void;
  onBack: () => void;
  personalBest?: PersonalBest;
  hasAttempted: boolean;
}

const SinglePlayerActions: React.FC<SinglePlayerActionsProps> = ({
  onStartQuiz,
  onPracticeMode,
  onBack,
  personalBest,
  hasAttempted,
}) => {
  return (
    <div className='space-y-4'>
      {/* Personal Best */}
      {personalBest && (
        <Card>
          <CardContent className='p-4'>
            <div className='text-center space-y-2'>
              <div className='flex items-center justify-center gap-2 mb-2'>
                <TrendingUp className='w-4 h-4 text-quiz-primary' />
                <span className='text-sm font-medium text-gray-700'>Your Best Score</span>
              </div>
              <div className='text-2xl font-bold text-quiz-primary'>{personalBest.score}%</div>
              <div className='text-xs text-gray-500'>
                Completed in {personalBest.time} •{' '}
                {new Date(personalBest.date).toLocaleDateString()}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className='space-y-3'>
        <Button
          onClick={onStartQuiz}
          className='w-full bg-quiz-primary hover:bg-quiz-secondary text-white py-4 text-lg font-medium'
          size='lg'
        >
          <Play className='w-5 h-5 mr-2' />
          {hasAttempted ? 'Retake Quiz' : 'Start Quiz'}
        </Button>

        <Button
          onClick={onPracticeMode}
          variant='outline'
          className='w-full border-quiz-primary text-quiz-primary hover:bg-quiz-primary hover:text-white py-3'
          size='lg'
        >
          <Target className='w-5 h-5 mr-2' />
          Practice Mode
        </Button>

        <Button
          variant='outline'
          onClick={onBack}
          className='w-full border-gray-200 text-gray-600 hover:bg-gray-50'
        >
          <RotateCcw className='w-4 h-4 mr-2' />
          Back to Quiz Feed
        </Button>
      </div>

      {/* Practice Mode Info */}
      <div className='text-center'>
        <p className='text-xs text-gray-500 leading-relaxed'>
          Practice mode lets you review questions without time limits and see explanations
          immediately.
        </p>
      </div>
    </div>
  );
};

export default SinglePlayerActions;
