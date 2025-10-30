import { Card, CardContent, CardHeader, CardTitle } from '@/common/components/ui/card';
import { Badge } from '@/common/components/ui/badge';
import { Button } from '@/common/components/ui/button';
import { History, Clock, Trophy, Eye } from 'lucide-react';

interface QuizAttempt {
  id: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: string;
  completedAt: string;
  difficulty: string;
}

interface SinglePlayerRecentAttemptsProps {
  attempts: QuizAttempt[];
  onViewDetails: (attemptId: string) => void;
}

const SinglePlayerRecentAttempts: React.FC<SinglePlayerRecentAttemptsProps> = ({
  attempts,
  onViewDetails,
}) => {
  if (attempts.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <History className='w-5 h-5 text-quiz-primary' />
            Recent Attempts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-center py-8'>
            <History className='w-12 h-12 text-gray-300 mx-auto mb-3' />
            <p className='text-gray-500 text-sm'>No attempts yet</p>
            <p className='text-gray-400 text-xs'>Your quiz history will appear here</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 text-green-700';
    if (score >= 60) return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <History className='w-5 h-5 text-quiz-primary' />
          Recent Attempts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-3 max-h-64 overflow-y-auto'>
          {attempts.map((attempt) => (
            <div
              key={attempt.id}
              className='flex items-center justify-between p-3 rounded-lg border bg-gray-50 hover:bg-gray-100 transition-colors'
            >
              <div className='flex-1'>
                <div className='flex items-center gap-2 mb-1'>
                  <Badge className={getScoreBadgeColor(attempt.score)}>{attempt.score}%</Badge>
                  <span className='text-sm text-gray-600'>
                    {attempt.correctAnswers}/{attempt.totalQuestions} correct
                  </span>
                </div>

                <div className='flex items-center gap-4 text-xs text-gray-500'>
                  <div className='flex items-center gap-1'>
                    <Clock className='w-3 h-3' />
                    <span>{attempt.timeSpent}</span>
                  </div>
                  <span>{new Date(attempt.completedAt).toLocaleDateString()}</span>
                </div>
              </div>

              <Button
                variant='ghost'
                size='sm'
                onClick={() => onViewDetails(attempt.id)}
                className='text-quiz-primary hover:text-quiz-secondary'
              >
                <Eye className='w-4 h-4' />
              </Button>
            </div>
          ))}
        </div>

        {attempts.length > 3 && (
          <div className='mt-3 pt-3 border-t text-center'>
            <Button variant='ghost' size='sm' className='text-quiz-primary'>
              View All Attempts
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SinglePlayerRecentAttempts;
