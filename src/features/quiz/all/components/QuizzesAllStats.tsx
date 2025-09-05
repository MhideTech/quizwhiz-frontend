
import { Card, CardContent } from '@/common/components/ui/card';
import { FileQuestion, Users, Lock } from 'lucide-react';

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

interface QuizzesAllStatsProps {
  quizzes: Quiz[];
}

const QuizzesAllStats: React.FC<QuizzesAllStatsProps> = ({ quizzes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FileQuestion className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">{quizzes.length}</p>
              <p className="text-sm text-muted-foreground">Total Quizzes</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <Users className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">
                {quizzes.filter((q) => q.visibility === 'PUBLIC').length}
              </p>
              <p className="text-sm text-muted-foreground">Public</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Lock className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">
                {quizzes.filter((q) => q.visibility === 'PRIVATE').length}
              </p>
              <p className="text-sm text-muted-foreground">Private</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizzesAllStats;
