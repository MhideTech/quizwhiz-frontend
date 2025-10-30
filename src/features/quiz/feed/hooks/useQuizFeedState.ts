import { useState } from 'react';

export const useQuizFeedState = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedSort, setSelectedSort] = useState('recent');

  const handleCreateQuiz = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsCreateModalOpen(false);
  };

  const handlePlay = (quizId: string) => {
    console.log('Play quiz:', quizId);
    // Add navigation logic here
  };

  const handleLoadMore = () => {
    console.log('Load more quizzes');
    // Add load more logic here
  };

  return {
    isCreateModalOpen,
    searchQuery,
    selectedCategory,
    selectedDifficulty,
    selectedSort,
    setSearchQuery,
    setSelectedCategory,
    setSelectedDifficulty,
    setSelectedSort,
    handleCreateQuiz,
    handleCloseModal,
    handlePlay,
    handleLoadMore,
  };
};

export default useQuizFeedState;
