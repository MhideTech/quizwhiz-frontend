
import { Button } from '@/common/components/ui/button';
import { Plus } from 'lucide-react';

interface QuizzesAllHeaderProps {
  handleCreateQuiz: () => void;
}

const QuizzesAllHeader: React.FC<QuizzesAllHeaderProps> = ({ handleCreateQuiz }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-foreground">All Quizzes</h1>
        <p className="text-muted-foreground">Manage and organize all your quizzes</p>
      </div>
      <Button onClick={handleCreateQuiz} className="bg-primary hover:bg-primary/90">
        <Plus className="w-4 h-4 mr-2" />
        Create New Quiz
      </Button>
    </div>
  );
};

export default QuizzesAllHeader;
