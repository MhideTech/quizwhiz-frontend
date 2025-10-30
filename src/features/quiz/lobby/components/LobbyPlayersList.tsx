import { Card, CardContent, CardHeader, CardTitle } from '@/common/components/ui/card';
import { Badge } from '@/common/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/common/components/ui/avatar';
import { Users, Crown, User } from 'lucide-react';

interface Player {
  id: string;
  name: string;
  avatar?: string;
  isHost: boolean;
  isReady: boolean;
  joinedAt: string;
}

interface LobbyPlayersListProps {
  players: Player[];
  currentUserId: string;
  maxPlayers: number;
}

const LobbyPlayersList: React.FC<LobbyPlayersListProps> = ({
  players,
  currentUserId,
  maxPlayers,
}) => {
  const getPlayerInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Users className='w-5 h-5 text-quiz-primary' />
            Players
          </div>
          <Badge variant='outline'>
            {players.length}/{maxPlayers}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-3 max-h-64 overflow-y-auto'>
          {players.map((player) => (
            <div
              key={player.id}
              className={`flex items-center justify-between p-3 rounded-lg border ${
                player.id === currentUserId ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'
              }`}
            >
              <div className='flex items-center gap-3'>
                <Avatar className='w-8 h-8'>
                  <AvatarImage src={player.avatar} alt={player.name} />
                  <AvatarFallback className='text-xs'>
                    {getPlayerInitials(player.name)}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <div className='flex items-center gap-2'>
                    <span className='font-medium text-sm'>
                      {player.name}
                      {player.id === currentUserId && ' (You)'}
                    </span>
                    {player.isHost && <Crown className='w-4 h-4 text-yellow-500' />}
                  </div>
                  <p className='text-xs text-gray-500'>
                    Joined {new Date(player.joinedAt).toLocaleTimeString()}
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <Badge
                  variant={player.isReady ? 'default' : 'secondary'}
                  className={`text-xs ${
                    player.isReady ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {player.isReady ? 'Ready' : 'Not Ready'}
                </Badge>
              </div>
            </div>
          ))}

          {/* Empty slots */}
          {Array.from({ length: maxPlayers - players.length }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className='flex items-center gap-3 p-3 rounded-lg border border-dashed border-gray-300 bg-gray-50'
            >
              <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center'>
                <User className='w-4 h-4 text-gray-400' />
              </div>
              <span className='text-sm text-gray-400'>Waiting for player...</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LobbyPlayersList;
