import { Card, CardContent, CardHeader, CardTitle } from '@/common/components/ui/card';
import { Badge } from '@/common/components/ui/badge';
import { Clock, Users, HelpCircle, Trophy } from 'lucide-react';

interface QuizInfo {
  questionCount: number;
  estimatedTime: string;
  maxPlayers: number;
  pointsPerQuestion: number;
  creator: string;
  description?: string;
}

interface LobbyQuizInfoProps {
  quizInfo: QuizInfo;
}

const LobbyQuizInfo: React.FC<LobbyQuizInfoProps> = ({ quizInfo }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <HelpCircle className='w-5 h-5 text-quiz-primary' />
          Quiz Information
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {quizInfo.description && <p className='text-gray-600 text-sm'>{quizInfo.description}</p>}

        <div className='grid grid-cols-2 gap-4'>
          <div className='flex items-center gap-2'>
            <HelpCircle className='w-4 h-4 text-gray-500' />
            <span className='text-sm text-gray-600'>Questions</span>
            <Badge variant='secondary'>{quizInfo.questionCount}</Badge>
          </div>

          <div className='flex items-center gap-2'>
            <Clock className='w-4 h-4 text-gray-500' />
            <span className='text-sm text-gray-600'>Duration</span>
            <Badge variant='secondary'>{quizInfo.estimatedTime}</Badge>
          </div>

          <div className='flex items-center gap-2'>
            <Users className='w-4 h-4 text-gray-500' />
            <span className='text-sm text-gray-600'>Max Players</span>
            <Badge variant='secondary'>{quizInfo.maxPlayers}</Badge>
          </div>

          <div className='flex items-center gap-2'>
            <Trophy className='w-4 h-4 text-gray-500' />
            <span className='text-sm text-gray-600'>Points</span>
            <Badge variant='secondary'>{quizInfo.pointsPerQuestion}/question</Badge>
          </div>
        </div>

        <div className='pt-2 border-t'>
          <p className='text-xs text-gray-500'>
            Created by <span className='font-medium'>{quizInfo.creator}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LobbyQuizInfo;
