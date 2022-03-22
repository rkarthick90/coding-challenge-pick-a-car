import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";
import GlobalResetCSS from "./reset.css";
import Car from "./screens/car";

const ErrorFallBack = () => {
  return <StyledErrorBoundary> Something went wrong </StyledErrorBoundary>;
};

function App() {
  const queryClient = React.useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 3,
          refetchOnWindowFocus: false,
          staleTime: 30000,
          cacheTime: 30000,
        },
      },
    })
  );
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <QueryClientProvider client={queryClient.current}>
          <Car />
        </QueryClientProvider>
      </ErrorBoundary>
      <GlobalResetCSS />
    </>
  );
}

export default App;

export const StyledErrorBoundary = styled.div`
  color: #000;
  background: #ebeff3;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
    "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    color: #576c7d;
  }
`;
