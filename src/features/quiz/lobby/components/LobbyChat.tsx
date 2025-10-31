import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/common/components/ui/card';
import { Input } from '@/common/components/ui/input';
import { Button } from '@/common/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/common/components/ui/avatar';
import { MessageCircle, Send } from 'lucide-react';

interface ChatMessage {
  id: string;
  playerId: string;
  playerName: string;
  playerAvatar?: string;
  message: string;
  timestamp: string;
  isSystem?: boolean;
}

interface LobbyChatProps {
  messages: ChatMessage[];
  currentUserId: string;
  onSendMessage: (message: string) => void;
}

const LobbyChat: React.FC<LobbyChatProps> = ({ messages, currentUserId, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage.trim());
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getPlayerInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className='h-full flex flex-col'>
      <CardHeader className='pb-3'>
        <CardTitle className='flex items-center gap-2'>
          <MessageCircle className='w-5 h-5 text-quiz-primary' />
          Chat
        </CardTitle>
      </CardHeader>
      <CardContent className='flex-1 flex flex-col p-0'>
        {/* Messages */}
        <div className='flex-1 overflow-y-auto px-4 space-y-3 max-h-64'>
          {messages.length === 0 ? (
            <div className='text-center text-gray-500 text-sm py-8'>
              No messages yet. Say hello! 👋
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} className='flex gap-2'>
                {!message.isSystem && (
                  <Avatar className='w-6 h-6 mt-1'>
                    <AvatarImage src={message.playerAvatar} alt={message.playerName} />
                    <AvatarFallback className='text-xs'>
                      {getPlayerInitials(message.playerName)}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div className={`flex-1 ${message.isSystem ? 'text-center' : ''}`}>
                  {message.isSystem ? (
                    <p className='text-xs text-gray-500 italic'>{message.message}</p>
                  ) : (
                    <>
                      <div className='flex items-center gap-2 mb-1'>
                        <span className='text-xs font-medium text-gray-700'>
                          {message.playerName}
                          {message.playerId === currentUserId && ' (You)'}
                        </span>
                        <span className='text-xs text-gray-400'>
                          {new Date(message.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                      <p className='text-sm text-gray-900'>{message.message}</p>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Message Input */}
        <div className='p-4 border-t'>
          <div className='flex gap-2'>
            <Input
              placeholder='Type a message...'
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className='flex-1'
            />
            <Button onClick={handleSendMessage} disabled={!newMessage.trim()} size='sm'>
              <Send className='w-4 h-4' />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LobbyChat;
