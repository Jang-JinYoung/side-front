import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@public/style.css";
import { Header, GoogleMap, Counter, Popup } from "@components/";
import { MainPage, BoardPage, BoardDetailPage, SkeletonPage } from "@pages/";

/*
staleTime은 데이터가 최신 상태인지 확인하기 위해 캐시된 데이터를 얼마나 오래 사용할 수 있는지를 나타내는 시간(밀리초)입니다.
staleTime이 지난 후에 해당 쿼리가 다시 호출되면, 이전 캐시된 데이터가 그대로 반환됩니다. 
이렇게 함으로써, 데이터의 유효성을 빠르게 확인하면서도 네트워크 요청을 줄일 수 있습니다.

cacheTime은 캐시된 데이터가 얼마나 오랫동안 존재해야 하는지를 나타내는 시간(밀리초)입니다.
cacheTime이 지나면, 캐시된 데이터가 삭제됩니다. 
이렇게 함으로써, 메모리와 디스크 공간을 절약하면서도 최신 데이터를 유지할 수 있습니다.
*/
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 쿼리에 적용되는 전역 옵션
      staleTime: 300000, // 5분 간격으로 refetch -> 5 * 100 * 60
      cacheTime: 600000, // 10분 동안 캐시 유지 -> 10 * 100 * 60
    },
    mutations: {
      // 변이에 적용되는 전역 옵션
      // throwOnError: true, // 변이 실패 시 에러 던지기
    },
  },
});

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
