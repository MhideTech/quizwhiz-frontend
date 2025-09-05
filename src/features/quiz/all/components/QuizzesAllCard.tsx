import { Card, CardContent, CardHeader, CardTitle } from '@/common/components/ui/card';
import { Badge } from '@/common/components/ui/badge';
import { Button } from '@/common/components/ui/button';
import { Edit, Trash2, Plus, Users, Lock, Calendar, FileQuestion } from 'lucide-react';

interface Quiz {
  id: string;
  title: string;
  description: string | null;
  creatorId: string;
  image: string | null;
  tags: string[];
  visibility: 'PUBLIC' | 'PRIVATE';
  createdAt: string;
  isDeleted: boolean;
}

interface QuizzesAllCardProps {
  quiz: Quiz;
  handleEditQuiz: (quizId: string) => void;
  handleAddQuestions: (quizId: string) => void;
  handleDeleteQuiz: (quizId: string) => void;
  formatDate: (dateString: string) => string;
}

const QuizzesAllCard: React.FC<QuizzesAllCardProps> = ({
  quiz,
  handleEditQuiz,
  handleAddQuestions,
  handleDeleteQuiz,
  formatDate,
}) => {
  return (
    <Card key={quiz.id} className='hover:shadow-lg transition-shadow'>
      <CardHeader className='pb-3'>
        <div className='flex items-start justify-between'>
          <CardTitle className='text-lg line-clamp-2'>{quiz.title}</CardTitle>
          <div className='flex gap-2'>
            <Badge
              variant={quiz.visibility === 'PUBLIC' ? 'default' : 'secondary'}
              className='flex items-center gap-1'
            >
              {quiz.visibility === 'PUBLIC' ? (
                <Users className='w-3 h-3' />
              ) : (
                <Lock className='w-3 h-3' />
              )}
              {quiz.visibility}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className='pt-0'>
        <div className='space-y-3'>
          {/* Quiz Stats */}
          <div className='grid grid-cols-2 gap-4 text-sm text-muted-foreground'>
            <div className='flex items-center gap-1'>
              <Calendar className='w-4 h-4' />
              {formatDate(quiz.createdAt)}
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex gap-2'>
            <Button
              variant='outline'
              size='sm'
              onClick={() => handleEditQuiz(quiz.id)}
              className='flex-1'
            >
              <Edit className='w-4 h-4 mr-1' />
              Edit
            </Button>

            <Button
              variant='default'
              size='sm'
              onClick={() => handleAddQuestions(quiz.id)}
              className='flex-1'
            >
              <Plus className='w-4 h-4 mr-1' />
              Questions
            </Button>

            <Button variant='destructive' size='sm' onClick={() => handleDeleteQuiz(quiz.id)}>
              <Trash2 className='w-4 h-4' />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizzesAllCard;
