export interface QuestionContentProps {
  title: string;
  shortAnswer?: string;
  showAnswer: boolean;
  onToggleAnswer: () => void;
}
