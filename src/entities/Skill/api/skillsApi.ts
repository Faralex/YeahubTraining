import { baseApi } from "../../../shared/api/baseApi";
import { Skill } from "../types";

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<Skill[], void>({
      query: () => "skills",
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
