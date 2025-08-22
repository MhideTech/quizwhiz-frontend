import { useQuery } from '@tanstack/react-query';
import { getQuiz } from '@/features/quiz/manage/api';
import { useLocation } from 'react-router-dom';
import { Location } from 'react-router-dom';
interface UseQuizType {
  enabled?: boolean;
  quizId: string;
  locationState?: unknown;
}
export const useQuiz = function ({ enabled, quizId, locationState }: UseQuizType) {
  const { data, isSuccess, isPending, isError } = useQuery({
    queryKey: ['quiz', quizId],
    queryFn: () => getQuiz(quizId),
    enabled,
  });

  const fetchedQuizData = data?.data;

  const quizData = !enabled ? locationState : isSuccess ? fetchedQuizData : null;

  return { quizData, isSuccess, isPending };
};
