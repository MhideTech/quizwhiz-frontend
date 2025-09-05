
import { Input } from '@/common/components/ui/input';
import { Button } from '@/common/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { Card, CardContent } from '@/common/components/ui/card';

interface QuizzesAllFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  visibilityFilter: string;
  setVisibilityFilter: (status: string) => void;
}

const QuizzesAllFilters: React.FC<QuizzesAllFiltersProps> = ({ searchTerm, setSearchTerm, visibilityFilter, setVisibilityFilter }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search quizzes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {['All', 'PUBLIC', 'PRIVATE'].map((visibility) => (
              <Button
                key={visibility}
                variant={visibilityFilter === visibility ? 'default' : 'outline'}
                size="sm"
                onClick={() => setVisibilityFilter(visibility)}
              >
                <Filter className="w-4 h-4 mr-2" />
                {visibility}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizzesAllFilters;
