import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AppLayout from "./components/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="*" element={<AppLayout />} />
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
