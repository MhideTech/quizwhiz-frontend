export interface CreateQuizFormType {
  title: string;
  description: string;
  tags?: string[];
}

export interface CreateQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}
