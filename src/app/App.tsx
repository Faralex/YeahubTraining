import { RouterProvider } from "./providers/RouterProvider";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider />
    </Provider>
  );
};
