import axiosInstance from '@/common/api/axiosInstance';
import { CreateQuizFormType, QuestionFormData } from './types';
const quizRoute = 'quiz';

export async function createQuiz(quizData: CreateQuizFormType) {
  const { data } = await axiosInstance.post(quizRoute, quizData);
  return data;
}

export async function getQuiz(id: string) {
  const { data } = await axiosInstance.get(`${quizRoute}/${id}`);
  return data;
}

export async function addQuestionToQuiz(quizId: string, question: QuestionFormData) {
  const { data } = await axiosInstance.post(`${quizRoute}/${quizId}/question`, question);
  return data;
}

export async function getQuestions(quizId: string) {
  const { data } = await axiosInstance.get(`${quizRoute}/${quizId}/question`);
  return data;
}
