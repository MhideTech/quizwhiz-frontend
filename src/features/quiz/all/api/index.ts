
import axiosInstance from '@/common/api/axiosInstance';

export const getQuizzes = async (searchTerm?: string) => {
  const response = await axiosInstance.get('/quiz', {
    params: {
      search: searchTerm,
    },
  });
  return response.data;
};
