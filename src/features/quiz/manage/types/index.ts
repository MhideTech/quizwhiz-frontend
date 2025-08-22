export interface CreateQuizFormType {
  title: string;
  description: string;
  tags?: string[];
}

export interface CreateQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface QuestionFormData {
  text: string;
  answers: Answer[]; // At least 2 answers, no upper limit
}

// export interface Question {
//   id: string;
//   question: string;
//   options: string[];
//   correctAnswerIndex: number;
// }

export interface Quiz {
  id: string;
  title: string;
  questions: QuestionFormData[];
}
