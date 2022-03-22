import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook } from "@testing-library/react-hooks";
import { useGetAllMakes, useGetModels } from "./hooks";

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

test("should load makes", async () => {
  const { result, waitFor } = renderHook(() => useGetAllMakes(), {
    wrapper: createWrapper(),
  });
  await waitFor(() => result.current.isSuccess);
  expect(result.current.data.length).toBe(59);
});

test("should load models", async () => {
  const { result, waitFor } = renderHook(() => useGetModels("BMW"), {
    wrapper: createWrapper(),
  });
  await waitFor(() => result.current.isSuccess);
  expect(result.current.data.length).toBe(19);
});

test("should not load models", async () => {
  const { result, waitFor } = renderHook(() => useGetModels("AUDI"), {
    wrapper: createWrapper(),
  });
  await waitFor(() => result.current.isSuccess);
  expect(result.current.data).toEqual([]);
});
