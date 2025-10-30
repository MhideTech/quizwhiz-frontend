export interface Player {
  id: string;
  name: string;
  avatar?: string;
  isHost: boolean;
  isReady: boolean;
  joinedAt: string;
}

export interface ChatMessage {
  id: string;
  playerId: string;
  playerName: string;
  playerAvatar?: string;
  message: string;
  timestamp: string;
  isSystem?: boolean;
}

export interface LobbySettingsData {
  allowLateJoin: boolean;
  showAnswers: boolean;
  timePerQuestion: number;
  randomizeQuestions: boolean;
  allowHints: boolean;
}

export interface QuizInfo {
  questionCount: number;
  estimatedTime: string;
  maxPlayers: number;
  pointsPerQuestion: number;
  creator: string;
  description?: string;
}
