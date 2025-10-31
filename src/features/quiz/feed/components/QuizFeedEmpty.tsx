interface QuizFeedEmptyProps {
  searchQuery: string;
  selectedCategory: string;
  selectedDifficulty: string;
}

const QuizFeedEmpty: React.FC<QuizFeedEmptyProps> = ({
  searchQuery,
  selectedCategory,
  selectedDifficulty,
}) => {
  const hasFilters = searchQuery || selectedCategory !== 'all' || selectedDifficulty !== 'all';

  return (
    <div className='flex justify-center items-center py-12'>
      <div className='text-center'>
        <div className='text-gray-500 text-lg mb-2'>
          {hasFilters ? 'No quizzes found matching your criteria' : 'No quizzes available'}
        </div>
        {hasFilters && (
          <div className='text-gray-400 text-sm'>Try adjusting your search or filter options</div>
        )}
      </div>
    </div>
  );
};

export default QuizFeedEmpty;
