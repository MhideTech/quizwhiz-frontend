import { useState } from 'react';
import { QuizFeedState } from '../types';

export const useQuizFeedState = () => {
  const [state, setState] = useState<QuizFeedState>({
    searchQuery: '',
    selectedCategory: 'all',
    selectedDifficulty: 'all',
    selectedSort: 'recent',
    isCreateModalOpen: false,
  });

  const updateState = (updates: Partial<QuizFeedState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const setSearchQuery = (searchQuery: string) => updateState({ searchQuery });
  const setSelectedCategory = (selectedCategory: string) => updateState({ selectedCategory });
  const setSelectedDifficulty = (selectedDifficulty: string) => updateState({ selectedDifficulty });
  const setSelectedSort = (selectedSort: string) => updateState({ selectedSort });
  const setIsCreateModalOpen = (isCreateModalOpen: boolean) => updateState({ isCreateModalOpen });

  return {
    ...state,
    setSearchQuery,
    setSelectedCategory,
    setSelectedDifficulty,
    setSelectedSort,
    setIsCreateModalOpen,
  };
};
