import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, Plus, Tag } from 'lucide-react';
import { Button } from '@/common/components/ui/button';
import { Input } from '@/common/components/ui/input';
import { Textarea } from '@/common/components/ui/textarea';
import { Label } from '@/common/components/ui/label';
import { Badge } from '@/common/components/ui/badge';
import { createQuiz } from '@/features/quiz/manage/api.ts';
import { useMutation } from '@tanstack/react-query';

import { CreateQuizModalProps, CreateQuizFormType } from '../types';
import { useAuth } from '@/features/auth/useAuth';
import { toast } from 'sonner';

const CreateQuizModal = ({ isOpen, onClose }: CreateQuizModalProps) => {
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<CreateQuizFormType>({
    defaultValues: {
      title: '',
      description: '',
      tags: [],
    },
  });

  const watchedTags = watch('tags');

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim().toLowerCase())) {
      const newTags = [...tags, tagInput.trim().toLowerCase()];
      setTags(newTags);
      setValue('tags', newTags);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
    setValue('tags', newTags);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const mutation = useMutation({
    mutationFn: createQuiz,
    onSuccess: (data) => {
      reset();
      setTags([]);
      setTagInput('');
      onClose();

      toast('Quiz created successfully');
    },
    onError: (error) => {
      toast('Error creating quiz');
    },
  });

  const onSubmit = async (data: CreateQuizFormType) => {
    mutation.mutate(data);
  };

  const handleClose = () => {
    reset();
    setTags([]);
    setTagInput('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Backdrop */}
      <div className='absolute inset-0 bg-black/60 backdrop-blur-sm' onClick={handleClose} />

      {/* Modal */}
      <div className='relative bg-card rounded-2xl shadow-modal border border-border max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto'>
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b border-border'>
          <h2 className='text-xl font-semibold text-foreground'>Create New Quiz</h2>
          <Button variant='ghost' size='icon' onClick={handleClose} className='rounded-full'>
            <X className='h-4 w-4' />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='p-6 space-y-6'>
          {/* Title Field */}
          <div className='space-y-2'>
            <Label htmlFor='title' className='text-sm font-medium text-foreground'>
              Quiz Title *
            </Label>
            <Input
              id='title'
              {...register('title', {
                required: 'Quiz title is required',
                minLength: {
                  value: 3,
                  message: 'Title must be at least 3 characters long',
                },
              })}
              placeholder='Enter your quiz title...'
              className={errors.title ? 'border-destructive' : ''}
            />
            {errors.title && <p className='text-sm text-destructive'>{errors.title.message}</p>}
          </div>

          {/* Description Field */}
          <div className='space-y-2'>
            <Label htmlFor='description' className='text-sm font-medium text-foreground'>
              Description *
            </Label>
            <Textarea
              id='description'
              {...register('description', {
                required: 'Description is required',
                minLength: {
                  value: 10,
                  message: 'Description must be at least 10 characters long',
                },
              })}
              placeholder='Describe what your quiz is about...'
              rows={3}
              className={errors.description ? 'border-destructive' : ''}
            />
            {errors.description && (
              <p className='text-sm text-destructive'>{errors.description.message}</p>
            )}
          </div>

          {/* Tags Field */}
          <div className='space-y-2'>
            <Label className='text-sm font-medium text-foreground'>Tags</Label>
            <div className='flex gap-2'>
              <Input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder='Add a tag...'
                className='flex-1'
              />
              <Button
                type='button'
                onClick={handleAddTag}
                disabled={!tagInput.trim()}
                size='default'
                variant='outline'
              >
                <Plus className='h-4 w-4' />
              </Button>
            </div>

            {/* Tags Display */}
            {tags.length > 0 && (
              <div className='flex flex-wrap gap-2 mt-3'>
                {tags.map((tag) => (
                  <Badge key={tag} variant='default' className='flex items-center gap-1 px-3 py-1'>
                    <Tag className='h-3 w-3' />
                    {tag}
                    <button
                      type='button'
                      onClick={() => handleRemoveTag(tag)}
                      className='ml-1 hover:text-destructive'
                    >
                      <X className='h-3 w-3' />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className='flex gap-3 pt-4'>
            <Button type='button' variant='outline' onClick={handleClose} className='flex-1'>
              Cancel
            </Button>
            <Button type='submit' disabled={isSubmitting} className='flex-1'>
              {isSubmitting ? 'Creating...' : 'Create Quiz'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateQuizModal;
