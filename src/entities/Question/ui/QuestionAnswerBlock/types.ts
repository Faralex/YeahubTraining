export interface QuestionAnswerBlockProps {
  title: string;
  content: string;
  isTruncated?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
  withToggle?: boolean;
}
