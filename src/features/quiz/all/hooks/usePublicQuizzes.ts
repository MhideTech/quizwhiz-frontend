import { useQuery } from '@tanstack/react-query';
import { getPublicQuizzes } from '@/features/quiz/all/api';

interface UsePublicQuizzesParams {
  search?: string;
  category?: string;
  difficulty?: string;
  sortBy?: string;
  limit?: number;
  offset?: number;
}

export const usePublicQuizzes = (params?: UsePublicQuizzesParams) => {
  const { data, isPending, isSuccess, isError, refetch } = useQuery({
    queryKey: ['publicQuizzes', params],
    queryFn: () => getPublicQuizzes(params),
  });

  const quizzes = data?.data || [];
  const meta = data?.meta;

  return { quizzes, meta, isPending, isSuccess, isError, refetch };
};
