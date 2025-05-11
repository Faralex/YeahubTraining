import { StoreProvider } from "./StoreProvider";
import { RouterProvider } from "./RouterProvider";

export const AppProviders = () => {
  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
};
