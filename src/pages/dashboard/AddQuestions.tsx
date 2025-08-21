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
import { addQuestionToQuiz, getQuestions, getQuiz } from '@/features/quiz/api';

import { QuestionFormData, Quiz as QuizType } from '@/features/quiz/types';
import AddQuestionsForm from '@/features/quiz/components/AddQuestionsForm';
import PreviouslyAddedQuestions from '@/features/quiz/components/PreviouslyAddedQuestions';

const AddQuestion = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // initial quiz loading
  const { id } = useParams<{ id: string }>();
  const locationState = useLocation().state as { id?: string } | undefined;
  const shouldFetch = !locationState || locationState.id !== id;
  const {
    data: fetchedQuizData,
    isSuccess: fetchIsSuccess,
    isPending: fetchPending,
  } = useQuery({
    queryKey: ['quiz', id],
    queryFn: () => getQuiz(id),
    enabled: shouldFetch,
  });

  const {
    data: questionsData,
    isSuccess: questionSuccess,
    isPending: questionPending,
  } = useQuery({ queryKey: ['questions', id], queryFn: () => getQuestions(id) });

  const questions = questionsData?.data;
  console.log(questions);
  console.log(fetchedQuizData);
  const quizData = !shouldFetch ? locationState : fetchIsSuccess ? fetchedQuizData.data : null;

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
