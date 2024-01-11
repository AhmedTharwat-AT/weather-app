import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AppLayout from "./components/AppLayout";
import WeatherProvider from "./context/WeatherContext";

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
        <WeatherProvider>
          <Routes>
            <Route path="/" element={<AppLayout />} />
            <Route path="*" element={<AppLayout />} />
          </Routes>
          <ReactQueryDevtools />
        </WeatherProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
