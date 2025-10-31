import {
  LobbyHeader,
  LobbyQuizInfo,
  LobbyPlayersList,
  LobbySettings,
  LobbyActions,
  LobbyChat,
} from '@/features/quiz/lobby/components';
import { useLobbyState } from '@/features/quiz/lobby/hooks';

const Lobby = () => {
  const {
    players,
    messages,
    settings,
    currentUserId,
    isReady,
    gameCode,
    isHost,
    canStartGame,
    handleToggleReady,
    handleStartGame,
    handleLeaveGame,
    handleCopyGameCode,
    handleInviteFriends,
    handleSendMessage,
    handleSettingsChange,
    handleBack,
    handleShare,
    handleSettingsModal,
  } = useLobbyState();

  // Mock quiz data - in real app this would come from props or API
  const quizData = {
    title: 'World Geography Challenge',
    category: 'Geography',
    difficulty: 'Medium',
    questionCount: 20,
    estimatedTime: '15 min',
    maxPlayers: 8,
    pointsPerQuestion: 100,
    creator: 'John Doe',
    description:
      'Test your knowledge of world geography with questions about countries, capitals, landmarks, and more!',
  };

  return (
    <div className='min-h-screen bg-gray-50 py-6'>
      <div className='container mx-auto px-4'>
        <div className='max-w-7xl mx-auto'>
          <LobbyHeader
            quizTitle={quizData.title}
            quizCategory={quizData.category}
            difficulty={quizData.difficulty}
            onBack={handleBack}
            onShare={handleShare}
            onSettings={handleSettingsModal}
            isHost={isHost}
          />

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {/* Left Column - Quiz Info & Settings */}
            <div className='space-y-6'>
              <LobbyQuizInfo
                quizInfo={{
                  questionCount: quizData.questionCount,
                  estimatedTime: quizData.estimatedTime,
                  maxPlayers: quizData.maxPlayers,
                  pointsPerQuestion: quizData.pointsPerQuestion,
                  creator: quizData.creator,
                  description: quizData.description,
                }}
              />

              <LobbySettings
                settings={settings}
                onSettingsChange={handleSettingsChange}
                isHost={isHost}
              />
            </div>

            {/* Middle Column - Players */}
            <div>
              <LobbyPlayersList
                players={players}
                currentUserId={currentUserId}
                maxPlayers={quizData.maxPlayers}
              />
            </div>

            {/* Right Column - Actions & Chat */}
            <div className='space-y-6'>
              <LobbyActions
                isHost={isHost}
                isReady={isReady}
                canStartGame={canStartGame}
                gameCode={gameCode}
                onToggleReady={handleToggleReady}
                onStartGame={handleStartGame}
                onLeaveGame={handleLeaveGame}
                onCopyGameCode={handleCopyGameCode}
                onInviteFriends={handleInviteFriends}
              />

              <LobbyChat
                messages={messages}
                currentUserId={currentUserId}
                onSendMessage={handleSendMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
