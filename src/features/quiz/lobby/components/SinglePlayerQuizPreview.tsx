import { Card, CardContent, CardHeader, CardTitle } from '@/common/components/ui/card';
import { Badge } from '@/common/components/ui/badge';
import { Clock, HelpCircle, Trophy, User, Calendar, Eye } from 'lucide-react';

interface QuizPreviewData {
  questionCount: number;
  estimatedTime: string;
  pointsPerQuestion: number;
  creator: string;
  createdAt: string;
  description?: string;
  totalPlays: number;
  averageScore: number;
  tags?: string[];
}

interface SinglePlayerQuizPreviewProps {
  quizData: QuizPreviewData;
}

const SinglePlayerQuizPreview: React.FC<SinglePlayerQuizPreviewProps> = ({ quizData }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Eye className='w-5 h-5 text-quiz-primary' />
          Quiz Preview
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {quizData.description && (
          <div className='p-3 bg-gray-50 rounded-lg'>
            <p className='text-gray-700 text-sm leading-relaxed'>{quizData.description}</p>
          </div>
        )}

        <div className='grid grid-cols-2 gap-4'>
          <div className='flex items-center gap-2'>
            <HelpCircle className='w-4 h-4 text-gray-500' />
            <span className='text-sm text-gray-600'>Questions</span>
            <Badge variant='secondary'>{quizData.questionCount}</Badge>
          </div>

          <div className='flex items-center gap-2'>
            <Clock className='w-4 h-4 text-gray-500' />
            <span className='text-sm text-gray-600'>Duration</span>
            <Badge variant='secondary'>{quizData.estimatedTime}</Badge>
          </div>

          <div className='flex items-center gap-2'>
            <Trophy className='w-4 h-4 text-gray-500' />
            <span className='text-sm text-gray-600'>Points</span>
            <Badge variant='secondary'>{quizData.pointsPerQuestion}/question</Badge>
          </div>

          <div className='flex items-center gap-2'>
            <User className='w-4 h-4 text-gray-500' />
            <span className='text-sm text-gray-600'>Plays</span>
            <Badge variant='secondary'>{quizData.totalPlays.toLocaleString()}</Badge>
          </div>
        </div>

        {/* Quiz Stats */}
        <div className='pt-3 border-t'>
          <div className='flex justify-between items-center mb-2'>
            <span className='text-sm text-gray-600'>Average Score</span>
            <span className='text-sm font-medium text-quiz-primary'>{quizData.averageScore}%</span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <div
              className='bg-quiz-primary h-2 rounded-full transition-all duration-300'
              style={{ width: `${quizData.averageScore}%` }}
            ></div>
          </div>
        </div>

        {/* Tags */}
        {quizData.tags && quizData.tags.length > 0 && (
          <div className='pt-3 border-t'>
            <p className='text-xs text-gray-500 mb-2'>Tags</p>
            <div className='flex flex-wrap gap-1'>
              {quizData.tags.map((tag, index) => (
                <Badge key={index} variant='outline' className='text-xs'>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className='pt-2 border-t'>
          <div className='flex items-center justify-between text-xs text-gray-500'>
            <div className='flex items-center gap-1'>
              <User className='w-3 h-3' />
              <span>
                Created by <span className='font-medium'>{quizData.creator}</span>
              </span>
            </div>
            <div className='flex items-center gap-1'>
              <Calendar className='w-3 h-3' />
              <span>{new Date(quizData.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SinglePlayerQuizPreview;
