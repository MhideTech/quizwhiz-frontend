import { useState } from 'react';
import {
  QuizzesAllHeader,
  QuizzesAllFilters,
  QuizzesAllStats,
  QuizzesAllGrid,
  QuizzesAllEmpty,
} from '@/features/quiz/all/components';
import { useQuizzes } from '@/features/quiz/all/hooks';

const QuizzesAll = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibilityFilter, setVisibilityFilter] = useState('All');

  const { quizzes, isPending, isError } = useQuizzes(searchTerm.toLowerCase());

  const handleCreateQuiz = () => {
    console.log('Create new quiz clicked');
  };

  const handleEditQuiz = (quizId: string) => {
    console.log('Edit quiz:', quizId);
  };

  const handleAddQuestions = (quizId: string) => {
    console.log('Add questions to quiz:', quizId);
  };

  const handleDeleteQuiz = (quizId: string) => {
    console.log('Delete quiz:', quizId);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const filteredQuizzes =
    quizzes?.filter((quiz: typeof quizzes) => {
      const matchesVisibility = visibilityFilter === 'All' || quiz.visibility === visibilityFilter;
      return matchesVisibility;
    }) || [];

  if (isPending) {
    return <div>Loading quizzes...</div>; // Or a proper loading spinner
  }

  if (isError) {
    return <div>Error loading quizzes.</div>; // Or a proper error message
  }

  return (
    <div className='p-6 space-y-6'>
      <QuizzesAllHeader handleCreateQuiz={handleCreateQuiz} />
      <QuizzesAllFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        visibilityFilter={visibilityFilter}
        setVisibilityFilter={setVisibilityFilter}
      />
      <QuizzesAllStats quizzes={quizzes || []} />
      {filteredQuizzes.length > 0 ? (
        <QuizzesAllGrid
          quizzes={filteredQuizzes}
          handleEditQuiz={handleEditQuiz}
          handleAddQuestions={handleAddQuestions}
          handleDeleteQuiz={handleDeleteQuiz}
          formatDate={formatDate}
        />
      ) : (
        <QuizzesAllEmpty
          searchTerm={searchTerm}
          statusFilter={visibilityFilter}
          handleCreateQuiz={handleCreateQuiz}
        />
      )}
    </div>
  );
};

export default QuizzesAll;
