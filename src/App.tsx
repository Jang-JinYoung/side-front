import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "@public/style.css";
import { Header, GoogleMap, Counter } from "@components/";
import MainPage from "./pages/MainPage";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header name="jjy" />
        <MainPage />
      </div>
    </QueryClientProvider>
  );
};

export default App;
