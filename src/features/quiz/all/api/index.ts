import axiosInstance from '@/common/api/axiosInstance';

export const getQuizzes = async (searchTerm?: string) => {
  const response = await axiosInstance.get('/quiz', {
    params: {
      search: searchTerm,
    },
  });
  return response.data;
};

export const getPublicQuizzes = async (params?: {
  search?: string;
  category?: string;
  difficulty?: string;
  sortBy?: string;
  limit?: number;
  offset?: number;
}) => {
  const response = await axiosInstance.get('/quiz/public', {
    params,
  });
  return response.data;
};
