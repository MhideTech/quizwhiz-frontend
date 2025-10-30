const QuizFeedLoading: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes loading-bar-animation {
            0% { width: 0%; }
            30% { width: 30%; }
            60% { width: 50%; }
            100% { width: 95%; }
          }
          .loading-bar-animated {
            animation: loading-bar-animation 5s ease-out forwards;
          }
        `}
      </style>
      <div className='w-screen fixed top-0 left-0 bg-gray-200 h-1 dark:bg-gray-700'>
        <div className='bg-blue-600 h-1 loading-bar-animated'></div>
      </div>
    </>
  );
};

export default QuizFeedLoading;
