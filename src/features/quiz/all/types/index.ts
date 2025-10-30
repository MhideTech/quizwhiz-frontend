export interface PublicQuiz {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: number;
  playersJoined: number;
  createdAt: string;
  creator: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  thumbnail: string;
  tags: string[];
}

export interface QuizFilters {
  search?: string;
  category?: string;
  difficulty?: string;
  sortBy?: string;
}

export interface FilterOption {
  value: string;
  label: string;
}

export interface QuizFeedState {
  searchQuery: string;
  selectedCategory: string;
  selectedDifficulty: string;
  selectedSort: string;
  isCreateModalOpen: boolean;
}
