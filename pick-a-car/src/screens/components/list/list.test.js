import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook } from "@testing-library/react-hooks";
import { useGetVehicles } from "../../car/hooks";

const createWrapper = () => {
  // ✅ creates a new QueryClient for each test
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
        refetchOnWindowFocus: false,
        staleTime: 30000,
        cacheTime: 30000,
      },
    },
  });
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("should load vehicles", async () => {
  const { result, waitFor } = renderHook(
    () => useGetVehicles("FORD", "fiesta"),
    {
      wrapper: createWrapper(),
    }
  );
  await waitFor(() => result.current.isSuccess);
  expect(result.current.data.length).toBe(121);
});
