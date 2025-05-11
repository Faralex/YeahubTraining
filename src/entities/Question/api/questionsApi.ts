import { baseApi } from "../../../shared/api/baseApi";
import { GetPublicQuestionsArgs, GetPublicQuestionsResponse } from "../types";
import { Question } from "../types";

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<GetPublicQuestionsResponse, GetPublicQuestionsArgs>({
      query: ({ page, limit, skills }) => {
        let url = `questions/public-questions?page=${page}&limit=${limit}`;
        if (skills && skills.length > 0) {
          url += `&skills=${skills.join(",")}`;
        }
        return url;
      },
      providesTags: ["Question"],
    }),

    getPublicQuestionById: builder.query<Question, number>({
      query: (id) => `questions/public-questions/${id}`,
      providesTags: ["Question"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPublicQuestionsQuery,
  useGetPublicQuestionByIdQuery,
} = questionApi;
