import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@/common/components/ui/button';
import { Input } from '@/common/components/ui/input';
import { Label } from '@/common/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/common/components/ui/card';
import { Badge } from '@/common/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Plus, ArrowLeft, CheckCircle } from 'lucide-react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { addQuestionToQuiz, getQuestions, getQuiz } from '@/features/quiz/manage/api.ts';

import { QuestionFormData, Quiz as QuizType } from '@/features/quiz/manage/types';
import AddQuestionsForm from '@/features/quiz/manage/components/AddQuestionsForm';
import PreviouslyAddedQuestions from '@/features/quiz/manage/components/PreviouslyAddedQuestions';
import { useQuestions, useQuiz, useShouldFetch } from '@/features/quiz/manage/hooks';

const AddQuestion = () => {
  const navigate = useNavigate();

  // todo better name for this
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
      {/* Header */}
      <div className='mb-6'>
        <Button variant='ghost' onClick={() => navigate('/dashboard')} className='mb-4'>
          <ArrowLeft className='w-4 h-4 mr-2' />
          Back to Dashboard
        </Button>
        <div className='flex items-center gap-3 mb-2'>
          <h1 className='text-3xl font-bold'>Add Questions</h1>
          {/* <Badge variant='secondary'>{questions.length} questions</Badge> */}
        </div>
        <p className='text-muted-foreground'>
          Adding questions to:{' '}
          {fetchPending ? (
            <span className='inline-block h-4 w-32 bg-gray-300 rounded animate-pulse'></span>
          ) : (
            <span className='font-medium'>{quizData.title}</span>
          )}
        </p>
      </div>

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
