export interface GetPublicQuestionsArgs {
  page: number;
  limit: number;
  title?: string;
  complexity?: number[];
  skills?: string[];
}

export interface GetPublicQuestionsResponse {
  data: Question[];
  page: number;
  limit: number;
  total: number;
}

export interface Question {
  id: number;
  title: string;
  description?: string;
  shortAnswer?: string;
  fullAnswer?: string;
}
