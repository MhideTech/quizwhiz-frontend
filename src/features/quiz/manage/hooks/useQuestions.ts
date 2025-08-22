import { useQuery } from '@tanstack/react-query';
import { getQuestions } from '@/features/quiz/manage/api';

interface useQuestionsType {
  quizId: string;
}
export const useQuestions = function ({ quizId }: useQuestionsType) {
  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: ['questions', quizId],
    queryFn: () => getQuestions(quizId),
  });

  const questions = data?.data;

  return { questions, isPending, isSuccess, isError };
};
