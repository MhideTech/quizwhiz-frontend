import { Card, CardHeader, CardContent, CardTitle } from '@/common/components/ui/card';

const PreviouslyAddedQuestions = ({ questions, isPending, isSuccess }) => {
  if (isPending || !isSuccess) {
    // Skeleton state
    return (
      <Card className='animate-pulse'>
        <CardHeader>
          <CardTitle className='h-5 w-40 bg-gray-300 rounded'></CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-3'>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='p-3 border rounded-md space-y-2'>
                <div className='h-4 w-3/4 bg-gray-300 rounded'></div>
                <div className='space-y-1'>
                  <div className='h-3 w-1/2 bg-gray-300 rounded'></div>
                  <div className='h-3 w-2/3 bg-gray-300 rounded'></div>
                  <div className='h-3 w-1/3 bg-gray-300 rounded'></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Questions Added ({questions.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {questions.length === 0 ? (
            <p className='text-muted-foreground text-center py-4'>No questions added yet</p>
          ) : (
            <div className='space-y-3'>
              {questions.map((q, index) => (
                <div key={q.id} className='p-3 border rounded-md'>
                  <p className='font-medium text-sm mb-2'>
                    {index + 1}. {q.text.length > 50 ? `${q.text.substring(0, 50)}...` : q.text}
                  </p>
                  <div className='space-y-1'>
                    {q.answers.map((option) => (
                      <p
                        key={option.id}
                        className={`text-xs ${
                          option.isCorrect ? 'text-green-600 font-medium' : 'text-muted-foreground'
                        }`}
                      >
                        {option.isCorrect ? '✓ ' : '• '}
                        {option.text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PreviouslyAddedQuestions;
