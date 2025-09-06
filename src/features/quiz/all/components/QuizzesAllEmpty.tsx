import { Button } from '@/common/components/ui/button';
import { Card, CardContent } from '@/common/components/ui/card';
import { FileQuestion, Plus } from 'lucide-react';

interface QuizzesAllEmptyProps {
  searchTerm: string;
  statusFilter: string;
  handleCreateQuiz: () => void;
}

const QuizzesAllEmpty: React.FC<QuizzesAllEmptyProps> = ({
  searchTerm,
  statusFilter,
  handleCreateQuiz,
}) => {
  return (
    <Card className='text-center py-16'>
      <CardContent>
        <FileQuestion className='w-16 h-16 mx-auto text-muted-foreground mb-4' />
        <h3 className='text-xl font-semibold mb-2'>No quizzes found</h3>
        <p className='text-muted-foreground mb-6'>
          {searchTerm || statusFilter !== 'All'
            ? 'Try adjusting your search or filters'
            : 'Create your first quiz to get started'}
        </p>
        {!searchTerm && statusFilter === 'All' && (
          <Button onClick={handleCreateQuiz}>
            <Plus className='w-4 h-4 mr-2' />
            Create Your First Quiz
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizzesAllEmpty;
