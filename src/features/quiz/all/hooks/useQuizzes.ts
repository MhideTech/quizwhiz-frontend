import { useQuery } from '@tanstack/react-query';
import { getQuizzes } from '@/features/quiz/all/api';

export const useQuizzes = (searchTerm?: string) => {
  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: ['quizzes', searchTerm],
    queryFn: () => getQuizzes(searchTerm),
  });

  const quizzes = data?.data;

  return { quizzes, isPending, isSuccess, isError };
};
