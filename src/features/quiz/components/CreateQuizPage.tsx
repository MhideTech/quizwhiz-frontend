import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/common/components/ui/card';
import { Button } from '@/common/components/ui/button';
import { Input } from '@/common/components/ui/input';
import { Label } from '@/common/components/ui/label';
import { Textarea } from '@/common/components/ui/textarea';
import Taginput from '@/common/components/custom/TagInput';
import { toast } from 'sonner';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/common/components/ui/select';
import { Switch } from '@/common/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Plus, Save, Loader2 } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputType } from 'zlib';
import { useMutation } from '@tanstack/react-query';
import { createQuiz } from '../api';
import { CreateQuizFormType } from '../types';

const categories = [
  'General Knowledge',
  'Science',
  'History',
  'Sports',
  'Technology',
  'Arts & Literature',
  'Geography',
  'Entertainment',
];

const difficulties = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
];

const timeLimits = [
  { value: '5', label: '5 minutes' },
  { value: '10', label: '10 minutes' },
  { value: '15', label: '15 minutes' },
  { value: '20', label: '20 minutes' },
  { value: '30', label: '30 minutes' },
  { value: 'unlimited', label: 'No time limit' },
];

type Inputs = {
  title: string;
  description: string;
  tags?: string[];
};

const CreateQuiz = () => {
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    mutate,
    isPending: isLoading,
    isSuccess,
    isError,
    data,
  } = useMutation({
    mutationFn: createQuiz,
  });

  const onSubmit: SubmitHandler<CreateQuizFormType> = function (data) {
    console.log(data);
    mutate(data);
  };

  console.log(data);

  useEffect(() => {
    if (isSuccess) {
      const id = data.data.id;
      toast.success(`Quiz ${data?.data?.title.toUpperCase()} successfully created`);
      navigate(`/dashboard/quiz/${id}/add-question`, { state: data });
    }

    if (isError) {
      toast.error('Could not create quiz');
    }
  }, [isSuccess, isError, data?.data?.id, navigate, data?.data?.title, data]);

  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <div className='mb-6'>
        <h1 className='text-3xl font-bold text-foreground'>Create New Quiz</h1>
        <p className='text-muted-foreground mt-2'>
          Set up your quiz details and then add questions
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Main Form */}
          <div className='lg:col-span-2 space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Plus className='w-5 h-5' />
                  Quiz Details
                </CardTitle>
              </CardHeader>

              <CardContent className='space-y-4'>
                {/* Title */}
                <div className='space-y-2'>
                  <Label htmlFor='title'>Quiz Title *</Label>
                  <Input
                    id='title'
                    placeholder='Enter an engaging quiz title...'
                    disabled={isLoading}
                    className='text-base'
                    aria-invalid={!!errors.title}
                    aria-describedby='title-error'
                    {...register('title', {
                      required: 'Quiz title is required',
                    })}
                  />
                  {errors.title && (
                    <p id='title-error' className='text-red-500 text-sm'>
                      {errors.title.message as string}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className='space-y-2'>
                  <Label htmlFor='description'>Description</Label>
                  <Textarea
                    id='description'
                    placeholder='Provide a brief description of your quiz...'
                    disabled={isLoading}
                    rows={3}
                    className='resize-none'
                    aria-invalid={!!errors.description}
                    aria-describedby='description-error'
                    {...register('description', {
                      required: 'Quiz description is required',
                    })}
                  />
                  {errors.description && (
                    <p id='description-error' className='text-red-500 text-sm'>
                      {errors.description.message as string}
                    </p>
                  )}
                </div>

                {/* Tags */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='tags'>Tags</Label>
                    <Taginput control={control} placeholder='science (click enter to add)' />
                  </div>

                  {/* TODO: Difficulty Select – re-enable if needed */}
                  {/* <div className='space-y-2'>
                    <Label htmlFor='difficulty'>Difficulty</Label>
                    <Select disabled={isLoading}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {difficulties.map((difficulty) => (
                          <SelectItem key={difficulty.value} value={difficulty.value}>
                            {difficulty.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Settings */}
          <div className='space-y-6'>
            {/* TODO: Quiz Settings (Time limit, visibility) – re-enable if needed */}
            {/* <Card>
              <CardHeader>
                <CardTitle>Quiz Settings</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                ...
              </CardContent>
            </Card> */}

            {/* Submit + Cancel */}
            <div className='space-y-3'>
              <Button type='submit' className='w-full' disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                    Creating Quiz...
                  </>
                ) : (
                  <>
                    <Save className='w-4 h-4 mr-2' />
                    Create Quiz
                  </>
                )}
              </Button>

              <Button
                type='button'
                variant='outline'
                className='w-full'
                onClick={() => navigate('/dashboard/quizzes')}
                disabled={isLoading}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateQuiz;
