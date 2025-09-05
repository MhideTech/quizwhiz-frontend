import { Input } from '@/common/components/ui/input';
import { Label } from '@/common/components/ui/label';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { loginWithEmail } from '../api';
import { LoginResponse, LoginWithEmailParams } from '../types';
import { Button } from '@/common/components/ui/button';
import { useAuth } from '../useAuth';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';
import axiosInstance from '@/common/api/axiosInstance';
import queryClient from '@/app/queryClient';

const LoginForm = () => {
  const { register, reset, handleSubmit } = useForm();
  const { setUser } = useAuth(); // only need setUser now
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: loginWithEmail,
    onSuccess: (data: LoginResponse) => {
      const { accessToken, user } = data;

      // todo abstract this login functionality away
      if (accessToken && user) {
        // Set global Authorization header
        axiosInstance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        queryClient.invalidateQueries({ queryKey: ['session'] });
        toast.success('Logged in successfully!');
        navigate('/feed');
      }

      reset();
    },
    onError: () => {
      toast.error('Invalid user credentials');
    },
  });

  const isLoading = mutation.isPending;

  const onSubmit = (data: LoginWithEmailParams) => {
    mutation.mutate(data);
  };

  return (
    <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='email'
          placeholder='Enter your email'
          className='h-12'
          {...register('email', { required: 'This field is required' })}
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <Label htmlFor='password'>Password</Label>
          <Link to='/forgot-password' className='text-sm text-quiz-primary hover:underline'>
            Forgot password?
          </Link>
        </div>
        <Input
          id='password'
          type='password'
          placeholder='Enter your password'
          className='h-12'
          {...register('password', { required: 'This field is required' })}
        />
      </div>

      <Button
        type='submit'
        className={`w-full h-12 bg-quiz-primary hover:bg-quiz-primary/90 text-white ${isLoading && 'cursor-not-allowed'}`}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className='flex items-center gap-2'>
            <Loader className='animate-spin' size={20} />
            Signing in
          </div>
        ) : (
          'Log In'
        )}
      </Button>
    </form>
  );
};

export default LoginForm;
