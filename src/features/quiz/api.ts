import axiosInstance from '@/common/api/axiosInstance';
import { CreateQuizFormType, QuestionFormData } from './types';
const quizRoute = 'quiz';

export async function createQuiz(quizData: CreateQuizFormType) {
  const { data } = await axiosInstance.post(quizRoute, quizData);
  return data;
}

export async function addQuestionToQuiz(questionID: string, question: QuestionFormData) {
  const { data } = await axiosInstance.post(`${quizRoute}/${questionID}/question`, question);
  return data;
}
