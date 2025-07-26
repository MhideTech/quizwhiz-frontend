export interface CreateQuizFormType {
  title: string;
  description: string;
  category: string;
  isPublic: boolean;
  timeLimit: string;
  difficulty: string;
  tags?: string[];
}

export interface CreateQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}
