import axiosInstance from '@/common/api/axiosInstance';
import { CreateQuizFormType } from './types';

export async function createQuiz(quizData: CreateQuizFormType) {
  const { data } = await axiosInstance.post('quiz', quizData);
  return data;
}
