import axiosInstance from '@/common/api/axiosInstance';
import { CreateQuizFormType } from './types';
const quizRoute = 'quiz';

export async function createQuiz(quizData: CreateQuizFormType) {
  const { data } = await axiosInstance.post(quizRoute, quizData);
  return data;
}
