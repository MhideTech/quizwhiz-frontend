import { Button } from '@/common/components/ui/button';
import { Card, CardContent } from '@/common/components/ui/card';
import { Play, UserCheck, UserX, Copy, ExternalLink } from 'lucide-react';

interface LobbyActionsProps {
  isHost: boolean;
  isReady: boolean;
  canStartGame: boolean;
  gameCode: string;
  onToggleReady: () => void;
  onStartGame: () => void;
  onLeaveGame: () => void;
  onCopyGameCode: () => void;
  onInviteFriends: () => void;
}

const LobbyActions: React.FC<LobbyActionsProps> = ({
  isHost,
  isReady,
  canStartGame,
  gameCode,
  onToggleReady,
  onStartGame,
  onLeaveGame,
  onCopyGameCode,
  onInviteFriends,
}) => {
  return (
    <div className='space-y-4'>
      {/* Game Code */}
      <Card>
        <CardContent className='p-4'>
          <div className='text-center space-y-3'>
            <div>
              <p className='text-sm text-gray-600 mb-1'>Game Code</p>
              <div className='flex items-center justify-center gap-2'>
                <code className='text-2xl font-bold text-quiz-primary bg-gray-100 px-4 py-2 rounded-lg'>
                  {gameCode}
                </code>
                <Button variant='outline' size='sm' onClick={onCopyGameCode}>
                  <Copy className='w-4 h-4' />
                </Button>
              </div>
            </div>
            <Button variant='outline' size='sm' onClick={onInviteFriends} className='w-full'>
              <ExternalLink className='w-4 h-4 mr-2' />
              Invite Friends
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className='space-y-3'>
        {isHost ? (
          <Button
            onClick={onStartGame}
            disabled={!canStartGame}
            className='w-full bg-quiz-primary hover:bg-quiz-secondary text-white py-3'
            size='lg'
          >
            <Play className='w-5 h-5 mr-2' />
            {canStartGame ? 'Start Game' : 'Waiting for players...'}
          </Button>
        ) : (
          <Button
            onClick={onToggleReady}
            variant={isReady ? 'default' : 'outline'}
            className={`w-full py-3 ${
              isReady
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'border-quiz-primary text-quiz-primary hover:bg-quiz-primary hover:text-white'
            }`}
            size='lg'
          >
            {isReady ? (
              <>
                <UserCheck className='w-5 h-5 mr-2' />
                Ready!
              </>
            ) : (
              <>
                <UserX className='w-5 h-5 mr-2' />
                Mark as Ready
              </>
            )}
          </Button>
        )}

        <Button
          variant='outline'
          onClick={onLeaveGame}
          className='w-full border-red-200 text-red-600 hover:bg-red-50'
        >
          Leave Game
        </Button>
      </div>
    </div>
  );
};

export default LobbyActions;
