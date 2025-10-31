import { Input } from '@/common/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/common/components/ui/select';
import { Badge } from '@/common/components/ui/badge';
import { Search } from 'lucide-react';

interface QuizFeedFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
  selectedSort: string;
  setSelectedSort: (sort: string) => void;
  categories: Array<{ value: string; label: string }>;
  difficultyOptions: Array<{ value: string; label: string }>;
  sortOptions: Array<{ value: string; label: string }>;
}

const QuizFeedFilters: React.FC<QuizFeedFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedSort,
  setSelectedSort,
  categories,
  difficultyOptions,
  sortOptions,
}) => {
  return (
    <div className='bg-white rounded-xl shadow-sm p-6 mb-8'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
        <div className='md:col-span-5 relative'>
          <Search className='absolute left-3 top-3 h-4 w-4 text-gray-400' />
          <Input
            placeholder='Search quizzes...'
            className='pl-10'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className='md:col-span-3'>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder='Category' />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='md:col-span-2'>
          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder='Difficulty' />
            </SelectTrigger>
            <SelectContent>
              {difficultyOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='md:col-span-2'>
          <Select value={selectedSort} onValueChange={setSelectedSort}>
            <SelectTrigger>
              <SelectValue placeholder='Sort By' />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='flex flex-wrap gap-2 mt-4'>
        <Badge variant='outline' className='bg-gray-100'>
          Popular Now
        </Badge>
        <Badge variant='outline' className='bg-gray-100'>
          Recently Added
        </Badge>
        <Badge variant='outline' className='bg-gray-100'>
          Short Quizzes
        </Badge>
        <Badge variant='outline' className='bg-gray-100'>
          Staff Picks
        </Badge>
      </div>
    </div>
  );
};

export default QuizFeedFilters;
