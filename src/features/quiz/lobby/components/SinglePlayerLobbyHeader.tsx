import { Button } from '@/common/components/ui/button';
import { Badge } from '@/common/components/ui/badge';
import { ArrowLeft, Share2, Bookmark, BookmarkCheck } from 'lucide-react';

interface SinglePlayerLobbyHeaderProps {
  quizTitle: string;
  quizCategory: string;
  difficulty: string;
  isBookmarked: boolean;
  onBack: () => void;
  onShare: () => void;
  onToggleBookmark: () => void;
}

const SinglePlayerLobbyHeader: React.FC<SinglePlayerLobbyHeaderProps> = ({
  quizTitle,
  quizCategory,
  difficulty,
  isBookmarked,
  onBack,
  onShare,
  onToggleBookmark,
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'hard':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className='bg-white rounded-xl shadow-sm p-6 mb-6'>
      <div className='flex items-center justify-between mb-4'>
        <Button variant='ghost' onClick={onBack} className='p-2'>
          <ArrowLeft className='w-5 h-5' />
        </Button>
        <div className='flex gap-2'>
          <Button variant='outline' size='sm' onClick={onToggleBookmark}>
            {isBookmarked ? (
              <BookmarkCheck className='w-4 h-4 mr-2' />
            ) : (
              <Bookmark className='w-4 h-4 mr-2' />
            )}
            {isBookmarked ? 'Saved' : 'Save'}
          </Button>
          <Button variant='outline' size='sm' onClick={onShare}>
            <Share2 className='w-4 h-4 mr-2' />
            Share
          </Button>
        </div>
      </div>

      <div className='text-center'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>{quizTitle}</h1>
        <div className='flex items-center justify-center gap-3'>
          <Badge variant='outline' className='text-sm'>
            {quizCategory}
          </Badge>
          <Badge className={getDifficultyColor(difficulty)}>{difficulty}</Badge>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayerLobbyHeader;
