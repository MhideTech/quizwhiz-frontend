import {
  SinglePlayerLobbyHeader,
  SinglePlayerQuizPreview,
  SinglePlayerGameSettings,
  SinglePlayerActions,
  SinglePlayerRecentAttempts,
} from '@/features/quiz/lobby/components';
import { useSinglePlayerLobbyState } from '@/features/quiz/lobby/hooks';

const SinglePlayerLobby = () => {
  const {
    isBookmarked,
    settings,
    recentAttempts,
    personalBest,
    hasAttempted,
    handleToggleBookmark,
    handleSettingsChange,
    handleStartQuiz,
    handlePracticeMode,
    handleBack,
    handleShare,
    handleViewAttemptDetails,
  } = useSinglePlayerLobbyState();

  // Mock quiz data - in real app this would come from props or API
  const quizData = {
    title: 'World Geography Challenge',
    category: 'Geography',
    difficulty: 'Medium',
    questionCount: 20,
    estimatedTime: '15 min',
    pointsPerQuestion: 100,
    creator: 'John Doe',
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
    description:
      'Test your knowledge of world geography with questions about countries, capitals, landmarks, and more! This comprehensive quiz covers all continents and includes both basic and advanced geographical concepts.',
    totalPlays: 1247,
    averageScore: 73,
    tags: ['Geography', 'Countries', 'Capitals', 'Landmarks', 'World Knowledge'],
  };

  return (
    <div className='min-h-screen bg-gray-50 py-6'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <SinglePlayerLobbyHeader
            quizTitle={quizData.title}
            quizCategory={quizData.category}
            difficulty={quizData.difficulty}
            isBookmarked={isBookmarked}
            onBack={handleBack}
            onShare={handleShare}
            onToggleBookmark={handleToggleBookmark}
          />

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {/* Left Column - Quiz Preview */}
            <div className='lg:col-span-2 space-y-6'>
              <SinglePlayerQuizPreview quizData={quizData} />

              <SinglePlayerGameSettings
                settings={settings}
                onSettingsChange={handleSettingsChange}
              />
            </div>

            {/* Right Column - Actions & History */}
            <div className='space-y-6'>
              <SinglePlayerActions
                onStartQuiz={handleStartQuiz}
                onPracticeMode={handlePracticeMode}
                onBack={handleBack}
                personalBest={personalBest}
                hasAttempted={hasAttempted}
              />

              <SinglePlayerRecentAttempts
                attempts={recentAttempts}
                onViewDetails={handleViewAttemptDetails}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayerLobby;
