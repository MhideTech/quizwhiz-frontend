import { Button } from '@/common/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddQuestionsHeader = ({ isLoading, quizTitle }) => {
  const navigate = useNavigate();
  return (
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
        {isLoading ? (
          <span className='inline-block h-4 w-32 bg-gray-300 rounded animate-pulse'></span>
        ) : (
          <span className='font-medium'>{quizTitle}</span>
        )}
      </p>
    </div>
  );
};

export default AddQuestionsHeader;
