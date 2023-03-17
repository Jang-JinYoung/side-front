import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@public/style.css";
import { Header, GoogleMap, Counter, Popup } from "@components/";
import { MainPage, BoardPage, BoardDetailPage, SkeletonPage } from "@pages/";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Popup />
      <BrowserRouter>
        <Routes>
          {/* <Header name="jjy" /> */}
          <Route path="/" element={<MainPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/board/:id" element={<BoardDetailPage />} />
          <Route path="/skeleton" element={<SkeletonPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
