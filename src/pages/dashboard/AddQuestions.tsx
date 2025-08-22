import AddQuestionsForm from '@/features/quiz/manage/components/AddQuestionsForm';
import PreviouslyAddedQuestions from '@/features/quiz/manage/components/PreviouslyAddedQuestions';
import { useQuestions, useQuiz, useShouldFetch } from '@/features/quiz/manage/hooks';
import AddQuestionsHeader from '@/features/quiz/manage/components/AddQuestionsHeader';

const AddQuestion = () => {
  // todo find a better name for this
  const { id, shouldFetch, locationState } = useShouldFetch();
  const {
    quizData,
    isSuccess: fetchIsSuccess,
    isPending: fetchPending,
  } = useQuiz({ quizId: id, enabled: shouldFetch, locationState });

  const {
    questions,
    isSuccess: questionSuccess,
    isPending: questionPending,
  } = useQuestions({ quizId: id });

  console.log(questions);
  console.log(quizData);

  return (
    <div className='container mx-auto p-6 max-w-4xl'>
      <AddQuestionsHeader quizTitle={quizData?.title} isLoading={fetchPending} />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <AddQuestionsForm />
        <PreviouslyAddedQuestions
          isPending={questionPending}
          isSuccess={questionSuccess}
          questions={questions}
        />
      </div>
    </div>
  );
};

export default AddQuestion;
