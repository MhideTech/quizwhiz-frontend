import { FilterOption } from '../types';

export const CATEGORIES: FilterOption[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'science', label: 'Science' },
  { value: 'geography', label: 'Geography' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'education', label: 'Education' },
  { value: 'history', label: 'History' },
  { value: 'literature', label: 'Literature' },
];

export const SORT_OPTIONS: FilterOption[] = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'questions', label: 'Most Questions' },
];

export const DIFFICULTY_OPTIONS: FilterOption[] = [
  { value: 'all', label: 'All Difficulties' },
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
];

export const POPULAR_TAGS = ['Popular Now', 'Recently Added', 'Short Quizzes', 'Staff Picks'];
