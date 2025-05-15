import { useGetPublicQuestionsQuery } from "../../../../entities/Question/api/questionsApi";

export const ChooseQuestions = () => {
  const { data, isLoading, error } = useGetPublicQuestionsQuery({
    page: 1,
    limit: 10,
  });

  if (isLoading) {
    return <div>Загрузка вопросов...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Ошибка загрузки вопросов</div>;
  }

  const questions = data?.data || [];

  return (
    <div>
      <h2>Вопросы:</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.title}</li>
        ))}
      </ul>
    </div>
  );
};
