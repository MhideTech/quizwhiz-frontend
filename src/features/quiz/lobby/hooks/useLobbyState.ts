import { useReducer } from 'react';

interface Player {
  id: string;
  name: string;
  avatar?: string;
  isHost: boolean;
  isReady: boolean;
  joinedAt: string;
}

interface ChatMessage {
  id: string;
  playerId: string;
  playerName: string;
  playerAvatar?: string;
  message: string;
  timestamp: string;
  isSystem?: boolean;
}

interface LobbySettingsData {
  allowLateJoin: boolean;
  showAnswers: boolean;
  timePerQuestion: number;
  randomizeQuestions: boolean;
  allowHints: boolean;
}

interface LobbyState {
  players: Player[];
  messages: ChatMessage[];
  settings: LobbySettingsData;
  currentUserId: string;
  isReady: boolean;
  gameCode: string;
}

type LobbyAction =
  | { type: 'ADD_PLAYER'; payload: Player }
  | { type: 'REMOVE_PLAYER'; payload: string }
  | { type: 'UPDATE_PLAYER_READY'; payload: { playerId: string; isReady: boolean } }
  | { type: 'ADD_MESSAGE'; payload: ChatMessage }
  | { type: 'UPDATE_SETTINGS'; payload: Partial<LobbySettingsData> }
  | { type: 'TOGGLE_READY' }
  | { type: 'SET_CURRENT_USER'; payload: string };

const initialState: LobbyState = {
  players: [
    {
      id: 'user1',
      name: 'John Doe',
      isHost: true,
      isReady: true,
      joinedAt: new Date().toISOString(),
    },
    {
      id: 'user2',
      name: 'Jane Smith',
      isHost: false,
      isReady: false,
      joinedAt: new Date(Date.now() - 30000).toISOString(),
    },
    {
      id: 'user3',
      name: 'Mike Johnson',
      isHost: false,
      isReady: true,
      joinedAt: new Date(Date.now() - 60000).toISOString(),
    },
  ],
  messages: [
    {
      id: 'msg1',
      playerId: 'system',
      playerName: 'System',
      message: 'John Doe created the game',
      timestamp: new Date(Date.now() - 120000).toISOString(),
      isSystem: true,
    },
    {
      id: 'msg2',
      playerId: 'user2',
      playerName: 'Jane Smith',
      message: 'Hey everyone! Ready for this quiz?',
      timestamp: new Date(Date.now() - 90000).toISOString(),
    },
    {
      id: 'msg3',
      playerId: 'user3',
      playerName: 'Mike Johnson',
      message: "Let's do this! 🚀",
      timestamp: new Date(Date.now() - 60000).toISOString(),
    },
  ],
  settings: {
    allowLateJoin: true,
    showAnswers: true,
    timePerQuestion: 30,
    randomizeQuestions: false,
    allowHints: true,
  },
  currentUserId: 'user1',
  isReady: true,
  gameCode: 'ABC123',
};

const lobbyReducer = (state: LobbyState, action: LobbyAction): LobbyState => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        ...state,
        players: [...state.players, action.payload],
      };
    case 'REMOVE_PLAYER':
      return {
        ...state,
        players: state.players.filter((player) => player.id !== action.payload),
      };
    case 'UPDATE_PLAYER_READY':
      return {
        ...state,
        players: state.players.map((player) =>
          player.id === action.payload.playerId
            ? { ...player, isReady: action.payload.isReady }
            : player
        ),
      };
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: { ...state.settings, ...action.payload },
      };
    case 'TOGGLE_READY': {
      const updatedPlayers = state.players.map((player) =>
        player.id === state.currentUserId ? { ...player, isReady: !player.isReady } : player
      );
      return {
        ...state,
        players: updatedPlayers,
        isReady: !state.isReady,
      };
    }
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUserId: action.payload,
      };
    default:
      return state;
  }
};

export const useLobbyState = () => {
  const [state, dispatch] = useReducer(lobbyReducer, initialState);

  const currentPlayer = state.players.find((p) => p.id === state.currentUserId);
  const isHost = currentPlayer?.isHost || false;
  const canStartGame = state.players.length >= 2 && state.players.every((p) => p.isReady);

  const handleToggleReady = () => {
    dispatch({ type: 'TOGGLE_READY' });
  };

  const handleStartGame = () => {
    console.log('Starting game...');
    // Add game start logic here
  };

  const handleLeaveGame = () => {
    console.log('Leaving game...');
    // Add leave game logic here
  };

  const handleCopyGameCode = () => {
    navigator.clipboard.writeText(state.gameCode);
    console.log('Game code copied!');
  };

  const handleInviteFriends = () => {
    console.log('Inviting friends...');
    // Add invite logic here
  };

  const handleSendMessage = (message: string) => {
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      playerId: state.currentUserId,
      playerName: currentPlayer?.name || 'Unknown',
      playerAvatar: currentPlayer?.avatar,
      message,
      timestamp: new Date().toISOString(),
    };
    dispatch({ type: 'ADD_MESSAGE', payload: newMessage });
  };

  const handleSettingsChange = (settings: Partial<LobbySettingsData>) => {
    dispatch({ type: 'UPDATE_SETTINGS', payload: settings });
  };

  const handleBack = () => {
    console.log('Going back...');
    // Add navigation logic here
  };

  const handleShare = () => {
    console.log('Sharing game...');
    // Add share logic here
  };

  const handleSettingsModal = () => {
    console.log('Opening settings...');
    // Add settings modal logic here
  };

  return {
    ...state,
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
  };
};

export default useLobbyState;
