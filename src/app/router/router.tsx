import { Navigate } from "react-router-dom";
import { createBrowserRouter, RouterProvider as Router } from "react-router-dom";
import { Layout } from "../layout/ui/Layout";
import { InterviewSetupPage } from "../../pages/InterviewSetupPage";
import { QuestionPage } from "../../pages/QuestionPage";
import { InterviewResultPage } from "../../pages/InterviewResultPage";
import { QuestionDetailsPage } from "../../pages/QuestionDetailsPage";
import { NotFoundPage } from "../../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <InterviewSetupPage />,
      },
      {
        path: "/questions",
        element: <QuestionPage />,
      },
      {
        path: "results",
        element: <InterviewResultPage />,
      },
      {
        path: "question/:id",
        element: <QuestionDetailsPage />,
      },
      {
        path: "/404",
        element: <NotFoundPage />,
      },
      {
        path: "*",
        element: <Navigate to="/404" replace />,
      },
    ],
  },
]);

export const AppRouter = () => <Router router={router} />;
