export interface Answer {
  answer: string;
  valid: boolean;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}
