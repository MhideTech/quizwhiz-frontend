/**
 * `AddQuestionsForm` is a React component that renders a form for adding new quiz questions.
 * It allows users to input a question, dynamically add or remove answer options (between 2 and 5),
 * and select the correct answer using a radio button. The form includes validation for required fields
 * and displays error messages for invalid inputs. The submit button is disabled while loading.
 */

// Add the is correct toggle

import { Card, CardHeader, CardContent, CardTitle } from '@/common/components/ui/card';
import { Label } from '@/common/components/ui/label';
import { Input } from '@/common/components/ui/input';
import { Button } from '@/common/components/ui/button';
import { useForm } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addQuestionToQuiz } from '../../api';
import { useParams } from 'react-router-dom';
import { QuestionFormData } from '../types';
import { toast } from 'sonner';

const AddQuestionsForm = function () {
  return (
    <div className='lg:col-span-2'>
      <Card>
        <CardHeader>
          <CardTitle>Add New Question</CardTitle>
        </CardHeader>
        <CardContent>
          <BareAddNewQuestionsForm />
        </CardContent>
      </Card>
    </div>
  );
};

const BareAddNewQuestionsForm = function () {
  const [optionCount, setOptionCount] = useState<number>(4);
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const {
    mutate,
    isPending: isLoading,
    isSuccess,
    isError,
    data,
  } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: QuestionFormData }) =>
      addQuestionToQuiz(id, data),
  });

  const correctAnswerIndex = watch('correctAnswerIndex');

  const onSubmit = function (quizData) {
    // todo wrap this in a function and abstract away
    const text: string = quizData.question_text;
    const answers = Object.entries(quizData)
      .filter(([key, val]) => key.includes('option') && val !== '')
      .map((val) => {
        if (typeof val[1] !== 'string') return;

        if (val[0].endsWith(correctAnswerIndex)) {
          return { isCorrect: true, text: val[1] };
        } else return { isCorrect: false, text: val[1] };
      });
    const submitObject = { text, answers };

    mutate({ id, data: submitObject });
  };

  const handleAddOption = function () {
    setOptionCount((prev) => (prev += 1));
  };

  const handleRemoveOption = function () {
    setOptionCount((prev) => (prev -= 1));
  };

  useEffect(() => {
    if (!isSuccess) return;
    toast.success('Question Successfully Added');
    queryClient.invalidateQueries({ queryKey: ['questions', id] });
    reset();
  }, [isSuccess, queryClient, id, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      {/* Question Input */}
      <div>
        <Label htmlFor='question'>Question</Label>
        <Input
          id='question'
          {...register('question_text', { required: 'Question is required' })}
          placeholder='Enter your question...'
          className='mt-1'
          disabled={isLoading}
        />
        {errors.question_text?.message && (
          <p className='text-sm text-destructive mt-1'>{String(errors.question_text.message)}</p>
        )}
      </div>

      {/* Options */}
      <div>
        <div className='flex items-center justify-between mb-3'>
          <Label>Options</Label>
          <div className='flex gap-2'>
            <Button
              type='button'
              variant='outline'
              size='sm'
              onClick={handleRemoveOption}
              disabled={optionCount <= 2 || isLoading}
            >
              <Trash2 className='w-4 h-4' />
            </Button>
            <Button
              type='button'
              variant='outline'
              size='sm'
              onClick={handleAddOption}
              disabled={optionCount >= 5 || isLoading}
            >
              <Plus className='w-4 h-4' />
            </Button>
          </div>
        </div>

        {/* Todo perfect react key for a dynamiic list like this that changes */}
        {Array.from({ length: optionCount }, (_, index) => (
          <div key={index} className='flex items-center gap-3 mb-3'>
            <div className='flex-1'>
              <Input
                {...register(`option_${index}`, {
                  required: index < 2 ? 'This option is required' : false,
                  validate: (value) => {
                    if (Number(correctAnswerIndex[index]) === index && value === '')
                      return 'A correct answer must have a question?';
                    return true;
                  },
                })}
                disabled={isLoading}
                placeholder={`Option ${index + 1}`}
              />
              {errors[`option_${index}`]?.message && (
                <p className='text-sm text-destructive mt-1'>
                  {errors[`option_${index}`].message as string}
                </p>
              )}
            </div>
            <input
              type='checkbox'
              disabled={isLoading}
              {...register('correctAnswerIndex', {
                required: 'A question needs at least correct one answer',
              })}
              value={index}
              className='text-primary'
              title='Mark as correct answer'
            />
            {/* {correctAnswerIndex === index ? (
              <CheckCircle className='w-5 h-5 text-green-600' />
            ) : null} */}
          </div>
        ))}
        <p className='text-sm text-muted-foreground'>
          Select the checkbox next to the correct answer
        </p>

        {errors[`correctAnswerIndex`]?.message && (
          <p className='text-sm text-destructive mt-1'>
            {errors[`correctAnswerIndex`].message as string}
          </p>
        )}
      </div>

      <Button type='submit' className='w-full' disabled={isLoading}>
        {isLoading ? 'Adding Question...' : 'Add Question'}
      </Button>
    </form>
  );
};

export default AddQuestionsForm;
